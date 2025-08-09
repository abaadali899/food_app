 import React, { useState, useEffect } from 'react';
import './ReserveTable.css';

const ReserveTable = () => {
  const [timeSlot, setTimeSlot] = useState('');
  const [tableStats, setTableStats] = useState({ total: 20, booked: 0, available: 20 });
  const [formData, setFormData] = useState({
     name: '',
  phone: '',
  email: '',
  date: '',
  timeSlot: '',
  guests: '',
  paymentMethod: ''

  });
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [errors, setErrors] = useState({});
  const [availableSlots, setAvailableSlots] = useState([]);

  const timeSlots = [
    { id: '12-15', label: '12:00 PM - 3:00 PM', value: '12-15' },
    { id: '15-18', label: '3:00 PM - 6:00 PM', value: '15-18' },
    { id: '18-21', label: '6:00 PM - 9:00 PM', value: '18-21' },
    { id: '21-24', label: '9:00 PM - 12:00 AM', value: '21-24' }
  ];

  const pricePerReservation = 350;

  useEffect(() => {
    fetchTableStats();
  }, []);

  useEffect(() => {
    const fetchSlots = async () => {
      if (formData.date) {
        try {
          const response = await fetch(`/api/reservations/available-slots?date=${formData.date}`);
          const data = await response.json();
          setAvailableSlots(data.availableSlots);
        } catch (error) {
          console.error('Error fetching available slots:', error);
        }
      } else {
        setAvailableSlots([]);
      }
    };
    fetchSlots();
  }, [formData.date]);

  const fetchTableStats = async () => {
    try {
      const response = await fetch('/api/reservations/stats');
      const data = await response.json();
      setTableStats(data);
    } catch (error) {
      console.error('Error fetching table stats:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }



console.log("Sending reservation:", formData);

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      newErrors.date = 'Please select a future date';
    }
if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      // const reservationData = { ...formData, totalPrice: pricePerReservation, status: 'confirmed' };
      const reservationData = { ...formData, totalPrice: formData.guests * pricePerReservation, status: 'confirmed' };

      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData),
      });

      const result = await response.json();
      if (response.ok) {
        // setConfirmation(result);
        // setConfirmation({ reservationId: result.reservation._id, message: 'Table reserved successfully!', details: result.reservation });
        setConfirmation({ reservationId: result._id, message: 'Table reserved successfully!', details: result });

        setFormData({ date: '', timeSlot: '', guests: 1, name: '', email: '', phone: '' });
        fetchTableStats();
      } else {
        setErrors({ submit: result.message || 'Failed to make reservation' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const isSlotAvailable = (slotValue) => availableSlots.includes(slotValue);
  // const getTotalPrice = () => pricePerReservation;
  // const getTotalPrice = () => formData.guests * pricePerReservation;
  const getTotalPrice = () => {
  const guests = parseInt(formData.guests) || 0;
  if (guests > 0) {
    return guests * pricePerReservation + 500; // fee only when guests are selected
  }
  return 0;
};


  if (confirmation) {
    return (
      <div className="reserve-table-container">
        <div className="confirmation-card">
          <div className="confirmation-icon">✓</div>
          <h2>Reservation Confirmed!</h2>
          <div className="confirmation-details">
            <p><strong>Reservation ID:</strong> {confirmation.reservationId}</p>
            <p><strong>Name:</strong> {confirmation.details.name}</p>
            <p><strong>Date:</strong> {new Date(confirmation.details.date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {timeSlots.find(slot => slot.value === confirmation.details.timeSlot)?.label}</p>
            <p><strong>Guests:</strong> {confirmation.details.guests}</p>
            {/* <p><strong>Total:</strong> ${confirmation.totalPrice}</p> */}

            <p><strong>Total:</strong> Rs{confirmation.details.totalPrice}</p>
          </div>
          <button className="btn-primary" onClick={() => setConfirmation(null)}>Make Another Reservation</button>
        </div>
      </div>
    );
  }

  return (
    <div id="reserve_table" className="reserve-table-container">
      <div className="reserve-table-card">
        <h2>Reserve a Table</h2>
        <div className="table-stats">
          <div className="stat-item">
            <span className="stat-number">{tableStats.total}</span>
            <span className="stat-label">Total Tables</span>
          </div>
          <div className="stat-item">
            <span className="stat-number booked">{tableStats.booked}</span>
            <span className="stat-label">Booked</span>
          </div>
          <div className="stat-item">
            <span className="stat-number available">{tableStats.available}</span>
            <span className="stat-label">Available</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label htmlFor="date">Select Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className={errors.date ? 'error' : ''} />
            {errors.date && <span className="error-message">{errors.date}</span>}
            
          </div>

          <div className="form-group">
            <label htmlFor="timeSlot">Select Time Slot</label>
            <div className="time-slots">
              {timeSlots.map(slot => (
                <label key={slot.id} className={`time-slot ${formData.timeSlot === slot.value ? 'selected' : ''} ${formData.date && !isSlotAvailable(slot.value) ? 'unavailable' : ''}`}>
                  <input type="radio" name="timeSlot" value={slot.value} checked={formData.timeSlot === slot.value} onChange={handleInputChange} disabled={formData.date && !isSlotAvailable(slot.value)} />
                  <span>{slot.label}</span>
                  {formData.date && !isSlotAvailable(slot.value) && <span className="unavailable-badge">Full</span>}
                </label>
              ))}
            </div>
            {errors.timeSlot && <span className="error-message">{errors.timeSlot}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <select id="guests" name="guests" value={formData.guests} onChange={handleInputChange}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className={errors.name ? 'error' : ''} />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className={errors.email ? 'error' : ''} />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" className={errors.phone ? 'error' : ''} />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
          </div>
          <div className="form-group">
    <label htmlFor="paymentMethod">Payment Method</label>
    <select
      id="paymentMethod"
      name="paymentMethod"
      value={formData.paymentMethod}
      onChange={handleInputChange}
      className={errors.paymentMethod ? 'error' : ''}
    >
      <option value="">-- Select Payment Method --</option>
      <option value="Cash">Cash</option>
      <option value="Online">Online</option>
    </select>
    {errors.paymentMethod && <span className="error-message">{errors.paymentMethod}</span>}
  </div>

          <div className="pricing-section">
            <div className="pricing-row">
              <span>Reservation Fee:</span> 
               <span>Rs: 500</span>
            </div>
            {/* <div className="pricing-row total">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div> */}
            <div className="pricing-row">
  <span>Price per Guest:</span>
  <span>Rs: {pricePerReservation}</span>
</div>
{/* <div className="pricing-row total">
  <span>Total for {formData.guests} Guest{formData.guests > 1 ? 's' : ''}:</span>
  <span>Rs: {getTotalPrice()+500}</span>
</div> */}
<div className="pricing-row total">
  <span>Total for {formData.guests} Guest{formData.guests > 1 ? 's' : ''}:</span>
  <span>Rs: {getTotalPrice()}</span>
</div>

          </div>

          {errors.submit && <div className="error-message">{errors.submit}</div>}

          <button type="submit" className="btn-reserve" disabled={loading}>
            {loading ? 'Processing...' : `Reserve Table  Rs: ${getTotalPrice()}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReserveTable;


 

