import { useContext, useState } from 'react';
import { BASE_URL } from './../../config/config';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import MyBookings from './MyBookings';
import Booking from './Booking';
import useGetProfile from '../../hooks/useFetchData';
import HashLoader from 'react-spinners/HashLoader';
import { AuthContext } from '../../context/authContext';
import avatar from '../../assets/images/avatar-icon.png';

const MyAccount = () => {
    const [tab, setTab] = useState('bookings');

    const {
        data: userData,
        loading,
        error,
    } = useGetProfile(`${BASE_URL}/users/profile/me`);

    console.log('userData.bookings: ', userData.bookings)

    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    };

    return (
        <section>
            <div className='max-w-[1170px] px-5 mx-auto'>
                {loading && (
                    <div className='flex items-center justify-center w-full h-full'>
                        <HashLoader color='#0067FF' />
                    </div>
                )}
                {error && !loading && (
                    <div className='flex items-center justify-center w-full h-full'>
                        <h3 className='text-headingColor text-[20px] font-semibold leading-[30px]'>
                            {error}
                        </h3>
                    </div>
                )}

                {!loading && !error && (
                    <div className='grid md:grid-cols-3 gap-10 '>
                        <div className=' px-[30px] pb-[50px] rounded-md  '>
                            <div className='flex items-center justify-center'>
                                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor overflow-hidden'>
                                    {userData.photo ? (
                                        <img
                                            src={userData?.photo}
                                            alt='avatar-photo'
                                            className='w-full h-full rounded-full object-cover'
                                        />
                                    ) : (
                                        <img
                                            src={avatar}
                                            alt='avatar-photo'
                                            className='w-full h-full rounded-full object-cover'
                                        />
                                    )}
                                </figure>
                            </div>

                            <div className='text-center mt-4'>
                                <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>
                                    {userData?.name}
                                </h3>
                                <p className='text-textColor text-[15px] leading-6 font-medium'>
                                    {userData?.email}
                                </p>

                                <p className='text-textColor text-[15px] leading-6 font-medium'>
                                    Blood Type:
                                    <span className='ml-2 text-headingColor text-[22px] leading-8'>
                                        {userData?.bloodType}
                                    </span>
                                </p>
                            </div>

                            <div className='mt-[50px] md:mt-[100px]'>
                                <button
                                    onClick={handleLogout}
                                    className='w-full bg-primaryColor p-3 rounded-md text-white text-[16px] leading-7'
                                >
                                    Logout
                                </button>
                                <button className='w-full bg-red-600 mt-4 p-3 rounded-md text-white text-[16px] leading-7'>
                                    Delete Account
                                </button>
                            </div>
                        </div>

                        <div className='md:col-span-2 md:px-[30px]'>
                            <div>
                                <button
                                    onClick={() => setTab('bookings')}
                                    className={`${
                                        tab === 'bookings' &&
                                        'bg-purpleColor text-white font-normal'
                                    }  p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7`}
                                >
                                    My Bookings
                                </button>
                                <button
                                    onClick={() => setTab('settings')}
                                    className={`${
                                        tab === 'settings' &&
                                        'bg-purpleColor text-white font-normal'
                                    } py-2 px-5 rounded-md font-semibold text-headingColor text-[16px] leading-7`}
                                >
                                    Settings
                                </button>
                            </div>

                            <div className='mt-[50px]'>
                                {tab === 'bookings' && (
                                    <div>
                                        <h2 className='heading text-[30px]'>
                                            My bookings
                                        </h2>
{/*                                         {userData.bookings?.map((booking, i) => <div key={i}>booking id: {booking}</div>)} */}
                                        {userData.bookings?.map((booking, i) => <Booking key={i} id={booking}/>)}
{/*                                         <MyBookings userData={userData}/> */}
                                    </div>
                                )}
                                {tab === 'settings' && (
                                    <div>
                                        <h2 className='heading text-[30px]'>
                                            Profile Settings
                                        </h2>
                                        <Profile userData={userData} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyAccount;
