import jwt from 'jsonwebtoken';
import DoctorSchema from '../models/DoctorSchema.js';
import UserSchema from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res
            .status(401)
            .json({ message: 'No token, authorization denied' });
    }

    try {
        const token = authToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res
                .status(401)
                .json({ success: false, message: 'Token has expired' });
        }

        return res
            .status(401)
            .json({ success: false, message: 'Invalid token' });
    }
};

export const restrict = (roles) => async (req, res, next) => {
    const userId = req.userId;

    let user;

    const patient = await UserSchema.findById(userId);
    const doctor = await DoctorSchema.findById(userId);

    if (patient) {
        user = patient;
    } else if (doctor) {
        user = doctor;
    } else {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!roles.includes(user.role)) {
        return res
            .status(401)
            .json({ success: false, message: "You're not authorized" });
    }

    next();
};

export const adminAuth = restrict(['admin']);

export const doctorAuth = restrict(['doctor']);

export const patientAuth = restrict(['patient', 'admin']);
