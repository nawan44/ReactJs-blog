import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from './foto/sea.JPG';
// import gitlab from './foto/gitlab.png';
// import github from './foto/github.png';
// import playstore from './foto/playstore.png';
// import instagram from './foto/instagram.png';
// import linkedin from './foto/linkedin.png';
// import youtube from './foto/youtube.png';
// import medium from './foto/medium.png';




const socialLinks = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    margin: 'auto'
}
const logo = {
    width: '50px',
    height: '50px',
    margin: '30px 15px'
}
const fotoImgBg = {
    borderRadius: '50%',
    width: '250px',
    height: '250px',
    margin: '20px 0 40px 0'
}


class Beranda extends Component {
    render() {
        return (
            <div className="beranda" >
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img src={me} alt="foto" style={fotoImgBg} />
                        <br />
                        <div className="badgeHome">
                            "I'm a programmer. I like programming. And the best way I've found to have a positive impact on code is to write it.”
                                <p>- Robert C. Martin, Clean Architecture -</p>
                        </div>
                        <div className="bannerText" >
                            <h1>Magician</h1>
                            <hr />
                            <br></br>
                            {/* style={{ fontSize: "48px", color: "white" }} */}
                            <p >
                                <h5>HTML/CSS | C# | JavaScript | React | Android | Unity </h5></p>
                            <hr />
                            <div className="socialLinks">
                                <a href="https://www.instagram.com/nawan44" target="blank" rel="nofollow">
                                    {/* <img src={instagram} alt="foto" style={logo} /> */}
                                    <i class="fa fa-instagram" > </i>

                                </a>
                                <a href="https://www.linkedin.com/in/rachmat-gun" target="blank" rel="nofollow">
                                    {/* <img src={linkedin} alt="foto" style={logo} /> */}
                                    <i class="fa fa-linkedin-square" > </i>

                                </a>
                                <a href="https://www.github.com/nawan44" target="blank" rel="nofollow">
                                    {/* <img src={github} alt="foto" style={logo} /> */}
                                    <i class="fa fa-github" > </i>

                                </a>

                            </div>
                            <div className="socialLinks">

                                <a href="https://play.google.com/store/apps/dev?id=8037692933857434579" target="blank" rel="nofollow">
                                    {/* <img src={playstore} alt="foto" style={logo} /> */}
                                    <i class="fa fa-stack-overflow" > </i>

                                </a>
                                <a href="https://www.youtube.com/channel/UCo26abxyKLHgGQmb9bAMP6Q?disable_polymer=true" target="blank" rel="nofollow">
                                    {/* <img src={youtube} alt="foto" style={logo} /> */}
                                    <i class="fa fa-youtube-play" > </i>

                                </a>
                                <a href="https://medium.com/@nawan44" target="blank" rel="nofollow">
                                    {/* <img src={medium} alt="foto" style={logo} /> */}
                                    <i class="fa fa-medium" > </i>

                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}
export default Beranda;