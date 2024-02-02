import React, { useState } from 'react';
import './ImageGallery.css';
import image from '../assets/images.jpg';
import image2 from '../assets/phone.jpg';
import image3 from '../assets/logo.jpg';

function ImageGallery() {
    const [filter, setFilter] = useState('all');

    const handleFilterClick = (filterType) => {
        setFilter(filterType);
    };

    const storeItems = [
        { type: 'web', image: image },
        { type: 'mobile', image: image2 },
        { type: 'logo', image: image3 },
        { type: 'web', image: image },
        { type: 'mobile', image: image2 },
        { type: 'logo', image: image3 },
        { type: 'web', image: image },
        { type: 'mobile', image: image2 },
        { type: 'logo', image: image3 },
        // Add more items as needed
    ];

    const filteredItems = storeItems.filter((item) => filter === 'all' || item.type === filter);

    return (
        <div className='container'>
            <h2>Filterable Gallery</h2>
            <div className='menu'>
                <button className='btn' onClick={() => handleFilterClick('all')}>All</button>
                <button className='btn' onClick={() => handleFilterClick('logo')}>Logo Designs</button>
                <button className='btn' onClick={() => handleFilterClick('web')}>Mobile Apps</button>
                <button className='btn' onClick={() => handleFilterClick('mobile')}>Web Designs</button>
            </div>

            <div className='box' id='store-items'>
                {filteredItems.map((item, index) => (
                    <div key={index} className={`store-item visible`}>
                        <img src={item.image} className='store-image' alt='' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;
