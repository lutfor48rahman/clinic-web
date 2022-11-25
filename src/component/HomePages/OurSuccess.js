import React from 'react';
import success from '../images/success.jpeg';
import success1 from '../images/success1.jpeg';
import success2 from '../images/another4.jpg';

const OurSuccess = () => {
    return (
        <div className='success'>
            <div className='row'>
                <div className='col-12 col-sm-4'>
                    <img className='w-100' src={success} alt="" />
                </div>
                <div className='col-12 col-sm-4'>
                    <div className='successText'>
                        <h1>Recoverd Patient Is Our Success </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore</p>
                        <div className='buttons'>
                            <button className='button1'>ABOUT OUR PATIENTS</button>
                            <br />
                            <button className='button2'>Contact Us &rarr;</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-sm-4'>
                    <img className='w-100' src={success} alt="" />
                </div>
            </div>
            <div className='anotherSuccess'>
                <div className='container'>
                    <div className='anotherHeading'>
                        <p>HERE ARE OUR HAPPY CLIENTS</p>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-4 anotherInfo'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis deleniti impedit sapiente. Quisquam quod quos veritatis aut laudantium officia alias, consectetur rerum explicabo fugit laborum, iusto tempora eum odio neque?</p>
                            <div className='anotherSelf'>
                                <img className='anotherImage' src={success} alt="" />
                                <p>Abdur Rahman Hisham</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4 bg-info anotherInfo'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis deleniti impedit sapiente. Quisquam quod quos veritatis aut laudantium officia alias, consectetur rerum explicabo fugit laborum, iusto tempora eum odio neque?</p>
                            <div className='anotherSelf'>
                                <img className='anotherImage' src={success} alt="" />
                                <p>Abdur Rahman Hisham</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4 anotherInfo'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis deleniti impedit sapiente. Quisquam quod quos veritatis aut laudantium officia alias, consectetur rerum explicabo fugit laborum, iusto tempora eum odio neque?</p>
                            <div className='anotherSelf'>
                                <img className='anotherImage' src={success} alt="" />
                                <p>Abdur Rahman Hisham</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='anotherLast'>
                <div className='row'>
                    <div className='col-12 col-sm-6 lastbg1'>
                        {/* <img className='w-100 img1' src={success1} alt="" /> */}
                    </div>
                    <div className='col-12 col-sm-6 lastbg2'>
                        {/* <img className='w-100 img2' src={success2} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSuccess;