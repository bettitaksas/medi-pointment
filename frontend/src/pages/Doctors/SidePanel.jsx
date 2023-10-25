/* eslint-disable react/prop-types */
import convertTime from '../../utils/timeConverter';
import { BASE_URL, token } from './../../config/config';

const SidePanel = ({ ticketPrice, timeSlots, doctorId }) => {
    const bookingHandler = async (item) => {
        console.log(item)
        try {
            const response = await fetch(
                `${BASE_URL}/bookings/checkout-session/${doctorId}`,
                {
                    method: 'post',
                    headers: {
                        Authorization: `Bearer ${token} `,
                    },
                    body: JSON.stringify(item),
                }
            );

            const data = await response.json();

            console.log(data, item)

            if (data.session && data.session.url) {
                window.location.href = data.session.url;
            } else {
                console.error(
                    'Invalid response data: session or session.url is undefined.'
                );
            }
        } catch (error) {
            console.error('An error occurred during the fetch request:', error);
        }
    };

    return (
        <div className=' shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className='flex items-center justify-between'>
                <p className='text__para mt-0 font-semibold'>Price / Appointment</p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                    {ticketPrice} €
                </span>
            </div>

            <div className='mt-[30px]'>
                <p className='text__para mt-0 mb-10 font-semibold text-headingColor'>
                    Available Time Slots:
                </p>
                <ul className='mt-3'>
                    {timeSlots?.map((item, index) => (
                        <>
                        <li
                            key={index}
                            className='flex items-center justify-between mb-2'
                        >
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>
                                {item.day.charAt(0).toUpperCase() +
                                    item.day.slice(1)}
                                :
                            </p>
                            <p className='text-[15px] leading-6 text-textColor font-semibold'>
                                {convertTime(item.startingTime)}
                                <span> - </span>
                                {convertTime(item.endingTime)}
                            </p>
                            
                        </li>
                        <button
                        onClick={() => bookingHandler(item)}
                        className='block px-2 btn mt-0 mb-10 w-full rounded-md'
                    >
                        Book Appointment
                    </button>
                    </>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidePanel;
