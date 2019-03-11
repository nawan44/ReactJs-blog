import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './Home';
import AboutMe from './AboutMe';
import Creation from './Creation';
import Contact from './Contact';

const Utama = () =>  (
  <Switch>
      <Route exact path = "/" component={Home} />
      <Route path = "/Home" component={Home} />
      <Route path = "/AboutMe" component={AboutMe} />
      <Route path = "/Creation" component={Creation} />
      <Route path = "/Contact" component={Contact} />
      
  </Switch>
)    
  


export default Utama;