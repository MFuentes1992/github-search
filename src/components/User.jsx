import React from 'react';
import { Card } from 'bootstrap-4-react';

export const User = ({imageUrl, userName, score, link}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Image src={imageUrl} alt="Avatar" />
            <Card.Body className="body-user">
                <a href={link} target="_blank">
                    <h2>{userName}</h2>
                </a>
                {
                    score ? 
                    <p>Score: {score}</p>
                    :
                    <p></p>
                }
                
            </Card.Body>
        </Card >
    )
}
