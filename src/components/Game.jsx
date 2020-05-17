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
                            <iframe
                                style={{
                                    height: "500px",
                                    width: "80%"
                                }}
                                src="https://youtube.com/embed/7XY5QhLP6Aw"></iframe>
                            <h2 >Game 2D</h2>
                            <div className="lisk">
                                <h4>This 2D adventure game has 2 levels. There are several obstacles that must
                                    be passed by the player. To be able to go up in each level, players must
                                    complete missions, pick up a scroll. Players can fire weapons at the enemy,
                                    after taking the kunai symbol</h4>

                                <p><ul>
                                    Created using:
                                    <li>Unity 3D</li>
                                    <li>c # programming language</li>
                                </ul></p>

                                <p><ul>
                                    CREDITS
                                ArtS
                                    <li>Erin Facile</li>
                                    <li>Clint Belangger</li>
                                    <li>Camtatz</li>
                                </ul></p>

                                <ul>Music
                                    <li>Bart and The Great Hex-a-Hop site</li>
                                    <li>A Jingling Sound</li>
                                    <li>A Strange Warble</li>
                                    <li>Yo Frankie</li>
                                </ul>
                            </div>
                            <p></p>

                            <Button
                                style={{
                                    padding: "0px"
                                }}
                                block="block">
                                <NavLink
                                    className="buttonGame"
                                    href="https://github.com/nawan44/Game-2D-Adventure"
                                    target="blank"
                                    rel="nofollow">Git</NavLink>
                            </Button>
                            <Button
                                style={{
                                    padding: "0px"
                                }}
                                block="block">
                                <NavLink
                                    className="buttonGame"
                                    href="https://nawina2d.com"
                                    target="blank"
                                    rel="nofollow">Demo</NavLink>
                            </Button>
                        </div>

                        <div className="karya">
                            <iframe
                                style={{
                                    height: "500px",
                                    width: "80%"
                                }}
                                src="https://www.youtube.com/embed/I4KSUoBRTJ8"></iframe>
                            <h2 >Game 3D</h2>
                            <div className="lisk">
                                <h4>Game 3D First Person Shooter</h4>

                                <p><ul>
                                    Created using:
                                    <li>Unity 3D</li>
                                    <li>c # programming language</li>
                                </ul></p>

                                <p><ul>
                                    CREDITS
                                    <li>3D Alien       : 3dhaupt</li>
                                    <li>3D Environment : bluecoreproductions</li>
                                    <li>Sound Alien    : Ogrebane</li>
                                    <li>Font           : MK - Easy Text Light</li>
                                </ul></p>
                            </div>
                            <p></p>
                            <Button
                                style={{
                                    padding: "0px"
                                }}
                                block="block">
                                <NavLink
                                    className="buttonGame"
                                    href="https://github.com/nawan44/Game-3D-Survival"
                                    target="blank"
                                    rel="nofollow">Git</NavLink>
                            </Button>
                            <Button
                                style={{
                                    padding: "0px"
                                }}
                                block="block">
                                <NavLink
                                    className="buttonGame"
                                    href="https://nawina3d.com"
                                    target="blank"
                                    rel="nofollow">Demo</NavLink>
                            </Button>
                        </div>

                        <div className="karya">
                            <img
                                style={{
                                    height: "65%",
                                    width: "80%"
                                }}
                                src={ar}></img>
                            <h2
                                style={{
                                    marginBottom: "20px"
                                }}>Augmented Reality</h2>
                            <div className="lisk">
                                <h4>This Augmented Reality was built with
                                </h4>
                                <p></p>
                                <h5>Unity Engine</h5>
                                <p></p>
                                <h5>Software Development Kit Vuforia</h5>
                                <p></p>
                                <h5>Software Development Kit Android</h5>
                                <p></p>
                                <h5>C#</h5>
                            </div>
                            <p></p>
                            <Button
                                style={{
                                    padding: "0px"
                                }}
                                block="block">
                                <NavLink
                                    className="buttonGame"
                                    href="https://github.com/nawan44/Augmented-Reality-Geographic-Information-System"
                                    target="blank"
                                    rel="nofollow">Git</NavLink>
                            </Button>
                            <Button
                                block="block"
                                color="primary"
                                size="lg"
                                style={{
                                    marginTop: '5px'
                                }}>
                                <NavLink
                                    className="buttonPlaystore"
                                    style={{
                                        margin: "0px"
                                    }}
                                    href="https://drive.google.com/drive/folders/1TiY3zi6lu46MXNzjdIbnyorc6NoUjp1_?usp=sharing"
                                    target="blank"
                                    rel="nofollow">
                                    APK</NavLink>
                            </Button>
                        </div>

                        <div className="karya">
                            <img
                                style={{
                                    height: "65%",
                                    width: "80%"
                                }}
                                src={vr}></img>

                            <h2
                                style={{
                                    marginBottom: "20px"
                                }}>Virtual Reality</h2>
                            <div className="lisk">
                                <h4>This Virtual Reality was built with
                                </h4>
                                <p></p>
                                <h5>Unity Engine</h5>
                                <p></p>
                                <h5>Software Development Kit Oculus</h5>
                                <p></p>
                                <h5>Software Development Kit Google</h5>
                                <p></p>
                                <h5>C#</h5>
                            </div>
                            <p></p>
                            <Button
                                style={{
                                    padding: "0px"
                                }}
                                block="block">
                                <NavLink
                                    className="buttonGame"
                                    href="https://github.com/nawan44/Virtual-Reality-00"
                                    target="blank"
                                    rel="nofollow">Git</NavLink>
                            </Button>
                            <Button
                                block="block"
                                color="primary"
                                size="lg"
                                style={{
                                    marginTop: '5px'
                                }}>
                                <NavLink
                                    className="buttonPlaystore"
                                    style={{
                                        margin: "0px"
                                    }}
                                    href="https://play.google.com/store/apps/details?id=com.nawina.kalkulator"
                                    target="blank"
                                    rel="nofollow">
                                    Playstore</NavLink>
                            </Button>
                        </div>

                    </div>
                </Grid>
            </div>
        )
    }
}
export default Game;