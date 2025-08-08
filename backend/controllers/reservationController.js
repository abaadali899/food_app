import Reservation from '../models/reservationModel.js';

// Create a reservation
export const createReservation = async (req, res) => {
  try {
    const { name, phone, date, timeSlot, guests, paymentMethod } = req.body;

    // Debug log to check received data
    console.log('Reservation body:', req.body);

    // Validate required fields
    if (!name || !phone || !date || !timeSlot || !guests || !paymentMethod) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const totalPrice = guests * 350; // ₹500 per guest

    const newReservation = new Reservation({
      name,
      phone,
      date,
      timeSlot,
      guests,
      paymentMethod,
      totalPrice,
    });

    const saved = await newReservation.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Reservation error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get available slots
export const getAvailableSlots = async (req, res) => {
  const allSlots = ['12-15', '15-18', '18-21', '21-24'];
  const { date } = req.query;

  if (!date) return res.status(400).json({ error: 'Date is required' });

  try {
    const bookedSlots = await Reservation.find({ date }).distinct('timeSlot');
    const availableSlots = allSlots.filter(slot => !bookedSlots.includes(slot));
    res.json({ availableSlots });
  } catch (error) {
    console.error('Error fetching slots:', error);
    res.status(500).json({ error: 'Failed to fetch slots' });
  }
};

// Reservation stats (optional)
export const getReservationStats = async (req, res) => {
  try {
    const totalReservations = await Reservation.countDocuments();
    const totalGuests = await Reservation.aggregate([
      { $group: { _id: null, total: { $sum: "Rsguests" } } }
    ]);

    res.json({
      totalReservations,
      totalGuests: totalGuests[0]?.total || 0
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
};
