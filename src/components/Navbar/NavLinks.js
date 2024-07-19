import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-[#004AAD] hover:text-[#004AAD]" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-[#004AAD] hover:text-[#004AAD]" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-[#004AAD] hover:text-[#004AAD]" smooth to="/#portfolio">
                Results
            </HashLink>
            <HashLink className="px-4 font-extrabold text-[#004AAD] hover:text-[#004AAD]"smooth to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-[#004AAD] hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/cleaning#cleaning">
                Join the Club
            </HashLink>
        </>
    )
}

export default NavLinks;
