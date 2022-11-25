import React from 'react';
import SliderAndPhotos from './SliderAndPhotos';

const Flyers = () => {
    return (
        <div className='workPlace'>
            <div className='row'>
                <div className='col-12 col-sm-4 workPlace1'>

                </div>
                <div className='col-12 col-sm-4 workPlace2'>
                    <div className='middleWork'>
                        <p className='head'>have a look at our</p>
                        <hr />
                        <p className='title'>Flyers</p>
                        <p className='text'>Follow our Facebook page or Subscribe our channel for more updates</p>
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

            <div className='workGallery'>
                <div className='row'>
                    <div className='col-12 col-sm-4'></div>
                    <div className='col-12 col-sm-4'></div>
                    <div className='col-12 col-sm-4'></div>
                </div>
            </div>
            <SliderAndPhotos></SliderAndPhotos>
        </div>
    );
};

export default Flyers;