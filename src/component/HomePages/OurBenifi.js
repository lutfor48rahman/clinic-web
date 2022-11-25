import React from 'react';
import team from '../images/teamMember.png';

const OurBenifi = () => {
    return (
        <div className='benefit'>
           <div className='container'>
                <div className='benefitHeading'>
                    <hr />
                    Our Benefit
                </div>
                <div className='row content'>
                    <div className='col-12 col-sm-4 '>
                        <img src={team} alt="" />
                        <div className='title'>
                            <p>Dr. Pinky Aktar Priya</p>
                            <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 '>
                        <img src={team} alt="" />
                        <div className='title'>
                            <p>Dr. Pinky Aktar Priya</p>
                            <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 '>
                        <img src={team} alt="" />
                        <div className='title'>
                            <p>Dr. Pinky Aktar Priya</p>
                            <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4'>
                        <img src={team} alt="" />
                        <div className='title'>
                            <p>Dr. Pinky Aktar Priya</p>
                            <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4'>
                        <img src={team} alt="" />
                        <div className='title'>
                            <p>Dr. Pinky Aktar Priya</p>
                            <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurBenifi;