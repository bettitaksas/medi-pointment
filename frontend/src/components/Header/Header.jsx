import { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { AuthContext } from "./../../context/authContext";

const navLinks = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/doctors',
        display: 'Find a doctor',
    },
    {
        path: '/services',
        display: 'Services',
    },
    {
        path: '/contact',
        display: 'Contact',
    },
];

const Header = () => {
    const { user, token, role } = useContext(AuthContext);

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();

        return window.removeEventListener('scroll', stickyHeaderFunc);
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header ref={headerRef} className='header flex items-center'>
            <div className='container shadow-lg rounded-md'>
                <div className='flex items-center justify-between'>
                    {/* ======logo====== */}
                    <Link to='/'>
                        <img src={logo} alt='logo' className='w-24 rounded-full' />
                    </Link>

                    {/* ========== nav menu =========== */}
                    <div
                        className='navigation'
                        ref={menuRef}
                        onClick={toggleMenu}
                    >
                        <ul className='menu flex items-center gap-[2.7rem]'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={(navClass) =>
                                            navClass.isActive
                                                ? 'text-purpleColor font-[600] text-[16px] leading-7'
                                                : 'text-textColor font-[500] text-[16px] leading-7 hover:text-purpleColor'
                                        } 
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ======nav right====== */}
                    <div className='flex items-center gap-4'>
                    {token && user ? (
                        <div>
                            <Link 
                            to={`${
                                role === "doctor"
                                  ? "/doctors/profile/me"
                                  : "/users/profile/me"
                              } `}
                            >
                                <figure className='w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer'>
                                    <img
                                        src={user?.photo}
                                        className='w-full h-full rounded-full object-cover'
                                        alt=''
                                    />
                                </figure>
                            </Link>
                        </div>
                        ) : (
                        <Link to='/login'>
                            <button
                                className='bg-primaryColor py-2 px-6 text-white
                            font-[600] h-[44px] flex items-center justify-center rounded-[50px]'
                            >
                                Login
                            </button>
                        </Link>
                        )}
                        <span className='md:hidden' onClick={toggleMenu}>
                            <BiMenu className='w-6 h-6 cursor-pointer' />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
