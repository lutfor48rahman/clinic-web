import React from 'react';
import coFounder from '../images/teamMember.png';
import './CustomStyle.css';

const AboutFounder = () => {
    return (
        <div className='founder'>
            <div class="container">
                <div className='founderAbout'>
                    <div class="row">
                        <div class="col-12 col-sm-6">
                           <div class="d-flex justify-content-center align-items-center">
                             <img className='w-100 ' src={coFounder} alt="" />
                           </div>
                        </div>
                        <div class="col-12 col-sm-6 describe ">
                            <h6>FOUNDER AND HEAD OF OLIVE'S PHYSIOTHERAPY</h6>
                            <div className='myself'>
                                <hr />
                                <h1>
                                    Dr. Moniruzzaman Olive
                                </h1>
                            </div>
                           <div className='aboutMySelf'>
                           <span> <hr /></span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam sapiente voluptate minus nihil necessitatibus exercitationem, nesciunt reiciendis aliquid, cumque ad expedita inventore natus quibusdam saepe voluptatum pariatur impedit totam sed, iure dolore!</p>
                            <button>Read more about dr.olive</button>
                            <p className='downArrow'>&#129027;</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFounder;