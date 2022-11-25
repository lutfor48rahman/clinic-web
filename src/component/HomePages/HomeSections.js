import React from 'react';
import AboutFounder from './AboutFounder';
import Banner from './Banner';
import Blog from './Blog';
import OurBenifi from './OurBenifi';
import OureTreatement from './OureTreatement';
import OurFeature from './OurFeature';
import OurSuccess from './OurSuccess';
import OurTeam from './OurTeam';
import PeopleSays from './PeopleSays';

const HomeSections = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutFounder></AboutFounder>
            <OurTeam></OurTeam>
            <OureTreatement></OureTreatement>
            <OurBenifi></OurBenifi>
            <OurFeature></OurFeature>
            <OurSuccess></OurSuccess>
            <PeopleSays></PeopleSays>
            <Blog></Blog>
        </div>
    );
};

export default HomeSections;