import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import ar from './foto/ar.png';
import vr from './foto/vr.png';
import ContentList from './contenList';
import { Button, NavLink } from 'reactstrap';
import Footer from './Footer';


const frameYoutube = {
    height: '500px',
    width: '80%'
}
const buttonPorto = {
    padding: '0px'
}

class Game extends Component {
    render() {
        return (
            <div className="beranda">
                <Grid className="beranda-grid">
                    <div className="beranda-grid-left">
                        <ContentList />
                    </div>
                    <div className="beranda-grid-right" >
                        <h1>Portofolio Game</h1>
                        <div className="container-porto">
                            <div className="porto">
                                <h2 >Game 2D</h2>
                                <iframe
                                    style={frameYoutube}
                                    src="https:youtube.com/embed/7XY5QhLP6Aw"></iframe>
                                <div className="porto-desc-container">
                                    <div className="porto-desc">
                                        <p>Description :</p>
                                    This 2D adventure game has 2 levels. There are several obstacles that must
                                    be passed by the player. To be able to go up in each level, players must
                                    complete missions, pick up a scroll. Players can fire weapons at the enemy,
                                    after taking the kunai symbol
                                    </div>
                                    <div className="porto-desc">
                                        <p>Created using:</p>
                                        <ul>
                                            <li>Game Engine : Unity 3D</li>
                                            <li>Programming Language : c# </li>
                                        </ul>
                                    </div>
                                    <div className="porto-desc">
                                        <p>CREDITS</p>
                                        <ul>

                                            ArtS
                                     <li>Erin Facile</li>
                                            <li>Clint Belangger</li>
                                            <li>Camtatz</li>
                                        </ul>

                                        <ul>Music
                                     <li>Bart and The Great Hex-a-Hop site</li>
                                            <li>A Jingling Sound</li>
                                            <li>A Strange Warble</li>
                                            <li>Yo Frankie</li>
                                        </ul>
                                    </div>
                                </div>


                                <Button block="block" style={buttonPorto}>
                                    <NavLink
                                        className="porto-button-git"
                                        href="https:github.com/nawan44/Game-2D-Adventure"
                                        target="blank"
                                        rel="nofollow">Git</NavLink>
                                </Button>
                                <Button block="block" style={buttonPorto}>
                                    <NavLink
                                        className="porto-button-demo"
                                        href="https:nawina2d.com"
                                        target="blank"
                                        rel="nofollow">Demo</NavLink>
                                </Button>
                            </div>

                            <div className="porto">
                                <h2 >Game 3D</h2>
                                <iframe
                                    style={frameYoutube}
                                    src="https:www.youtube.com/embed/I4KSUoBRTJ8"></iframe>
                                <div className="porto-desc">
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
                                <Button style={buttonPorto}
                                    block="block">
                                    <NavLink
                                        className="porto-button-git"
                                        href="https:github.com/nawan44/Game-3D-Survival"
                                        target="blank"
                                        rel="nofollow">Git</NavLink>
                                </Button>
                                <Button style={buttonPorto}
                                    block="block">
                                    <NavLink
                                        className="porto-button-demo"
                                        href="https:nawina3d.com"
                                        target="blank"
                                        rel="nofollow">Demo</NavLink>
                                </Button>
                            </div>

                            <div className="porto">
                                <h2
                                    style={{
                                        marginBottom: "20px"
                                    }}>Augmented Reality</h2>
                                <img
                                    style={{
                                        height: "65%",
                                        width: "80%"
                                    }}
                                    src={ar}></img>

                                <div className="porto-desc">
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
                                <Button style={buttonPorto}
                                    block="block">
                                    <NavLink
                                        className="porto-button-git"
                                        href="https:github.com/nawan44/Augmented-Reality-Geographic-Information-System"
                                        target="blank"
                                        rel="nofollow">Git</NavLink>
                                </Button>
                                <Button style={buttonPorto}
                                    block="block">
                                    <NavLink
                                        className="porto-button-demo"
                                        href="https:drive.google.com/drive/folders/1TiY3zi6lu46MXNzjdIbnyorc6NoUjp1_?usp=sharing"
                                        target="blank"
                                        rel="nofollow">
                                        APK</NavLink>
                                </Button>
                            </div>

                            <div className="porto">
                                <h2
                                    style={{
                                        marginBottom: "20px"
                                    }}>Virtual Reality</h2>
                                <img
                                    style={{
                                        height: "65%",
                                        width: "80%"
                                    }}
                                    src={vr}></img>


                                <div className="porto-desc">
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
                                <Button style={buttonPorto}
                                    block="block">
                                    <NavLink
                                        className="porto-button-git"
                                        href="https:github.com/nawan44/Virtual-Reality-00"
                                        target="blank"
                                        rel="nofollow">Git</NavLink>
                                </Button>
                                {/* <Button style={buttonPorto}
                                    block="block">
                                    <NavLink
                                        className="porto-button-demo"
                                        href="https:play.google.com/store/apps/dev?id=8037692933857434579"
                                        target="blank"
                                        rel="nofollow">
                                        Playstore</NavLink>
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </Grid>
                <Footer />
            </div>

        )
    }
}
export default Game;