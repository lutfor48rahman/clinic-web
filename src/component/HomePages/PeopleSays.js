import React from 'react';
import success from '../images/success.jpeg';

const PeopleSays = () => {
    return (
        <div className='peopleSay'>
            <div className='container peopleMain'>
                <div className='row'>
                    <div className='col-12 col-sm-3'>
                        <p className='title'>WHAT PEOPLE SAY ABOUT US</p>
                        <p className='text'>Let’s know what people think about us</p>

                    </div>
                    <div className='col-12 col-sm-3 people'>
                        <p>I have taken physiotherapy from different places, Olive's Physiotherapy is surely best among those"</p>
                        <div className='anotherSelf'>
                            <img className='anotherImage' src={success} alt="" />
                            <p>Abdur Rahman Hisham</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-3 people'>
                        <p>"Physiotherapy is essential treatment now a days and Olive's Physiotherapy is leading this sector with extra ordinary passion"</p>
                        <div className='anotherSelf'>
                            <img className='anotherImage' src={success} alt="" />
                            <p>Abdur Rahman Hisham</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-3 people'>
                        <p>"Services are excellent here in Olive's Physiotherapy"</p>
                        <div className='anotherSelf'>
                            <img className='anotherImage' src={success} alt="" />
                            <p>Abdur Rahman Hisham</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSays;