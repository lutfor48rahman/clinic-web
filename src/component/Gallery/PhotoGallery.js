import React from 'react';
import gallery from '../images/gallery.jpeg';

const PhotoGallery = () => {
    return (
        <div className='photoGallery'>
            <div className='container'>
                <div className='row '>
                    <div className='col-12 col-sm-4'>
                        <div className='image'>
                            <img src={gallery} alt="" />
                        </div>
                        <div className='content'>
                            <p className='title'>Reception</p>
                            <p className='description'>We have a splendid reception for our valuable customers. Nice sitting arrangement, pure drinking water facilities and Television are available here.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4'>
                        <div className='image'>
                            <img src={gallery} alt="" />
                        </div>
                        <div className='content'>
                            <p className='title'>Reception</p>
                            <p className='description'>We have a splendid reception for our valuable customers. Nice sitting arrangement, pure drinking water facilities and Television are available here.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4'>
                        <div className='image'>
                            <img src={gallery} alt="" />
                        </div>
                        <div className='content'>
                            <p className='title'>Reception</p>
                            <p className='description'>We have a splendid reception for our valuable customers. Nice sitting arrangement, pure drinking water facilities and Television are available here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;