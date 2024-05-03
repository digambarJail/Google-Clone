import React from 'react';
import Search from './Search';
import Google from '/Google.svg'; // Update the path to your Google logo SVG

const Homepage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src={Google} alt="Google Logo" className="mb-8" />
            <div className="w-full max-w-md">
                <Search />
            </div>
            <div className="mt-8 text-center text-gray-700">
                Search Results
            </div>
        </div>
    );
};

export default Homepage;
