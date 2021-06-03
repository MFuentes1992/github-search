import {React, useEffect, useState} from 'react';
import {USER_URL_ALL, USER_URL} from './API';
import {Search} from './Search';
import {User} from './User';
import axios from 'axios';

export const Users = () => {

    //--State management
    const [users, setUsers] = useState([]);

    //-- Fetch users 
    const fetchUsers = () => {
        axios.get(USER_URL_ALL).then(resp => {
            let data = resp.data.slice(0,10);
            setUsers(data);
        });
    }

    //-- Set initial values
    useEffect(()=>{
        fetchUsers();
    }, []);

        //-- Handle Click Search event
        const handleSearchClick= (value) => {
            let url = `${USER_URL}${value}`;
            //console.log(url);
            axios.get(url).then(resp => {
                setUsers(resp.data.items);
            });
        }

    return (
        <div className="users-container">
            <div className="search-box">
                <Search handleClick={handleSearchClick}/>
            </div>
            <div className="user-list">
                {
                    users.length > 0 ?
                    users.map(user => {
                        return <User key={user.id} imageUrl={user.avatar_url} userName={user.login} score={user.score} link={user.html_url} />
                    }) :
                    <h1>No Users found</h1>
                }
            </div>
        </div>
    )
}
