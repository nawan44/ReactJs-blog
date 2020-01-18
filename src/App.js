import React, {Component} from 'react';
import './css/App.css';
import Utama from './components/Utama';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Portofolio" style={{color:"#00ff00"}} scroll> 
                        <Navigation >
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/Home" >Home</Link>
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/AboutMe">About Me</Link>
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/Game">Game</Link>
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/Web">Website</Link>
                            <Link style={{color:"green", fontStyle:"Bold", fontSize:"15px"}} to="/Apps">Android</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Portofolio" style={{background: "linear-gradient(to right, #2980B9, #6DD5FA)", color:"#00ff00" , fontSize:"25px" }}>
                    
                        <Navigation >
                            <Link style={{color:"#00ff00", fontStyle:"Bold", fontSize:"15px"}} to="/Home">Home  </Link>
                            <Link style={{color:"#00ff00", fontStyle:"Bold", fontSize:"15px"}} to="/AboutMe">About Me </Link>
                            <Link style={{color:"#00ff00", fontStyle:"Bold", fontSize:"15px"}} to="/Game">Game</Link>
                            <Link style={{color:"#00ff00", fontStyle:"Bold", fontSize:"15px"}} to="/Apps">Android</Link>
                            <Link style={{color:"#00ff00", fontStyle:"Bold", fontSize:"15px"}} to="/Web">Website</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"/>
                        <Utama/>
                    </Content>
                    <Footer/>
                </Layout>
            </div>
        );
    }
}

export default App;