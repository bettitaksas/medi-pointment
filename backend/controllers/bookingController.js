import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js';
import Stripe from 'stripe';
import User from '../models/UserSchema.js';

export const getCheckoutSession = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId);

        console.log(req.params.doctorId);
        console.log(user.name);
        console.log(req.body);

        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            ticketPrice: doctor.ticketPrice,
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
    } catch (err) {}

    /*
     try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctor/${
                doctor.id
            }`,
            customer_email: user.email,
            client_reference_id: req.params.doctorId,
            line_items: [
                {
                    price_data: {
                        currency: 'euro',
                        unit_amount: doctor.ticketPrice * 100,
                        product_data: {
                            name: doctor.name,
                            description: doctor.bio,
                            images: [doctor.photo],
                        },
                    },
                    quantity: 1,
                },
            ],
        });

        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            ticketPrice: doctor.ticketPrice,
            session: session.id,
        });

        await booking.save();

        res.status(200).json({ success: true, message: 'Success', session });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error creating checkout session',
        });
    } */

    /*     try {

        const doctor = await Doctor.findById(req.params.doctorId);
        const user = await User.findById(req.userId);

        console.log(doctor, user)
        console.log(req)

        //add appointment to doctors object
        //add appointment to users object
        //delete bookable appointment from doctors profile

        
        
    } catch (err) {
        console.log("something went wrong")
    } */
};
