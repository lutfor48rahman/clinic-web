import React from 'react';
import SliderAndPhotos from './SliderAndPhotos';

const PaitaintGallery = () => {
    return (
        <div className='workPlace'>
             <div className='row'>
                <div className='col-12 col-sm-4 workPlace1'>

                </div>
                <div className='col-12 col-sm-4 workPlace2'>
                    <div className='middleWork'>
                        <p className='head'>have a look at our</p>
                        <hr />
                        <p className='title'>Paitient</p>
                        <p className='text'>Here are our Happy Clients with their smile after recovering</p>
                        <div className='buttons'>
                            <button className='button1'>join us</button>
                            <br />
                            <button className='button2'>book appointment &rarr;</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-sm-4 workPlace3'>

                </div>
            </div>
            <SliderAndPhotos></SliderAndPhotos>
        </div>
    );
};

export default PaitaintGallery;