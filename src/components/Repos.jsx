import {React, useEffect, useState} from 'react';
import {REPO_URL_ALL, REPO_URL} from './API';
import {Repo} from './Repo';
import {Search} from './Search';
import axios from 'axios';

export const Repos = () => {
    //state
    const [Repos, setRepos] = useState([]);    

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

    //-- Handle Click Search event
    const handleSearchClick= (value) => {
        let url = `${REPO_URL}${value}`;
        //console.log(url);
        axios.get(url).then(resp => {
            setRepos(resp.data.items);
        });
    }

    return (
        <div className="repo-container">
            <div className="search-box">
                <Search handleClick={handleSearchClick}/>
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
