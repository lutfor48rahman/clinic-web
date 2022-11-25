import React from 'react';
import SliderAndPhotos from './SliderAndPhotos';

const WorkPlace = () => {
    
    return (
        <div className='workPlace'>
            <div className='row'>
                <div className='col-12 col-sm-4 workPlace1'>

                </div>
                <div className='col-12 col-sm-4 workPlace2'>
                    <div className='middleWork'>
                        <p className='head'>have a look at our</p>
                        <hr />
                        <p className='title'>work <br /> place</p>
                        <p className='text'>View our treatment rooms and other rooms as well as at a glance</p>
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

export default WorkPlace;