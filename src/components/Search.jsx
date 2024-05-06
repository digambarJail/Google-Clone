// Search.jsx

import React, { useEffect, useState } from 'react';
import SearchLogo from '/search.svg'; // Corrected path to search.svg
import VoiceIcon from '/google_mic_icon.svg';
import { useNavigate } from 'react-router-dom';
import GoogleLens from '/Google_Lens_Icon.svg';
import axios from 'axios';

const Search = ({ onSearchTextChange }) => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [users, setUsers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
                setUsers(response.data); // Set the users state with the fetched data
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSearch = (e) => {
        const text = e.target.value;
        setSearchText(text);
        setShowResults(true);
        // Call the callback function to update searchText in Homepage
        onSearchTextChange(text);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Navigate to the result page if Enter key is pressed
            navigate(`/results/${searchText}`);
            setShowResults(false);
        }
    };

    const filterUsers = (users, searchText) => {
        return users.filter(user =>
            user.name.toLowerCase().startsWith(searchText.toLowerCase())
        );
    };

    const filteredUsers = filterUsers(users, searchText);

    const searchResult = (commentId) => {
        navigate(`/result/${commentId}`);
        setShowResults(false);
        // window.location.reload();
    };

    const handleClickOutside = (event) => {
        const searchContainer = document.getElementById('search-container');
        if (searchContainer && !searchContainer.contains(event.target)) {
            setShowResults(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div id="search-container" className="my-4 mx-auto max-w-md relative">
            <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 w-full focus-within:border-blue-400">
                <img src={SearchLogo} alt="Search Logo" className="mr-2 h-5" />
                <input
                    className="w-full outline-none"
                    value={searchText}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder="Type to Search ..."
                />
                <img src={VoiceIcon} alt="Search Logo" className="mr-2 h-8 w-10" />
                <img src={GoogleLens} alt="Search Logo" className="mr-2 h-8 w-10" />
            </div>
            {/* Search results */}
            {showResults && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-300 rounded-lg mt-1">
                    {filteredUsers.slice(0, 10).map(user => (
                        <div key={user.id} className="p-2 flex flex-row">
                            <img onClick={() => searchResult(user.id)} src={SearchLogo} alt="Search Logo" className="mr-2 h-4" />
                            <p onClick={() => searchResult(user.id)}>{user.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
