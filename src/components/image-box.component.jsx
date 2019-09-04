import React from 'react';
import './image-box.styles.css';

export const ImageBox = (props) => (
    <div className='column'>
        {props.images.map(image =>
            <img key={image.id} src={image.download_url} alt={image.author}/>
        )}
    </div>
);
