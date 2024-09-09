import React from 'react';
import { Link } from 'react-scroll';

function Navigation() {
    return (
        <div className="flex p-[15px] bg-black head-point justify-end w-full m-auto fixed top-0 left-0 z-50">
            <div className="flex justify-center">
                <ul className="container px-4 flex justify-center xl:justify-end lg:justify-end md:justify-end sm:justify-center text-[12px] xl:text-[14px] lg:text[14px] md:[14px] sm:text[13px] items-center gap-[25px]">
                    <li className="text-gray-400">
                        <Link
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='hover:text-gray-100'
                        >
                            Home
                        </Link>
                    </li>
                    <li className="text-gray-400">
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='hover:text-gray-100'
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="text-gray-400">
                        <Link
                            to="Exprence"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='hover:text-gray-100'
                        >
                            Experience
                        </Link>
                    </li>
                    <li className="text-gray-400">
                        <Link
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className='hover:text-gray-100 '
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
