import React, {Component} from 'react';
import './App.css';
import Utama from './components/Utama';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Portofolio" scroll>
                        <Navigation>
                            <Link to="/Home">Home</Link>
                            <Link to="/AboutMe">About Me</Link>
                            <Link to="/Game">Game</Link>
                            <Link to="/Web">Website</Link>
                            <Link to="/Apps">Android</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Portfolio">
                        <Navigation>
                            <Link to="/Home">Home
                            </Link>
                            <Link to="/AboutMe">About Me
                            </Link>
                            <Link to="/Game">Game</Link>
                            <Link to="/Apps">Android</Link>
                            <Link to="/Web">Website</Link>
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