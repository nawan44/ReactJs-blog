import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { Button, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

class Web extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                       
                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            <h2>Web 1</h2>
                            <p>
                                <p>The Website build by React JS.</p>
                                

                            </p>
                            <Button size="lg" block color="success" >Demo</Button>
                            <Button size="lg" style={{marginTop:'20px'}}><NavLink size="lg" block color="success"  href="https://play.google.com/store/apps/details?id=com.contoh.rachgunawan">Git</NavLink></Button>


                        </div>
                    </div>

                </Grid>

            </div>
                    )
                }
            }
export default Web;