import React from 'react';
import './ServiceSection.css';

const OurTreatment = () => {
    return (
        <div className='serviceTeam'>
            <div className='container'>
                <div className='heading'>
                    <p className='title'>Our Treatments</p>
                    <hr />
                    <p className='text'>We emphasize on Evidence Based Manual Therapy and Modern Electrotherapy. We have certified Mulligan Concept™ practitioners here. We also provide Dry needling Therpy for quick and maximum outcome of our patients.</p>
                </div>
                <div className='serviceTreatment'>
                    <div className='rows'>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 column">MANUAL THERAPY</div>
                            <div class="col-12 col-sm-6 col-md-4 column">MOVEMENT WITH MOBILIZATION</div>
                            <div class="col-12 col-sm-6 col-md-4 column">CHIROPRACTIC/ MANIPULATION   </div>
                        </div>
                    </div>
                    <div className='rows'>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-3 column">MUSCLE REHAB</div>
                            <div class="col-12 col-sm-6 col-md-4 column">NEURAL MOBILIZATION</div>
                            <div class="col-12 col-sm-6 col-md-5 column">BALANCE AND COORDINATION PRACTICE</div>
                        </div>
                    </div>
                    <div className='rows'>
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-4 column">STRETCHING AND STRENGTHENING</div>
                            <div class="col-12 col-sm-6 col-md-4 column">HOT/ ELECTROTHERAPY</div>
                            <div class="col-12 col-sm-6 col-md-4 column">DRY NEEDLING</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTreatment;