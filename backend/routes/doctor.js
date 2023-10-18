import {
    adminAuth,
    authenticate,
    doctorAuth,
    restrict,
} from '../auth/tokenVertify.js';
import {
    deleteDoctor,
    getAllDoctor,
    getDoctorProfile,
    getOneDoctor,
    updateDoctor,
} from '../controllers/doctorController.js';
import express from 'express';
import { createReview } from '../controllers/reviewController.js';
import reviewRouter from '../routes/review.js';

const router = express.Router();

router.use('/:doctorId/reviews', reviewRouter);

router.get('/', getAllDoctor);
router.get('/:id', getOneDoctor);
router.put('/:id', authenticate, doctorAuth, updateDoctor);
router.delete('/:id', authenticate, doctorAuth, deleteDoctor);
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

export default router;
