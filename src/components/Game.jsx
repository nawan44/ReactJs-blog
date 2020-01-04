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
                                src="http://www.nawina.com"
                                frameBorder="none"
                                width="100%"
                                height="500px">
                                Game
                            </iframe>
                            <h2>Game 2D</h2>
                            <p>
                                Game Ninja ini bergenre adventure ini dibuat dengan dengan Game
                                Engine Unity dengan menggunakan bahasa pemrograman C#.
                            </p>
                            
                            <Button color="success" size="lg" block><Link to="/Game2DAdventure">Demo</Link> </Button>
                            <Button size="lg" block style={{marginTop:'20px'}}>Download</Button>
                            
                        </div>
                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/isyLJsg-ybq8xsxkg2sIihjoztQPpXqUoESQi8saBP7SA-fPGFS2Em1LbmGknyxLnyvh=w720-h310-rw"></img>
                            <h2>Game 3D</h2>
                            <p>
                                Game First Person Shooter ini dibuat dengan dengan Game Engine Unity dengan
                                menggunakan bahasa pemrograman C#.
                            </p>
                            
                            <Button color="success" size="lg" block>Demo</Button>
                        </div>

                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            <h2>Augmented Reality Geographic Information System</h2>
                            <p>
                                <p>Menampilkan 3D Pulau Bali dengan teknologi Augmented Reality untuk pengguna
                                    smartphone android.</p>
                                Dibangun dengan Game Engine Unity dengan menggunakan bahasa pemrograman C#.
                                <br/>Aplikasi ini membutuhkan:
                                <br/>
                                <ul align="left">
                                    <li>Kamera minimal 8mp</li>
                                    <li>Pastikan aplikasi diizinkan menggunakan kamera ( pengaturan >> aplikasi >>
                                        pilih aplikasi >> izin )</li>
                                    <li>RAM minimal 3GB</li>
                                    <li>Prosesor Qualcomm® Snapdragon™ 430</li>
                                    <li>Minimal oS Android 8.0 Oreo</li>
                                </ul>
                            </p>
                            
                            <Button size="lg" block color="success" >Demo</Button>
                            <Button size="lg" style={{marginTop:'20px'}}><NavLink size="lg" block color="success"  href="https://play.google.com/store/apps/details?id=com.Nawina.ARGIS">Download</NavLink></Button>

                        </div>
                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/isyLJsg-ybq8xsxkg2sIihjoztQPpXqUoESQi8saBP7SA-fPGFS2Em1LbmGknyxLnyvh=w720-h310-rw"></img>
                            <h2>Aplikasi Virual Reality</h2>
                            <p>
                                Aplikasi Virtual Reality ini menampilkan
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