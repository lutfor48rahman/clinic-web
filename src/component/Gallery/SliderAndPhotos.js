import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import gallery from '../images/gallery.jpeg';

const SliderAndPhotos = () => {
    const images = [
        { img: 'https://www.olivesphysio.com/wp-content/uploads/2022/03/1ec898ac-8007-4e51-8917-a9ed088b5c0c-1.jpg' },
        { img: 'https://www.olivesphysio.com/wp-content/uploads/2022/03/8dd3914d-d9a3-4b70-8e5b-6728e7160870-1.jpg' },
        { img: 'https://www.olivesphysio.com/wp-content/uploads/2022/03/1ec898ac-8007-4e51-8917-a9ed088b5c0c-1.jpg' },
        { img: 'https://www.olivesphysio.com/wp-content/uploads/2022/03/8dd3914d-d9a3-4b70-8e5b-6728e7160870-1.jpg' },
        { img: 'https://www.olivesphysio.com/wp-content/uploads/2022/03/1ec898ac-8007-4e51-8917-a9ed088b5c0c-1.jpg' },
        { img: 'https://www.olivesphysio.com/wp-content/uploads/2022/03/8dd3914d-d9a3-4b70-8e5b-6728e7160870-1.jpg' },
        { img: 'https://www.olivesphysio.com/wp-content/uploads/2022/03/1ec898ac-8007-4e51-8917-a9ed088b5c0c-1.jpg' },
        { img: 'https://www.olivesphysio.com/wp-content/uploads/2022/03/8dd3914d-d9a3-4b70-8e5b-6728e7160870-1.jpg' },
    ]

    const options = {
        navText: ["Prev", "Next"],
    }
    return (
        <div>
            <div className=' workSlider'>
                <div className="row g-3 justify-content-center">
                    <div className="col">
                        <OwlCarousel
                            items={3}
                            loop={true}
                            nav={false}
                            margin={10}
                            itemsMobile ={[479,1]}
                            dots={true}
                            autoplay={true} 
                            // options={options}
                            className="owl-carousel testimonials-carousel wow fadeInUp">
                            {
                                images.map(image => {
                                    return (
                                        <div className="image-item">
                                            <img src={image.img} className="image-img" alt="" />
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className='workSmallGallery'>
                <div className='row g-2'>
                    <div className='col-12 col-sm-3'>
                        <img src={gallery} alt="" />
                    </div>
                    <div className='col-12 col-sm-3'>
                        <img src={gallery} alt="" />
                    </div>
                    <div className='col-12 col-sm-3'>
                        <img src={gallery} alt="" />
                    </div>
                    <div className='col-12 col-sm-3'>
                        <img src={gallery} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderAndPhotos;