import { BASE_URL } from './../../config/config';
import useFetchData from './../../hooks/useFetchData';
import HashLoader from 'react-spinners/HashLoader';
import convertTime from '../../utils/timeConverter';

const Booking = (id) => {
    console.log(id.id);

    const {
        data: booking,
        loading,
        error,
    } = useFetchData(`${BASE_URL}/bookings/${id.id}`);

    return (
        <div>
            {loading && (
                <div className='flex items-center justify-center w-full h-full'>
                    <HashLoader color='#0067FF' />
                </div>
            )}

            {error && (
                <div className='flex items-center justify-center w-full h-full'>
                    <h3 className='text-headingColor text-[20px] font-semibold leading-[30px]'>
                        {error}
                    </h3>
                </div>
            )}

            {!loading && !error && (
                <div className='flex items-center justify-between mb-2'>
                    {/*                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        {booking.day}
                        :
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        {convertTime(booking.startingTime)}
                        <span> - </span>
                        {convertTime(booking.endingTime)}
                    </p> */}
                    {/*             {booking?.doctor.name} */}
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        {booking.day}
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        {booking.startingTime}
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        {booking.endingTime}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Booking;
