import React, {Component} from 'react';
import {Grid} from 'react-mdl';
import {Link} from 'react-router-dom';
import game2d from './foto/2d.png';
import game3d from './foto/3d.png';
import ar from './foto/ar.png';
import vr from './foto/vr.png';

import {Button, NavLink, Badge} from 'reactstrap';
class Game extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                        <div className="karya">
                        <img style={{height:"65%", width:"80%"}}  src={game2d}></img>
                            <h2 >Game 2D</h2>
                            <div className="lisk">
                               <h4>This game using the webgl platform, </h4> 
                                   
                                    <p></p><h5>Unity Engine</h5>
                                    <p></p><h5>C#</h5>
                                    
                            </div>
                            <p></p>

                            <Button style={{ padding: "0px" }} block>
                                <NavLink className="buttonGame" href="https://github.com/nawan44/Game-2D-Adventure" target="blank" rel="nofollow">Git</NavLink>
                            </Button>
                            <Button style={{ padding: "0px" }} block >
                                <NavLink className="buttonGame" href="https://nawina2d.com" target="blank" rel="nofollow">Demo</NavLink>
                            </Button>
                        </div>
                         
                        <div className="karya">
                        <img style={{height:"65%", width:"80%"}}  src={game3d}></img>
                            <h2 >Game 3D</h2>
                            <p></p>
                            <Button style={{ padding: "0px" }} block>
                                <NavLink className="buttonGame" href="https://github.com/nawan44/Game-3D-Survival" target="blank" rel="nofollow">Git</NavLink>
                            </Button>
                            <Button style={{ padding: "0px" }} block  >
                                <NavLink className="buttonGame" href="https://nawina3d.com" target="blank" rel="nofollow">Demo</NavLink>
                            </Button>
                        </div>
                         
                        <div className="karya">
                        <img style={{height:"65%", width:"80%"}}  src={ar}></img>
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
                                    href="https://github.com/nawan44/Augmented-Reality-Geographic-Information-System" target="blank" rel="nofollow">Git</NavLink>
                            </Button>
                            <Button block color="primary" size="lg" style={{marginTop:'5px'}}>
                                <NavLink className="buttonPlaystore" style={{margin:"0px"}} href="https://play.google.com/store/apps/details?id=com.nawina.kalkulator" target="blank" rel="nofollow">
                                    Playstore</NavLink></Button>
                        </div>
                         
                        <div className="karya">
                            <img style={{height:"65%", width:"80%"}}  src={vr}></img>
                            
                            <h2 style={{marginBottom:"20px"}} >Virtual Reality</h2>
                            <div className="lisk">
                               <h4>This Virtual Reality was built with </h4> 
                                    <p></p><h5>Unity Engine</h5>
                                    <p></p><h5>Software Development Kit Oculus</h5>
                                    <p></p><h5>Software Development Kit Google</h5>
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
                                    href="https://github.com/nawan44/Virtual-Reality-00" target="blank" rel="nofollow">Git</NavLink>
                            </Button>
                            <Button block color="primary" size="lg" style={{marginTop:'5px'}}>
                                <NavLink className="buttonPlaystore" style={{margin:"0px"}} href="https://play.google.com/store/apps/details?id=com.nawina.kalkulator" target="blank" rel="nofollow">
                                    Playstore</NavLink></Button>
                        </div>
                        
                    </div>
                </Grid>
            </div>
        )
    }
}
export default Game;