import React from 'react';
import { Card } from 'bootstrap-4-react';

export const Repo = ({name, description, url}) => {
    return (
        <Card style={{ width: '18rem' }} className="repo-card">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Card.Link href={url}>View repo</Card.Link>
        </Card>
    )
}
