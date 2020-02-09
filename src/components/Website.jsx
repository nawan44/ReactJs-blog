import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { Button, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

import web1 from './foto/web1.png';

class Website extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                        <div className="karya">
                        <img style={{height:"65%", width:"80%"}}
                                src={web1}/>
                            <h2 >Website e-commerce</h2>
                            <div className="lisk">
                               <h4>This web project was built with </h4> 
                                   
                                    <p></p><h5>PHP</h5>
                                    
                            </div>
                            <p><p></p></p>
                            <Button style={{ padding: "0px"}} block>
                                <NavLink className="buttonGame"
                                    href="https://github.com/nawan44/WebPhp" target="blank" rel="nofollow">Git</NavLink>
                            </Button>

                        </div>
                        {/*
                        <div className="karya">
                            <img src="#"></img>
                            <h2  >Web 2</h2>
                            <p><p> </p></p>
                            <Button block size="lg" style={{marginTop:'20px'}}>Git</Button>
                        </div>
                        */}
                    </div>
                </Grid>
            </div>
                    )
                }
            }
export default Website;