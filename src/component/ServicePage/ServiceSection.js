import React from 'react';
import Banner from './Banner';
import Conditions from './Conditions';
import OurPackages from './OurPackages';
import OurTreatment from './OurTreatment';
import TimeShedule from './TimeShedule';

const ServiceSection = () => {
    return (
        <div>
            <Banner></Banner>
            <OurTreatment></OurTreatment>
            <Conditions></Conditions>
            <TimeShedule></TimeShedule>
            <OurPackages></OurPackages>
        </div>
    );
};

export default ServiceSection;