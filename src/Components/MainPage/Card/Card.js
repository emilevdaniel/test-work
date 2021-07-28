import React from 'react';
import './Card.css'
import {NavLink} from "react-router-dom";


const Card = props => {

    return (
        <div className="col-12 col-sm-6 col-lg-3 mb-4">
            <div className="card text-center h-100" style={{width: '14rem'}}>
                <img src={props.photo} className="card-img-top " alt="kop"/>
                <div className="card-body pb-0">
                    <NavLink className="btn btn-primary" as={NavLink} to={props.link}>Перейти</NavLink>
                    <h5 className="card-title">{props.nameOfProject}</h5>
                </div>
            </div>
        </div>
    );
};

export default Card;