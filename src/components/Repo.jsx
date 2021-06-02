import React from 'react'

export const Repo = ({name, description, url}) => {
    return (
        <div className="repo-card">
            <div className="repo-header">
                <h2>{name}</h2>
            </div>
            <div className="repo-boy">
                <p>{description}</p>
            </div>
            <div className="repo-footer">
                <a href={url} target="_blank">Go</a>
            </div>
        </div>
    )
}
