import React from 'react';
import './CustomStyle.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='bannerHeading'>
                <p>  <span>welcome</span> </p>
                <h2>OLIVE'S PHYSIOTHERAPY </h2>
            </div>
            <div className='bannerButtons'>
                <button className='button1'>join us</button>
                <button className='button2'>Book Appoinment &rarr;</button>
            </div>
        </div>
    );
};

export default Banner;