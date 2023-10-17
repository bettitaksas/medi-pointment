import jwt from 'jsonwebtoken';
import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";
import Doctor from "../models/DoctorSchema.js";

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '15d' }
    );
};

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
            message: 'user successfully created',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal server error! Try again',
        });
    }
};
