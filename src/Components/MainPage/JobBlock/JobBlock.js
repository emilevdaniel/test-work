import React, {useState} from 'react';

import Card from "../Card/Card";
import './JobBlock.css'
import imageRingFinder from '../../../Assets/images/2021-07-28_13-49.png'
import imageOnlinePoker from '../../../Assets/images/2021-07-28_14-41.png'
import imageCocktail from '../../../Assets/images/2021-07-28_15-45.png'
import imageSite1 from '../../../Assets/images/2021-07-28_18-59.png'

import {nanoid} from "nanoid";


const JobBlock = () => {
    const [jobBoardState, setJobBoardState] = useState([
        {nameOfProject: "Поиск кольца", photoLink: imageRingFinder, link: '/ringfind'},
        {nameOfProject: "Онлайн покер (не доделал, но основное работает)", photoLink: imageOnlinePoker, link: '/onlinepoker'},
        {nameOfProject: "Поиск коктелей", photoLink: imageCocktail, link: '/cocktail'},
        {nameOfProject: "Сайт на Bootstrap", photoLink: imageSite1, link: '/site1'},
    ]);


    let cardComponets = jobBoardState.map(e =>
        (
            <Card key={nanoid()}
                  nameOfProject={e.nameOfProject}
                  photo={e.photoLink}
                  link={e.link}
            />
        )
    );

    return (
        <div className="job-board text-center">
            <div className="container">
                <h2 className="text-uppercase mb-5">Мои ранее сделанные <span className="text-success">Работы</span>
                </h2>
                <div className="row align-items-center  ">
                    {cardComponets}
                </div>
                <p>Есть еще много различных сайтов написанных только на CSS и HTML с использованием Sass и BEM.</p>
                <p>И различные работы с <b>JQerry, NodeJS</b> с использованием API и ассинхронных запросов.</p>
            </div>
        </div>
    );
};

export default JobBlock;