import React, {Component} from 'react';
import {Grid} from 'react-mdl';
import {Link} from 'react-router-dom';
import {Button, NavLink, Badge} from 'reactstrap';
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
                            <h2 >Game 2D</h2>
                            <div className="lisk">
                               <h4>This game using the webgl platform, </h4> 
                                   
                                    <p></p><h5>Unity Engine</h5>
                                    <p></p><h5>C#</h5>
                                    
                            </div>
                            <p></p>

                            <Button style={{ padding: "0px" }} block>
                                <NavLink className="buttonGame" href="https://github.com/nawan44/Game-2D-Adventure" target="blank">Git</NavLink>
                            </Button>
                        </div>
                        <div className="karya">
                            <iframe  src="http://www.nawina3d.com"  frameBorder="none" width="100%" height="700px">  Game
                            </iframe>
                            <h2 >Game 3D</h2>
                            <p></p>
                            <Button size="lg" block style={{ marginTop: '20px' }}>Git  </Button>
                        </div>
                        <div className="karya">
                            <img
                            style={{height:"65%", width:"80%"}}
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            
                            <h2 style={{marginBottom:"20px"}} >Augmented Reality</h2>
                            <div className="lisk">
                               <h4>This Augmented Reality was built with </h4> 
                                   
                                    <p></p><h5>Unity Engine</h5>
                                    <p></p><h5>Software Development Kit Vuforia</h5>
                                    <p></p><h5>Software Development Kit Android</h5>
                                    <p></p><h5>C#</h5>
                                    
                            </div>
                            <p></p>
                            <Button
                                style={{
                                padding: "0px"
                            }}
                                block>
                                <NavLink
                                    className="buttonGame"
                                    href="https://github.com/nawan44/Augmented-Reality-Geographic-Information-System" target="blank">Git</NavLink>
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
                            <h2 >Virtual Reality</h2>
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