import React, {Component} from 'react';
import {Grid} from 'react-mdl';
import {Link} from 'react-router-dom';
import { Button, NavLink } from 'reactstrap';
class Game extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                        <div className="karya">

                            <iframe
                                src="http://www.nawina2d.com"
                                frameBorder="none"
                                width="100%"
                                height="700px">
                                Game
                            </iframe>
                            <h2 className="judul-portofolio">Game 2D</h2>
                            <p>
                                
                            </p>
                            
                            <Button color="success" size="lg" block><Link to="www.nawina2d.com">Demo</Link> </Button>
                            <Button size="lg" block style={{marginTop:'20px'}}>Git </Button>
                            
                        </div>
                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/isyLJsg-ybq8xsxkg2sIihjoztQPpXqUoESQi8saBP7SA-fPGFS2Em1LbmGknyxLnyvh=w720-h310-rw"></img>
                            <h2 className="judul-portofolio">Game 3D</h2>
                            <p>
                               
                               
                            </p>
                            
                            <Button color="success" size="lg" block>Demo</Button>
                        </div>

                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            <h2 className="judul-portofolio">Augmented Reality Geographic Information System</h2>
                            <p>
                               
                               
                            </p>
                            
                            <Button size="lg" block color="success" >Demo</Button>
                            <Button size="lg" style={{marginTop:'20px'}}><NavLink size="lg" block color="success"  href="https://www.nawina2d.com">Download</NavLink></Button>

                        </div>
                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/isyLJsg-ybq8xsxkg2sIihjoztQPpXqUoESQi8saBP7SA-fPGFS2Em1LbmGknyxLnyvh=w720-h310-rw"></img>
                            <h2 className="judul-portofolio">Aplikasi Virtual Reality</h2>
                            <p>
                                
                                
                            </p>
                            <Button size="lg" block color="success" >Demo</Button>
                            <Button size="lg" block style={{marginTop:'20px'}}>Download</Button>
                        </div>
                    </div>
                </Grid>
            </div>
         )
        }
    }
export default Game;