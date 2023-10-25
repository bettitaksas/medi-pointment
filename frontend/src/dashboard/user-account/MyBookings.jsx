import { BASE_URL } from './../../config/config';
import DoctorCard from './../../components/Doctors/DoctorCard';
import useFetchData from './../../hooks/useFetchData';
import HashLoader from 'react-spinners/HashLoader';

const MyBookings = (id) => {
    console.log('booking id: ', id.id);
    const {
        data: bookings,
        loading,
        error,
    } = useFetchData(`${BASE_URL}/bookings/${id.id}`);

    console.log(bookings);

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

            {!loading && !error && bookings != [] && (
                <div className='grid grid-cols-1  lg:grid-cols-2 gap-5'>
                    {/*                     {bookings?.map((doctor) => (
                        <DoctorCard doctor={doctor} key={doctor.id} />
                    ))} */}
{/*                      {bookings?.map((id) => (
                        {id}
                    ))} */}
                </div>
            )}
        </div>
    );
};

export default MyBookings;
