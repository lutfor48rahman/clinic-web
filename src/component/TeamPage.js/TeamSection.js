import React from 'react';
import Position from './Position';
import TeamBanner from './TeamBanner';
import TeamMember from './TeamMember';

const TeamSection = () => {
    return (
        <div>
            <TeamBanner></TeamBanner>
            <Position></Position>
            <TeamMember></TeamMember>
        </div>
    );
};

export default TeamSection;