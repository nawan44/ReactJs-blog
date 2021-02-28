import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import AboutMe from '../pages/AboutMe';
import Game from '../pages/Game';
import Website from '../pages/Website';
import Apps from '../pages/Android';
import MyProject from '../pages/MyProject';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Game" component={Game}/>
        <Route path="/MyProject" component={MyProject}/>
        <Route path="/Apps" component={Apps}/>
        <Route path="/Website" component={Website}/>
    </Switch>
)

export default Routes;