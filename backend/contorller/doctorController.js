import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';

export const getOneDoctor = async (req, res) => {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id)
            .populate('review')
            .select('-password');

        res.status(200).json({
            success: true,
            message: 'Succesful',
            data: doctor,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: 'i' } },
                    { specialization: { $regex: query, $options: 'i' } },
                ],
            }).select('-password');
        } else {
            doctors = await doctors
                .find({ isApproved: 'approved' })
                .select('-password');
        }

        res.status(200).join({
            success: true,
            message: 'Successful',
            data: doctors,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
};
