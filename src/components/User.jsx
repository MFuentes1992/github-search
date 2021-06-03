import React from 'react'

export const User = ({imageUrl, userName, score, link}) => {
    return (
        <div className="user-card">
            <div className="image-user">
                <img src={imageUrl} alt="Avatar" />
            </div>
            <div className="body-user">
                <a href={link} target="_blank">
                    <h2>{userName}</h2>
                </a>
                {
                    score ? 
                    <p>Score: {score}</p>
                    :
                    <p></p>
                }
                
            </div>
        </div>
    )
}
