import React from 'react';
import './AboutSection.css';
import storyImage from '../images/storyImage.jpg';

const OurStory = () => {
    return (
        <div className='storys'>
            <div className='container'>
                <p className='heading'>WANT TO KNOW???</p>
                <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <hr className='top' />
                        <p className='title'>Our Story</p>
                        <hr className='bottom' />
                        <p className='text'>
                            Olive’s Physiotherapy an organization which is currently No.1 physiotherapy clinic in Dhaka according to Global Clinic Rating. This center is headed by CRP graduate physiotherapist Dr. Moniruzzaman Olive, PT who has over 13 years experience on relevant field.
                        </p>
                    </div>
                    <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center'>
                        <img className='w-100 h-70' src={storyImage} alt="" />
                    </div>
                </div>
                <p className='description'>
                    Beside of his academic knowledge and clinical experiences, h he is also having post graduation on Gerontology (Elderly) and Public Health. He has also completed Post Graduation Training on Mulligan Concept™ and PNF respectively. Other physiotherapist in Olive’s are also qualifieds (graduates) and there are no technician here. There are total 5 graduates here who are professional in relevant field are woking in Olive’s. This is manual therapy based, well-equipped private physiotherapy center where we emphasis on patients’ satisfaction, quality of treatment and maximum outcome on possible less time.All the service areas are air conditioned. This clinic is so neat and clean where you can enjoy your treatment and rehabilitation.
                </p>
            </div>
        </div>
    );
};

export default OurStory;