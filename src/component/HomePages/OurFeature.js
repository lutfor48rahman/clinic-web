import React from 'react';
import treatment from '../images/feature.jpg';
import treatment2 from '../images/treatment.jpg';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const OurFeature = () => {
    return (
        <div className=''>
            <div className='container'>
                <div className='teamHeading'>
                    <hr />
                    Our Features
                </div>
                <div className='aboutTeam'>
                    <p>We have full qualified physiotherapists in our team who have graduation in physiotherapy and relevant field. No technician here in Olive’s!</p>
                </div>
                <div className='featureImage'>
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={treatment} alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={treatment2} alt="Second slide" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div id="carouselExampleControls" class="carousel slide features" data-ride="carousel">
                                <div class="carousel-inner featureShadow">
                                    <div class="carousel-item active ">
                                        <div className='featureText'>
                                            <h1>Lorem, ipsum dolor sit amet</h1>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum veniam eos dolor sapiente repellat aut iste</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='featureText'>
                                            <h1>Lorem, ipsum dolor sit amet</h1>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum veniam eos dolor sapiente repellat aut iste</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className='featureText'>
                                            <h1>Lorem, ipsum dolor sit amet</h1>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nostrum veniam eos dolor sapiente repellat aut iste</p>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="" aria-hidden="true"><span className='featureIcon'><KeyboardArrowLeftIcon /></span></span>
                                    <span class="sr-only ">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="" aria-hidden="true"><ChevronRightIcon className='featureIcon' /></span>
                                    <span class="sr-only featureIcon">Next</span>
                                </a>
                            </div>
                            <div className='featureButton'>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeature;