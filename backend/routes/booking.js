import express from 'express';
import { authenticate, restrict } from './../auth/tokenVertify.js';
import { getCheckoutSession } from '../controllers/bookingController.js';
import {
    getAllBookings,
    getOneBooking,
} from '../controllers/bookingController.js';

const router = express.Router();

router.get('/', getAllBookings);
router.get('/:id', getOneBooking);

router.post(
    '/checkout-session/:doctorId',
    authenticate,
    restrict(['patient']),
    getCheckoutSession
);

export default router;

//`${BASE_URL}/bookings/checkout-session/${doctorId}`