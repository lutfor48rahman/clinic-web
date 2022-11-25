import React from 'react';
import AboutBanner from './AboutBanner';
import AboutPeople from './AboutPeople';
import Features from './Features';
import OurStory from './OurStory';

const AboutSection = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <OurStory></OurStory>
            <Features></Features>
                <AboutPeople></AboutPeople>
        </div>
    );
};

export default AboutSection;