import React from 'react';
import './css/App.css';
import Routes from '../../Route';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

const navIcon = {
    fontSIze: '60px',
    color: ' #222',
    marginRigth: '20px'
}
const navContent = {
    background: "linear-gradient(to right, #2980B9, #6DD5FA)",
    color: "#fff",
    fontSize: "30px"
}
const Layouting = () => {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Portofolio" style={navContent} scroll>
                    <Navigation >
                        <Link to="/Home" >Home</Link>
                        <Link to="/AboutMe">About Me</Link>
                        <Link to="/Game">Game</Link>
                        <Link to="/Website">Website</Link>
                        <Link to="/Apps">Android</Link>
                    </Navigation>
                </Header>
                <Drawer title="Portofolio" style={navContent}>
                    <Navigation >
                        <Link style={navIcon} to="/Home">Home  </Link>
                        <Link style={navIcon} to="/AboutMe">About Me</Link>
                        <hr style={{ borderTop: '3px solid #833fb2' }} />
                        <Link to="/Game">
                            <i class="fa fa-gamepad" style={navIcon}> Game </i>
                        </Link>
                        <Link to="/Apps">
                            <i class="fa fa-android" style={navIcon}> Android </i>
                        </Link>
                        <Link to="/Website">
                            <i class="fa fa-globe" style={navIcon} > Website </i>
                        </Link>
                    </Navigation>
                </Drawer>
                <Content>
                    {/* <div className="page-content"/> */}
                    <Routes />
                </Content>
                {/* <Footer/> */}
            </Layout>
        </div>
    );
}

export default Layouting;