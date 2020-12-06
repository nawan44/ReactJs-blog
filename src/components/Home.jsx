import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from './foto/sea.JPG';
import gitlab from './foto/gitlab.png';
import github from './foto/github.png';
import playstore from './foto/playstore.png';
import instagram from './foto/instagram.png';
import linkedin from './foto/linkedin.png';
import youtube from './foto/youtube.png';
import medium from './foto/medium.png';
import { Badge } from 'reactstrap';

// const berandaGrid = {
//     background: '-webkit-linear-gradient(to right, #2980B9, #6DD5FA, #FFFFFF)',
//     background: 'linear-gradient(to right, #2980B9, #6DD5FA, #FFFFFF)',
//     textAlign: 'center',
//     top: '0',
//     left: '0',
//     margin: 'auto',
//     width: '100%',
//     height: '100%'
// }

const kutipan = {

    color: '#0072ff',
    fontFamily: 'Amaranth, sans- serif',
    fontSize: '25px'

}

const badgeHome = {
    background: "none", width: "auto"
}

const socialLinks = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    margin: 'auto'

}
const bannerText = {
    backgroundImage: 'linear - gradient(111.4deg, rgba(122, 192, 233, 1) 18.8 %, rgba(4, 161, 255, 1) 100.2 %)',
    opacity: '0.8',
    width: '75%',
    height: '500px',
    margin: 'auto',
    borderRadius: '10px',
    margin: '50px 0 30px 0'
}
const logo = {
    width: '70px',
    height: '70px',
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
            <div >
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img src={me} alt="foto" style={fotoImgBg} />
                        <br />
                        <div style={kutipan}>
                            <Badge style={badgeHome}>
                                <h4 style={kutipan} >
                                    "I'm a programmer. I like programming. And the best way I've found to have a positive impact on code is to write it.”
                            </h4>
                                <h4 style={kutipan}>- Robert C. Martin, Clean Architecture -</h4>
                            </Badge>
                        </div>
                        <div style={bannerText} >
                            <h1>Magician</h1>
                            <hr />
                            <br></br>
                            <p >
                                <h5>HTML/CSS | C# | JavaScript | React | Android | Unity </h5></p>
                            <hr />
                            <div style={socialLinks}>
                                <a href="https://www.instagram.com/nawan44" target="blank" rel="nofollow">
                                    <img src={instagram} alt="foto" style={logo} />
                                </a>
                                <a href="https://www.linkedin.com/in/rachmat-gun" target="blank" rel="nofollow">
                                    <img src={linkedin} alt="foto" style={logo} />
                                </a>
                                <a href="https://www.github.com/nawan44" target="blank" rel="nofollow">
                                    <img src={github} alt="foto" style={logo} />
                                </a>

                            </div>
                            <div style={socialLinks}>

                                <a href="https://play.google.com/store/apps/dev?id=8037692933857434579" target="blank" rel="nofollow">
                                    <img src={playstore} alt="foto" style={logo} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCo26abxyKLHgGQmb9bAMP6Q?disable_polymer=true" target="blank" rel="nofollow">
                                    <img src={youtube} alt="foto" style={logo} />
                                </a>
                                <a href="https://medium.com/@nawan44" target="blank" rel="nofollow">
                                    <img src={medium} alt="foto" style={logo} />
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