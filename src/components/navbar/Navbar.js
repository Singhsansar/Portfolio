import React, { useState, useEffect } from 'react';
import { logo } from '../../assets/index';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import { TfiAlignJustify } from "react-icons/tfi";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
                closeMenu();
            }
        };

        window.addEventListener('click', handleOutsideClick, true);

        return () => {
            window.removeEventListener('click', handleOutsideClick, true);
        };
    }, [isMenuOpen]);

    return (
        <div className='w-full sticky z-50 top-0 mx-auto font-titleFont border-b-[1px] border-b-gray-600'>
            <div className='h-24 bg-bodyColor'>
                <div className='flex justify-between items-center p-4'>
                    <div>
                        <img src={logo} alt='logo' className='w-24 px-0 content-start hover:cursor-pointer' />
                    </div>
                    <div className='hidden md:flex items-center justify-center gap-13'>
                        <ul className='flex gap-7'>
                            {navLinksdata.map(({ _id, title, link }) => (
                                <li
                                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor transition duration-300 ease-in-out"
                                    key={_id}
                                >
                                    <Link
                                        activeClass="active"
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='md:hidden'>
                        <button
                            className='text-gray-400 hover:text-designColor'
                            onClick={handleMenuToggle}
                        >
                            <span className="text-lg w-15 h-15 rounded-full inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                                <TfiAlignJustify />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Floating Menu */}
            {isMenuOpen && (
                <div className='md:hidden fixed top-24 left-0 w-full bg-bodyColor p-4 mobile-menu-container'>
                    <ul className='flex flex-col items-start'>
                        {navLinksdata.map(({ _id, title, link }) => (
                            <li
                                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor transition duration-300 ease-in-out"
                                key={_id}
                                onClick={closeMenu}
                            >
                                <Link
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
