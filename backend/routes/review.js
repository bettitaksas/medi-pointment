import { authenticate, patientAuth } from '../auth/tokenVertify.js';
import { createReview, getDoctorReview } from '../controllers/reviewController.js';
import express from 'express';

const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(getDoctorReview)
    .post(authenticate, patientAuth, createReview);

export default router;
