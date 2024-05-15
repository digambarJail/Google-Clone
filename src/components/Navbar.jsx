import React from 'react';
import GoogleLogo from '/googlelogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const Home = () => {
        navigate('/');
    }

    // Check if the current location is the home page
    const isHomePage = location.pathname === '/';

    return (
        <div className="bg-gray-100 py-4 px-6 flex justify-between items-center shadow-md">
            {/* Conditionally render the Google logo only if not on the home page */}
            {!isHomePage && (
                <img onClick={Home} src={GoogleLogo} className='h-6 cursor-pointer'></img>
            )}
            {/* Anchor tags always remain on the right side */}
            <div>
                <a href='https://gmail.com' className="text-gray-800 font-light mr-6 hover:text-blue-600">Gmail</a>
                <a href='https://www.google.com/imghp?hl=en&authuser=0&ogbl' className="text-gray-800 font-light hover:text-blue-600">Images</a>
            </div>
        </div>
    );
};

export default Navbar;
