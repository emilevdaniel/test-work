import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home'
import MyWorks from './Pages/MyWorks'
import RingFind from "./Pages/RingFind"
import OnlinePoker from "./Pages/OnlinePoker";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Cocktail from "./Components/Cocktail/Cocktail";
import Site1 from "./Pages/Site1";


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/myworks" component={MyWorks}/>
                    <Route path="/ringfind" component={RingFind}/>
                    <Route path="/onlinepoker" component={OnlinePoker}/>
                    <Route path="/cocktail" component={Cocktail}/>
                    <Route path="/site1" component={Site1}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
