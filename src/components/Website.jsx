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
                        <img
                            style={{height:"65%", width:"80%"}}
                                src={web1}/>
                            <h2 >Wesite</h2>
                            <p><p></p></p>
                            <Button
                                style={{
                                padding: "0px"
                            }}
                                block>
                                <NavLink
                                    className="buttonGame"
                                    href="https://github.com/nawan44/WebPhp">Git</NavLink>
                            </Button>

                        </div>
                        <div className="karya">
                            <img
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            <h2  >Web 2</h2>
                            <p><p> </p></p>
                            <Button block size="lg" style={{marginTop:'20px'}}>Git</Button>
                        </div>
                    </div>
                </Grid>
            </div>
                    )
                }
            }
export default Website;