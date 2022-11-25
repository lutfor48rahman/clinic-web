import React from 'react';
import galleryShow from '../images/galleryShow.jpg';
import galleryShow1 from '../images/galleryShow4.jpeg';

const AllPhotos = () => {
    return (
        <div className='allPhotos'>
            <div className='container'>
                <div className='heading'>
                    <p className='title'>All Photos</p>
                    <p className='name'>MISCELLANEOUS IMAGES</p>
                </div>
                <div className='row g-1'>
                    <div className='col-12 col-sm-4 galleryShow'>
                        <img src={galleryShow} alt="" />
                    </div>
                    <div className='col-12 col-sm-4 galleryShow'>
                        <img src={galleryShow1} alt="" />
                    </div>
                    <div className='col-12 col-sm-4 galleryShow'>
                        <img src={galleryShow} alt="" />
                    </div>
                </div>
                <div className='row g-1 smallGallery'>
                    <div className='col-12 col-sm-3 gallerySmall'>
                        <img src={galleryShow1} alt="" />
                    </div>
                    <div className='col-12 col-sm-3 gallerySmall'>
                        <img src={galleryShow} alt="" />
                    </div>
                    <div className='col-12 col-sm-3 gallerySmall'>
                        <img src={galleryShow1} alt="" />
                    </div>
                    <div className='col-12 col-sm-3 gallerySmall'>
                        <img src={galleryShow} alt="" />
                    </div>
                    <div className='col-12 col-sm-3 gallerySmall'>
                        <img src={galleryShow} alt="" />
                    </div>
                    <div className='col-12 col-sm-3 gallerySmall'>
                        <img src={galleryShow1} alt="" />
                    </div>
                    <div className='col-12 col-sm-3 gallerySmall'>
                        <img src={galleryShow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPhotos;