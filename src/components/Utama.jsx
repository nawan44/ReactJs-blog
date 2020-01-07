import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Game from './Game';
import Game2DAdventure from './Game/Game2D/Game2DAdventure'
import Game3D from './Game3D';
import GameAR from './GameAR';
import Web from './Web';
import Apps from './Android';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Game" component={Game}/>
        <Route path="/Game3D" component={Game3D}/>
        <Route path="/GameAR" component={GameAR}/>
        <Route path="Game2DAdventure" component={Game2DAdventure}/>
        <Route path="/Apps" component={Apps}/>
        <Route path="/Web" component={Web}/>

    </Switch>
)

export default Utama;