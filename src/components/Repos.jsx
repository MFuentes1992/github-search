import {React, useEffect, useState} from 'react';
import {REPO_URL_ALL, REPO_URL} from './API';
import {Repo} from './Repo';
import axios from 'axios';

export const Repos = () => {
    //state
    const [Repos, setRepos] = useState([]);
    const [search, setSearch] = useState([]);

    //-- Fetching all repos
    const fetchRepos = () => {
        axios.get(REPO_URL_ALL).then(resp => {
            let repos = resp.data.slice(0, 10); //-- List first 10
            setRepos(repos);
            //console.log(repos);
        });
    }

    //-- Init the fetching
    useEffect(()=>{
        fetchRepos();
    },[]);

    //-- Handle Search Box event
    const handleChange = (event) => {
        setSearch(event.target.value);
        console.log(search);
    }   

    //-- Handle Click Search event
    const handleSearch = () => {
        let url = `${REPO_URL}${search}`;
        console.log(url);
        axios.get(`${REPO_URL}${search}`).then(resp => {
            setRepos(resp.data.items);
        });
    }

    return (
        <div className="repo-container">
            <div className="search-box">
                <input type="text" value={search} onChange={handleChange}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="repo-list">
                {
                    Repos.length > 1 ?
                    Repos.map(repo => {
                        return <Repo key={repo.id} name={repo.full_name} description={repo.description} url={repo.html_url} />
                    }) :
                    <h1>No Repos found</h1>
                }
            </div>
        </div>
    )
}
