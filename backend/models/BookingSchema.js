import mongoose from 'mongoose';

//transactions
//avoid duplications
//bookingSchema-ban tárolni a doctort és a patient-t is
const bookingSchema = new mongoose.Schema(
    {
        doctor: {
            type: mongoose.Types.ObjectId,
            ref: 'Doctor',
            required: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        ticketPrice: { type: String, required: true },
        day: { type: String },
        startingTime: { type: String },
        endingTime: { type: String },

        isPaid: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

bookingSchema.pre(/^find/, function (next) {
    this.populate('user').populate({
        path: 'doctor',
        select: 'name',
    });

    next();
});

export default mongoose.model('Booking', bookingSchema);
