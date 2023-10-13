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