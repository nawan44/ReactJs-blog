import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import { Button, NavLink } from 'reactstrap';
import garage from './foto/garage.png'
import web1 from './foto/web1.png';
import rsmart from './foto/rsmart.png';


class Website extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="container-porto">
                        <div className="porto">
                            <img style={{ height: "65%", width: "80%" }}
                                src={rsmart} />
                            <h2 >Company Profile</h2>
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
                            <Button color="secondary" block size="lg" style={{ marginTop: '5px' }}>
                                <NavLink className="buttonGithub" style={{ margin: "0px" }} href="https://github.com/nawan44/company-profile" target="blank" rel="nofollow">
                                    Github</NavLink></Button>
                            <br ></br>
                            <Button color="primary" block size="lg" style={{ marginTop: '5px' }}>
                                <NavLink className="buttonPlaystore" style={{ margin: "0px" }} href="http://rsmartcomm.com" target="blank" rel="nofollow">
                                    Website</NavLink></Button>
                        </div>
                        <div className="porto">
                            <img src={garage}></img>
                            <h2  > GarageLife.com</h2>
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
                            <Button color="secondary" block size="lg" style={{ marginTop: '5px' }}>
                                <NavLink className="buttonGithub" style={{ margin: "0px" }} href="https://github.com/nawan44/Show-Case-Binar-Academy-Garage" target="blank" rel="nofollow">
                                    Github</NavLink></Button>
                        </div>
                        <div className="porto">
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
                            <Button color="secondary" block size="lg" style={{ marginTop: '5px' }}>
                                <NavLink className="buttonGithub" style={{ margin: "0px" }} href="https://github.com/nawan44/WebPhp" target="blank" rel="nofollow">
                                    Github</NavLink></Button>
                        </div>


                        {/*
                         <div className="porto">
                            <img src={garage}></img>
                            <h2  >Web 2</h2>
                            <p><p> </p></p>
                            <Button block size="lg" style={{marginTop:'20px'}}>Git</Button>
                        </div>
                         <div className="porto">
                            <img src="#"></img>
                            <h2  >RSMARTCOMM</h2>
                            <p><p> </p></p>
                            <Button style={{ padding: "0px"}} block>
                                <NavLink className="buttonGame"
                                    href="https://gitlab.com/BSD-Bootcamp/batch-3/team-a/frontend" target="blank" rel="nofollow">Git</NavLink>
                            </Button>
                            <Button style={{ padding: "0px"}} block>
                                <NavLink className="buttonGame"
                                    href="https://rsmartcomm.com/" target="blank" rel="nofollow">RSMARTCOMM</NavLink>
                            </Button>
                        </div>
                        */}
                    </div>
                </Grid>
            </div>
        )
    }
}
export default Website;