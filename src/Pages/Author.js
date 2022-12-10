import React from 'react';
import { useParams } from 'react-router-dom';

export default function Author() {
    const { author } = useParams();
    return (
        <div>
            <h1>{author}</h1>
        </div>
    );
}