import React from 'react';
import './Equipe.css'
import '../../../Assets/fonts/icomoon/icomoonstyle.css'

import photo1 from '../../../Assets/images/photo-1.jpg'
import photo2 from '../../../Assets/images/photo-2.jpg'
import photo3 from '../../../Assets/images/photo-3.jpg'


const Equipe = () => {
    return (
        <div>
            <div className="equipe-block mb-5 pb-5">
                <h2>La Liberté guidant le peuple</h2>
                <p className="mt-5">La Liberté guidant le peuple est une huile sur toile d'Eugène Delacroix réalisée en
                    1830, inspirée
                    de la
                    révolution des Trois Glorieuses qui s'est passée en 1830. Présentée au public au Salon de Paris de
                    1831 sous le
                    titre Scènes de barricades</p>
                <h3 className="my-5 pt-5">Notre Equipe</h3>
                <div className="card-group container my-2">
                    <div className="card-col col-12 col-lg-4">
                        <div className="card" style={{width: '22rem'}}>
                            <img src={photo1} className="card-img-top img-fluid" alt="kop"/>
                            <div className="card-body">
                                <h5 className="card-title">CRAIG GARNER <span>CEO</span></h5>
                                <p className="card-text">Amazone blessée du type de Sôsiklès. Copie romaine d'après
                                    un original grec
                                    Elle
                                    rassemble le peuple</p>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-facebook">
                                        <i className="icon-facebook"></i>
                                    </button>
                                    <button type="button" className="btn btn-google">
                                        <i className="icon-google-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-col col-12 col-lg-4">
                        <div className="card" style={{width: '22rem'}}>
                            <img src={photo2} className="card-img-top img-fluid" alt="kop"/>
                            <div className="card-body">
                                <h5 className="card-title">BRIDGE ROBERTS <span>CREATIVE GENIUS</span></h5>
                                <p className="card-text">Amazone blessée du type de Sôsiklès. Copie romaine d'après
                                    un original grec
                                    Elle
                                    rassemble le peuple</p>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-facebook"><i
                                        className="icon-facebook"></i></button>
                                    <button type="button" className="btn btn-dribbble"><i
                                        className="icon-dribbble"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-col col-12 col-lg-4">
                        <div className="card" style={{width: '22rem'}}>
                            <img src={photo3} className="card-img-top img-fluid" alt="kop"/>
                            <div className="card-body">
                                <h5 className="card-title">MALADE GARNER <span>CHEF DE PROJET</span></h5>
                                <p className="card-text">Amazone blessée du type de Sôsiklès. Copie romaine d'après
                                    un original grec
                                    Elle rass
                                </p>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-twitter"><i
                                        className="icon-twitter"></i></button>
                                    <button type="button" className="btn btn-youtube"><i
                                        className="icon-youtube"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipe;