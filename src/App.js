import React, { Component } from 'react';
import './App.css';
import Utama from './components/Utama';

import Footer from './components/Footer';
import { Link } from 'react-router-dom';


import {Layout, Header, Navigation, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
        <Header className="header-color"
        title="Portofolio" scroll>
        <Navigation>
        <Link to = "/Home">Home </Link> 
      <Link to = "/AboutMe">About Me </Link> 
      <Link to = "/Creation">Creation</Link> 
      <Link to = "/Contact">Contact</Link>
        </Navigation>
        </Header>
<Content>
  <div className="page-content" />
  <Utama />
</Content>
  <Footer />
      </Layout>
      </div>
    );
  }
}

export default App;