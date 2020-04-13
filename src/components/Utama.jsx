import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Game from './Game';
import Website from './Website';
import Apps from './Android';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Game" component={Game}/>
        <Route path="/Apps" component={Apps}/>
        <Route path="/Website" component={Website}/>
    </Switch>
)

export default Utama;