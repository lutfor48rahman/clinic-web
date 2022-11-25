import React from 'react';
import team from '../images/teamMember.png';

const OurTeam = () => {
    return (
        <div>
            <div className='container'>
                <div className='teamHeading'>
                    <hr />
                    Our Teams
                </div>
                <div className='aboutTeam'>
                    <p>We have full qualified physiotherapists in our team who have graduation in physiotherapy and relevant field. No technician here in Olive’s!</p>
                </div>
                <div className='teamGalery'>
                    <div className='row'>
                        <div className='col-12 col-sm-3'>
                            <img src={team} alt="" />
                            <div className='title'>
                                <p>Dr. Pinky Aktar Priya</p>
                                <p>PT</p>
                                <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-3'>
                            <img src={team} alt="" />
                            <div className='title'>
                                <p>Dr. Pinky Aktar Priya</p>
                                <p>PT</p>
                                <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-3'>
                            <img src={team} alt="" />
                            <div className='title'>
                                <p>Dr. Pinky Aktar Priya</p>
                                <p>PT</p>
                                <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-3'>
                            <img src={team} alt="" />
                            <div className='title'>
                                <p>Dr. Pinky Aktar Priya</p>
                                <p>PT</p>
                                <p><small>BPT (GB), PGD, MASTERS IN DISABILITY MANAGEMENT (CC)</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='teamButton'>
                    <button>See more about our team</button>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;