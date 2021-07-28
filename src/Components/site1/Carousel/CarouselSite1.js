import React from 'react';

import Slide1 from '../../../Assets/images/slide-1.jpg'
import Slide2 from '../../../Assets/images/slide-2.jpg'
import Slide3 from '../../../Assets/images/slide-3.jpg'
import Carousel from "react-bootstrap/cjs/Carousel";

const CarouselSite1 = () => {

    return (
        <>
            <Carousel interval={500} fade nextIcon={<span aria-hidden="true"/>} nextLabel="" prevIcon={<span aria-hidden="true"/>} prevLabel="">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={Slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={Slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default CarouselSite1;