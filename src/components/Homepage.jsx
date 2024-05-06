import React from 'react';
import Search from './Search';
import Google from '/Google_2015_logo.svg'; // Update the path to your Google logo SVG

const Homepage = () => {
    return (
        <div className="flex flex-col items-center mt-[10%] h-screen bg-gray-100">
            <img src={Google} alt="Google Logo" className="mb-8 h-[15%]" />
            <div className="w-full max-w-md">
                <Search />
            </div>
            <div className="mt-4 space-x-4">
                <button className='bg-slate-100 text-gray py-2 px-4 rounded-md font-light focus:border-gray-200 focus:outline-none focus:ring focus:ring-gray-400'>Google Search</button>
                <button className='bg-slate-100 text-gray py-2 px-4 rounded-md font-light focus:border-gray-200 focus:outline-none focus:ring focus:ring-gray-400'>I'm Feeling Lucky</button>
            </div>
        </div>
    );
};

export default Homepage;
