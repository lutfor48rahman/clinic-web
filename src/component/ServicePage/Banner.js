import React from 'react';

const Banner = () => {
    return (
        <div className='banner'>
        <div className='bannerHeading'>
            <p>  <span>Have a look at our</span> </p>
            <h2>Services </h2>
        </div>
        <div className='bannerButtons'>
            <button className='button1'>join us</button>
            <button className='button2'>Book Appoinment &rarr;</button>
        </div>
    </div>
    );
};

export default Banner;