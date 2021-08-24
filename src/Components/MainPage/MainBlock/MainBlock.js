import React from 'react';
import './MainBlock.css'
import {NavLink} from "react-router-dom";

const MainBlock = () => {
    return (
        <div className="main-block text-center">
            <div className="container">
                <h1 className="text-success text-uppercase mx-auto mb-4">ВСЕМ <span
                    className="text-dark">Привет</span></h1>
                <p>Работы можно посмотреть по ссылке ниже</p>

                <NavLink className='btn btn-secondary' as={NavLink} to="/myworks">Перейти</NavLink>

            </div>
        </div>
    );
};

export default MainBlock;