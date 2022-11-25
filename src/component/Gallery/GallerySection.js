import React from 'react';
import AllPhotos from './AllPhotos';
import Banner from './Banner';
import PhotoGallery from './PhotoGallery';

const GallerySection = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <AllPhotos></AllPhotos>
        </div>
    );
};

export default GallerySection;