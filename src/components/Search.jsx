import React,{useEffect, useState} from 'react'
import SearchLogo from '/search.svg'
import axios from 'axios';

const Search = () => {

    const [inputText, setInputText] = useState([]);

    const handleInputChange = (e) =>{
        setInputText(e.target.value);
    }
    
    useEffect(() =>{



    },[inputText])

    return (
        <div className="my-4 mx-auto max-w-md flex items-center border border-gray-300 rounded-full py-2 px-4 w-full focus-within:border-blue-400">
            <img src={SearchLogo} alt="Search Logo" className="mr-2 h-5" />
            <input
                className="w-full outline-none"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type to Search ..."
            />
        </div>
  )
}

export default Search