import React from 'react';

import './Features.css'
import pic1 from '../../../Assets/images/pic-desktop.png'
import pic2 from '../../../Assets/images/pic-round.png'


const Features = () => {
    return (
        <div>
            <div className="bg-purple mb-5 pb-5">
                <div className="container">
                    <h2 className="text-center features-title">OUR FEATURES</h2>
                    <div className="row features-block-pic-boxes">
                        <div className="col-12 col-lg-6">
                            <h4 className="">Visual Composer
                                Page Builde</h4>
                            <p className="mt-4">We include Visual Composer plugin that allow user to create complex
                                layout with
                                visual page builder, you just need to drag and drop the elements or widgets to the page
                                builder
                                interface
                                easily.</p>
                            <a href={'/#'} className="btn btn-primary">Lire plus</a>
                        </div>
                        <div className="col-12 col-lg-6"><img className="img-fluid" src={pic2} alt=""/>
                        </div>
                    </div>
                    <div className="row features-block-pic-boxes">
                        <div className="col-12 col-lg-6"><img className="img-fluid" src={pic1} alt=""/>
                        </div>
                        <div className="col-12 col-lg-6 pl-5">
                            <h4>Customize &
                                Live Preview</h4>
                            <p>We include Visual Composer plugin that allow user to create complex layout with
                                visual page builder, you just need to drag and drop the elements or widgets to the page
                                builder
                                interface
                                easily.</p>
                            <a href={'/#'} className="btn btn-primary">Lire plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;