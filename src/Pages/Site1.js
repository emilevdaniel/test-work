import React from 'react';
import Site1Header from "../Components/site1/Header/Site1Header";
import CarouselSite1 from "../Components/site1/Carousel/CarouselSite1";
import Equipe from "../Components/site1/EquipeBlock/Equipe";
import Header from "../Components/MainPage/Header/Header";
import Footer from "../Components/MainPage/Footer/Footer";
import Features from "../Components/site1/Features/Features";

const Site1 = () => {
    return (
        <div>
            <Header/>
            <Site1Header/>
            <CarouselSite1/>
            <Equipe/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Site1;