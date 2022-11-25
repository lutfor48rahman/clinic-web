import React from 'react';
import success from '../images/success.jpeg';
import HappyClient from './HappyClient';

const AboutPeople = () => {
    return (
        <div className='aboutPeoples aboutPeople'>
            <div className='container'>
                <div className='aboutHeading'>
                    <p className='heading'>LET'S KNOW</p>
                    <p className='title'>What People Say</p>
                </div>
                <div className='row aboutColor'>
                    <div className='col-12 col-sm-4 aboutCol'>
                        <p>I have taken physiotherapy from different places, Olive's Physiotherapy is surely best among those"</p>
                        <div className='anotherSelf'>
                            <img className='anotherImage' src={success} alt="" />
                            <div>
                                <p>Abdur Rahman Hisham</p>
                                <h6><small>Chairman,PIB</small></h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 aboutCol'>
                        <p>I have taken physiotherapy from different places, Olive's Physiotherapy is surely best among those"</p>
                        <div className='anotherSelf'>
                            <img className='anotherImage' src={success} alt="" />
                            <div>
                                <p>Abdur Rahman Hisham</p>
                                <h6><small>Chairman,PIB</small></h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 aboutCol'>
                        <p>I have taken physiotherapy from different places, Olive's Physiotherapy is surely best among those"</p>
                        <div className='anotherSelf'>
                            <img className='anotherImage' src={success} alt="" />
                            <div>
                                <p>Abdur Rahman Hisham</p>
                                <h6><small>Chairman,PIB</small></h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 aboutCol'>
                        <p>I have taken physiotherapy from different places, Olive's Physiotherapy is surely best among those"</p>
                        <div className='anotherSelf'>
                            <img className='anotherImage' src={success} alt="" />
                            <div>
                                <p>Abdur Rahman Hisham</p>
                                <h6><small>Chairman,PIB</small></h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 aboutCol'>
                        <p>I have taken physiotherapy from different places, Olive's Physiotherapy is surely best among those"</p>
                        <div className='anotherSelf'>
                            <img className='anotherImage' src={success} alt="" />
                            <div>
                                <p>Abdur Rahman Hisham</p>
                                <h6><small>Chairman,PIB</small></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HappyClient></HappyClient>
        </div>
    );
};

export default AboutPeople;