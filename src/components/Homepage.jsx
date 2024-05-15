// Homepage.jsx

import React, { useState } from 'react';
import Search from './Search';
import Google from '/googlelogo.png'; 
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (text) => {
        setSearchText(text);
    };

    const handleGoogleSearch = () => {
        navigate(`/results/${searchText}`)
    };

    return (
        <div className="flex flex-col items-center mt-[10%] h-screen bg-gray-100">
            {/* Render the Google logo */}
            <img src={Google} alt="Google Logo" className="mb-8 h-[15%]" />
            <div className="w-full max-w-md">
                {/* Render the Search component and pass callback function */}
                <Search onSearchTextChange={handleSearchTextChange} />
            </div>
            <div className="mt-4 space-x-4">
                {/* Render the Google Search button */}
                <button onClick={handleGoogleSearch} className='bg-slate-100 text-gray py-2 px-4 rounded-md font-light focus:border-gray-200 focus:outline-none focus:ring focus:ring-gray-400'>Google Search</button>
                {/* Render the "I'm Feeling Lucky" button */}
                <button className='bg-slate-100 text-gray py-2 px-4 rounded-md font-light focus:border-gray-200 focus:outline-none focus:ring focus:ring-gray-400'>I'm Feeling Lucky</button>
            </div>
        </div>
    );
};

export default Homepage;
