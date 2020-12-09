import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import { Button, NavLink } from 'reactstrap';
import garage from './foto/garage.png'
import web1 from './foto/web1.png';
import rsmart from './foto/rsmart.png';
import ContentList from './contenList';
import Footer from './Footer';

const buttonPorto = {
    padding: '0px'
}

class Website extends Component {
    render() {
        return (
            <div className="beranda">
                <Grid className="beranda-grid">
                    <div className="beranda-grid-left">
                        <ContentList />
                    </div>
                    <div className="beranda-grid-right" >
                        <h1>Portofolio Website</h1>
                        <div className="container-porto">
                            <div className="porto">
                                <h2 >Company Profile</h2>

                                <img style={{ height: "65%", width: "80%" }}
                                    src={rsmart} />
                                <div className="lisk">
                                    <h4>This web project was built with </h4>
                                    <p></p><h5>
                                        <ul>
                                            <li>HTML </li>
                                            <li>CSS </li>
                                            <li>Javascript </li>
                                            <li>JQUERY </li>
                                            <li>Bootstrap </li>
                                            <li>PHP </li>
                                        </ul>
                                    </h5>
                                </div>
                                <p><p></p></p>
                                <Button block="block" style={buttonPorto}>
                                    <NavLink className="porto-button-git" href="https:github.com/nawan44/company-profile" target="blank" rel="nofollow">
                                        Github</NavLink></Button>
                                <br ></br>
                                <Button block="block" style={buttonPorto}>
                                    <NavLink className="porto-button-demo" href="http:rsmartcomm.com" target="blank" rel="nofollow">
                                        Website</NavLink></Button>
                            </div>
                            <div className="porto">
                                <h2  > GarageLife.com</h2>

                                <img src={garage}></img>
                                <div className="lisk">
                                    <h4>This web project was built with </h4>
                                    <p></p><h5>
                                        <ul>
                                            <li>HTML </li>
                                            <li>CSS </li>
                                            <li>Javascript </li>
                                            <li>ReactJs component : </li>
                                            <li>React Dom </li>
                                            <li>React Router Dom </li>
                                            <li>Axios </li>
                                            <li>Reactstrap </li>

                                        </ul>
                                    </h5>
                                </div>
                                <p><p> </p></p>
                                <Button block="block" style={buttonPorto}>
                                    <NavLink className="porto-button-git" href="https:github.com/nawan44/Show-Case-Binar-Academy-Garage" target="blank" rel="nofollow">
                                        Github</NavLink></Button>
                            </div>
                            <div className="porto">
                                <h2 >Website e-commerce</h2>
                                <img style={{ height: "65%", width: "80%" }}
                                    src={web1} />
                                <h2 >Website e-commerce</h2>
                                <div className="lisk">
                                    <h4>This web project was built with </h4>
                                    <p></p><h5>
                                        <ul>
                                            <li>HTML </li>
                                            <li>CSS </li>
                                            <li>Javascript </li>
                                            <li>JQUERY </li>
                                            <li>PHP </li>
                                        </ul>
                                    </h5>
                                </div>
                                <p><p></p></p>
                                <Button block="block" style={buttonPorto}>
                                    <NavLink className="porto-button-git" href="https:github.com/nawan44/WebPhp" target="blank" rel="nofollow">
                                        Github</NavLink></Button>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Footer />
            </div>
        )
    }
}
export default Website;