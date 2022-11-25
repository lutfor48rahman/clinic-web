import React from 'react';
import success from '../images/success.jpeg';

const HappyClient = () => {
    return (
        <div className='happyClient'>
            <div className='container'>
            <div className='happyClientHeading'>
                        <p>Our Happy Clients</p>
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
    );
};

export default HappyClient;