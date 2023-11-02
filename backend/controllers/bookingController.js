import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const getCheckoutSession = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId);

        console.log(req.params.doctorId);
        console.log(user.name);
        console.log(req.body.item.day);

        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            ticketPrice: doctor.ticketPrice,
            day: req.body.item.day,
            startingTime: req.body.item.startingTime,
            endingTime: req.body.item.endingTime
        });

        await booking.save();

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            req.params.doctorId,
            { $push: { bookings: booking } },
            { new: true }
        );

        const updatedUser = await User.findByIdAndUpdate(
            req.userId,
            { $push: { bookings: booking } },
            { new: true }
        );

        res.status(200).json({ success: true, message: 'Success' });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Unsuccess' });
    }

};

export const getOneBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const booking = await Booking.findById(id);

        res.status(200).json({
            success: true,
            message: 'Succesful',
            data: booking,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const { query } = req.query;
        let bookings = await Booking.find({});

        res.status(200).json({
            success: true,
            message: 'Successful',
            data: bookings,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }
};
