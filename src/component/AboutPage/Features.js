import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Features = () => {
    return (
        <div className='feature'>
           <div className='container'>
            <div className='details'>
                <p className='heading'>WHY WE'RE THE BEST</p>
                <p className='title'>Details About Us​</p>
            </div>
            <div className='glance'>
                <p className='title'>Our Features at a Glance</p>
                <div className='points'>
                <p className='point'><CheckCircleOutlineIcon className='icon'/> No. 1 GCR accredit Physiotherapy Center in Bangladesh​</p>
                <hr />
                <p className='point'><CheckCircleOutlineIcon className='icon'/> All qualified physiotherapists’ and experts are available</p>
                <hr />
                <p className='point'><CheckCircleOutlineIcon className='icon'/> Manual Therapy Based Physiotherapy Clinic​</p>
                <hr />
                <p className='point'><CheckCircleOutlineIcon className='icon'/> Neat, Clean and Air-conditioned Treatment Rooms</p>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default Features;