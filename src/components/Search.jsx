import {React, useEffect, useState} from 'react';

export const Search = ({handleClick}) => {
    //-- Handle State management
    const [search, setSearch] = useState([]);

    //-- Event functions
    const typeChange = (event) => {
        setSearch(event.target.value);        
    }
    //-- Event functions
    const searchClick = () => {
        handleClick(search);
    }
    //-- Search View
    return (
        <div>
                <input type="text" value={search} onChange={typeChange}/>
                <button onClick={searchClick}>Search</button>
        </div>
    )
}
