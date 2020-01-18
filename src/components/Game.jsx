import React, {Component} from 'react';
import {Grid} from 'react-mdl';
import {Link} from 'react-router-dom';
import {Button, NavLink} from 'reactstrap';
class Game extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                        <div className="karya">
                            <iframe src="http://www.nawina2d.com"  frameBorder="none" width="100%" height="700px">
                                Game
                            </iframe>
                            <h2 className="judul-portofolio">Game 2D</h2>
                            <p></p>

                            <Button style={{ padding: "0px" }} block>
                                <NavLink className="buttonGame" href="https://github.com/nawan44/Game-2D-Adventure">Git</NavLink>
                            </Button>
                        </div>
                        <div className="karya">
                            <iframe  src="http://www.nawina3d.com"  frameBorder="none" width="100%" height="700px">  Game
                            </iframe>
                            <h2 className="judul-portofolio">Game 3D</h2>
                            <p></p>
                            <Button size="lg" block style={{ marginTop: '20px' }}>Git  </Button>
                        </div>
                        <div className="karya">
                            <img
                            style={{height:"65%", width:"80%"}}
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            <h2 className="judul-portofolio">Augmented Reality</h2>
                            <p></p>

                            <Button
                                style={{
                                padding: "0px"
                            }}
                                block>
                                <NavLink
                                    className="buttonGame"
                                    href="https://github.com/nawan44/Augmented-Reality-Geographic-Information-System">Git</NavLink>
                            </Button>

                        </div>
                        <div className="karya">

                            <iframe
                                src="http://www.nawinavr.com"
                                frameBorder="none"
                                width="100%"
                                height="700px">
                                Game
                            </iframe>
                            <h2 className="judul-portofolio">Virtual Reality</h2>
                            <p></p>

                            <Button
                                style={{
                                padding: "0px"
                            }}
                                block>
                                <NavLink className="buttonGame">Git</NavLink>
                            </Button>

                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default Game;