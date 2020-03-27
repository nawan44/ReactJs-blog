import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Game from './Game';
import Game2DAdventure from './Game/Game2D/Game2DAdventure'
import Website from './Website';
import Apps from './Android';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Game" component={Game}/>
        <Route path="Game2DAdventure" component={Game2DAdventure}/>
        <Route path="/Apps" component={Apps}/>
        <Route path="/Website" component={Website}/>
    </Switch>
)

export default Utama;