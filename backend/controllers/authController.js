import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js';
import bcrypt from 'bcryptjs';
import Doctor from '../models/DoctorSchema.js';

export const registerUser = async (req, res) => {
    const { name, email, password, role, photo, gender } = req.body;

    try {
        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }
        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }

        await user.save();
        res.status(200).json({
            success: true,
            message: 'User created successfully',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export const login = async (req, res) => {
    const { email } = req.body;

    try {
        let user = null;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        } else if (doctor) {
            user = doctor;
        }

        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid credentials' });
        }

        const isPasswordMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordMatch) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid credentials' });
        }

        const { password, role, appointments, ...rest } = user._doc;

        const token = generateToken(user);

        res.status(200).json({
            success: true,
            message: 'Successfully login',
            token,
            data: { ...rest },
            role,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to login' });
    }
};

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '15d' }
    );
};
