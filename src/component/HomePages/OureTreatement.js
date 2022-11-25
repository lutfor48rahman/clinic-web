import React from 'react';
import treatment from '../images/teamMember.png';
import treatment2 from '../images/treatment.jpg';

const OureTreatement = () => {
    return (
        <div className='treatment'>
            <div className='container'>
                <div className='teamHeading'>
                    <hr />
                    Our Treatement
                </div>
                <div className='aboutTeam'>
                    <p>We have full qualified physiotherapists in our team who have graduation in physiotherapy and relevant field. No technician here in Olive’s!</p>
                </div>
                <div className='ourTreatment'>
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo illum praesentium nam. Iure velit quo minima deleniti asperiores quae adipisci.</p>

                            <div className='treatmentbutton'>
                                <button>See more</button>
                            </div>

                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='treatmentImages'>
                                <div className='treatmentImage'>
                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src={treatment} alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={treatment2} alt="Second slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={treatment} alt="Third slide" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='treatmentImage'>
                                    <img class="d-block w-100" src={treatment} alt="Third slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OureTreatement;