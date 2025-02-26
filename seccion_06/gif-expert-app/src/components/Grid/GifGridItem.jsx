import React, { useEffect } from 'react'
import { getGifs } from '../../../helpers/getGifs';
import { useState } from 'react';

const GifGridItem = ({ category }) => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        getGifs(category).then(data => {
            console.log(data);
            setPhotos(data)
        })
    }, []);
    return (
        <div>
            <h2>{category}</h2>
            <ol>
                {photos.map((photo) => (
                    <li>{photo.title}</li>
                ))}
            </ol>
        </div>
    );
}

export default GifGridItem
