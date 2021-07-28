import React from 'react';
import './Site1Header.css'
import logo from '../../../Assets/images/logo.png'


const Site1Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand mr-5 mb-3" href={'/#'}>
                            <img src={logo} alt="kop"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active mr-4">
                                    <a className="nav-link" href={'/#'}>Home</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href={'/#'}>Portfolios</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href={'/#'}>Blog</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href={'/#'}>Contact</a>
                                </li>
                                <li className="nav-item mr-4">
                                    <a className="nav-link" href={'/#'}>Shop</a>
                                </li>
                            </ul>
                            <button type="button" className="ml-auto btn-user" data-toggle="modal"
                                    data-target="#myModal"></button>
                            <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="myModalLabel"
                                 aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form>
                                            <h4 className="text-center">Log In</h4>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Login</label>
                                                <input type="text" className="form-control"
                                                       id="exampleFormControlInput1"
                                                       placeholder="Login"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput2">Password</label>
                                                <input type="password" className="form-control"
                                                       id="exampleFormControlInput2"
                                                       placeholder="password"/>
                                            </div>
                                            <a className="text-center modal-a" href={'/#'}>Log In</a>
                                            <button type="button" className="btn btn-primary text-center">Log in
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Site1Header;