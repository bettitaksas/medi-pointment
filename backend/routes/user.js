import {
    adminAuth,
    patientAuth,
    authenticate,
    restrict,
} from '../auth/tokenVertify.js';
import {
    deleteUser,
    getAllUser,
    getUserProfile,
    getOneUser,
    updateUser,
    getMyAppointments,
} from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.get('/', authenticate, adminAuth, getAllUser);
router.get('/:id', authenticate, patientAuth, getOneUser);
router.put('/:id', authenticate, patientAuth, updateUser);
router.delete('/:id', authenticate, patientAuth, deleteUser);

router.get('/profile/me', authenticate, restrict(['patient']), getUserProfile);
router.get(
    '/appointments/my-appointments',
    authenticate,
    restrict(['patient']),
    getMyAppointments
);

export default router;
