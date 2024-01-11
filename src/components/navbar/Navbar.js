import React from 'react';
import { logo } from '../../assets/index';
import { Link } from 'react-scroll'
import { navLinksdata } from '../../constants';

const Navbar = () => {
    return (
        <div className='w-full h-24 sticky z-50 bg-bodyColor top-0 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
            <div>
                <img src={logo} alt='logo' className='w-24 px-0 content-start hover:cursor-pointer' />
            </div>
            <div>
                <ul className='flex items-center gap-10'>
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
        </div>
    );
};

export default Navbar;
