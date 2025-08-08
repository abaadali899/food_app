import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },  // ✅ only one `phone` field
  email: { type: String },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  guests: { type: Number, required: true },
  paymentMethod: { type: String },
  totalPrice: { type: Number },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
