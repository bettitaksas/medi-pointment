import express from 'express';
import { authenticate, restrict } from './../auth/tokenVertify.js';
import { getCheckoutSession } from '../controllers/bookingController.js';

const router = express.Router();

router.post(
    '/checkout-session/:doctorId',
    authenticate,
    restrict(['patient']),
    getCheckoutSession
);

export default router;
