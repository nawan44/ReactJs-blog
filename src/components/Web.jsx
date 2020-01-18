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
                        <div className="karya">
                            <img
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            <h2 className="judul-portofolio">Web 1</h2>
                            <p><p></p></p>
                            <Button block size="lg" style={{marginTop:'20px'}}>Git</Button>
                        </div>
                        <div className="karya">
                            <img
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            <h2 className="judul-portofolio">Web 1</h2>
                            <p><p> </p></p>
                            <Button block size="lg" style={{marginTop:'20px'}}>Git</Button>
                        </div>
                    </div>
                </Grid>
            </div>
                    )
                }
            }
export default Web;