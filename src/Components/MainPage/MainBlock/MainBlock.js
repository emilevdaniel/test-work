import React from 'react';
import './MainBlock.css'
import {NavLink} from "react-router-dom";

const MainBlock = () => {
    return (
        <div className="main-block text-center">
            <div className="container">
                <h1 className="text-success text-uppercase mx-auto mb-4">Я <span
                    className="text-dark">Эмильев Даниэль</span></h1>
                <p>Образован, люблю учиться. Хочу влиться в дружный коллектив для совместного роста!</p>
                <p>Закончил <b>КГМА ИМ. И. К. АХУНБАЕВА</b> в 2021</p>
                <p>В течении полугода обучался в <b>Attractor School</b> и продолжаю обучение по сей день!</p>
                <p>Во время обучения мы проходили различные темы! В первые 3 месяца мы проходили <b>HTML 5, CSS 3, Sass,
                    BEM, Bootstrap</b></p>
                <p>Изучили <b>Java Script: ES 6 +, JSON, Jquery, GIT</b></p>
                <p>Также я очень люблю <b>Photoshop</b> и прочие программы для работы с фото и видео.</p>
                <p>Сейчас изучаю <b>React, Node Js</b></p>
                <p>Во время обучения мы сделали очень много практических работ их вы можете просмотреть кликнув по кнопке.</p>
                <NavLink className='btn btn-secondary' as={NavLink} to="/myworks">Перейти</NavLink>

            </div>
        </div>
    );
};

export default MainBlock;