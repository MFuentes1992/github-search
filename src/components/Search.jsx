import {React, useEffect, useState} from 'react';
import { Form, Button} from 'bootstrap-4-react';

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
        <div className="search-container">
                <Form.Input type="text" value={search} onChange={typeChange}/>
                <Button info outline onClick={searchClick}>Search</Button>
        </div>
    )
}
