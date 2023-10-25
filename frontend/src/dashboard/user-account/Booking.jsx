import { BASE_URL } from './../../config/config';
import useFetchData from './../../hooks/useFetchData';
import HashLoader from 'react-spinners/HashLoader';

const Booking = (id) => {
    console.log(id.id)

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
            <>
{/*             {booking?.doctor.name} */}
            {booking.day}
            {booking.startingTime}
            {booking.endingTime}
            </>
        )}
    </div>
);
}

export default Booking