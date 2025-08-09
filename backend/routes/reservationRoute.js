import express from 'express';
import {
  createReservation,
  getAvailableSlots,
  getReservationStats
} from '../controllers/reservationController.js';

const router = express.Router();

router.post('/', createReservation);
router.get('/available-slots', getAvailableSlots);
router.get('/stats', getReservationStats);
// POST /api/reservations
router.post('/', async (req, res) => {
  try {
    const { name, date, timeSlot, guests, paymentMethod } = req.body;

    const totalPrice = guests * 500; // ₹500 per guest

    const newReservation = new Reservation({
      name,
      date,
      timeSlot,
      guests,
      paymentMethod,
      totalPrice, // ✅ Store total price in DB
    });

    const saved = await newReservation.save();

    res.status(201).json(saved); // ✅ send full saved data
  } catch (error) {
    console.error('Reservation error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});


export default router;


 
