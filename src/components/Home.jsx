import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import me from './foto/me.jpg';
import gitlab from './foto/gitlab.png';
import github from './foto/github.png';
import playstore from './foto/playstore.png';
import instagram from './foto/instagram.png';
import linkedin from './foto/linkedin.png';
import medium from './foto/medium.png';

class Beranda extends Component {
    render() {
        return (
            <div >
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img src={me} alt="foto" className="foto-img-bg"/>
                        <br/>
                        <div className="kutipan">
                            <h4  className="kutipan" >
                               "One’s destination is never a place, but a new way of seeing things.” - Henry Miller
                            </h4>
                        </div>
                        <div className="banner-text">
                            <h1>Magician</h1>
                            <hr/>
                            <div className="social-links">
                                <a href="https://www.instagram.com/nawan44">
                                    <img src={instagram} alt="foto" className="logo"/>
                                </a>
                                <a href="https://www.linkedin.com/in/rachmat-gun">
                                    <img src={linkedin} alt="foto" className="logo"/>
                                </a>

                                <a href="https://www.github.com/nawan44">
                                    <img src={github} alt="foto" className="logo"/>
                                </a>
                                <a href="https://www.gitlab.com/nawan44">
                                    <img src={gitlab} alt="foto" className="logo"/>
                                </a>
                                <a href="https://medium.com/@nawan44">
                                    <img src={medium} alt="foto" className="logo"/>
                                </a>
                                <a href="https://play.google.com/store/apps/dev?id=8037692933857434579">
                                    <img src={playstore} alt="foto" className="logo"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Beranda;