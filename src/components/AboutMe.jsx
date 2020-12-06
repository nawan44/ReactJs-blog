import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import buku from './foto/buku.png';
import coffee from './foto/coffee.png';
import music from './foto/music.png';
import camera from './foto/camera.png';
import travel from './foto/travel.png';
import binar from './foto/logo-binar.png';
import dts from './foto/logo-dts.png';
import dicoding from './foto/logo-dicoding.png';
import imastudio from './foto/logo-ima.png';
import microsoft from './foto/logo-microsoft.png';
import cscu from './foto/logo-cscu.png';
import smk from './foto/logo-smk.png';
import umb from './foto/logo-mercubuana.png';
import toyota from './foto/logo-toyota.png';
import ahm from './foto/logo-ahm.png';
import mii from './foto/logo-isuzu.png';
import upwork from './foto/upwork.png';
import freelancer from './foto/freelancer.jpg';
import projects from './foto/projects.png';
import atr from './foto/logo-kemenATR.png';
import aku from './foto/aku.jpg';
import dqlab from './foto/logo-dqlab.png';
import telegram from './foto/telegram.png';
import ggcampus from './foto/logo-ggs.png';
import siber from './foto/logo-siber.png';
import { Button, NavLink } from 'reactstrap';

const identity = {
    margin: '50px 0 0 0',
    fontFamily: 'Acme sans-serif',
    fontSize: '30px'
}
const fotoImgBg = {
    borderRadius: '50%',
    width: '250px',
    height: '250px',
    margin: '20px 0 40px 0'
}
const fotohoby = {
    width: '14px',
    height: '14px',
    marginRight: '5px'
}
const logo = {
    width: '70%'
}

class TentangSaya extends Component {
    render() {
        return (
            <div className="content-body">
                <Grid className="beranda-grid">
                    <Cell col={3}>
                        <div className="content-list">
                            <br />
                            <br /> <br />
                            <img src={aku} alt="foto" style={fotoImgBg} />
                            <h4 style={identity}>Rachmat Gunawan</h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }} />
                            <p>Address :<br />
                                KH Ahmad Junaedi Street,
                                Bekasi, West Java, Indonesia</p>
                            Contact :
                            <p> <a href="https://t.me/Nawan44" target="blank" rel="nofollow"><img src={telegram} style={fotohoby} /><h5 className="contact">Telegram</h5></a></p>

                            <br /> <br />
                            <h4 className="hobi"> Hobbies  </h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }} />
                            <p><img src={buku} style={fotohoby} />Reading</p>
                            <p><img src={travel} style={fotohoby} />Traveling</p>
                            <p><img src={coffee} style={fotohoby} />Coffee</p>
                            <p><img src={music} style={fotohoby} />Listening to Music</p>
                            <p><img src={camera} style={fotohoby} />Photography</p>
                            <br />  <br />
                            <h4 style={{ marginTop: '20px' }} className="judulblog">Blog </h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }} />
                            <p><img src={travel} style={fotohoby} />Travel</p>
                            <p><img src={buku} style={fotohoby} />Paper</p>
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={9}>
                        <h3 className="judul">Formal Education</h3>
                        <Grid>
                            <Cell col={4}>
                                <img src={smk} height="80px" width="90px" />
                            </Cell>
                            <Cell col={8}>
                                <h5 style={{ marginTop: '0px' }}>Vocational Secondary Schools 34 Jakarta</h5>
                                <h5 style={{ marginTop: '0px' }}>Automotive Mechanical Engineering</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.mercubuana.ac.id" target="blank" rel="nofollow">
                                    <img src={umb} height="70px" width="100px" />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h5 style={{ marginTop: '0px' }}>University Of Mercu Buana</h5>
                                <h5 style={{ marginTop: '0px' }}>Bachelor's Degree of Informatics</h5>
                            </Cell>
                        </Grid>
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h3 className="judul">Non-Formal Education</h3>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://digitalent.kominfo.go.id/" target="blank" rel="nofollow">
                                    <img src={dts} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Digital Talent Scholarship</h4>
                                <h5 style={{ marginTop: '0px' }}>HTML, CSS, Javascript</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.dicoding.com" target="blank" rel="nofollow">
                                    <img src={dicoding} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Dicoding Academy</h4>
                                <h5 style={{ marginTop: '0px' }}> Game Developer</h5>
                                <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                    href="https://www.dicoding.com/users/84441" target="blank" rel="nofollow">Developer Page</Button>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://binar.co.id/" target="blank" rel="nofollow">
                                    <img src={binar} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Binar Academy</h4>
                                <h5 style={{ marginTop: '0px' }}>Front End Developer</h5>
                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://imastudio.co.id/" target="blank" rel="nofollow">
                                    <img src={imastudio} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Indonesia Mobile-app Academy</h4>
                                <h5 style={{ marginTop: '0px' }}>Android Developer</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.dqlab.id/" target="blank">
                                    <img src={dqlab} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>DqLab Academy</h4>
                                <h5 style={{ marginTop: '0px' }}>Data Scientist</h5>
                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://ggcampus.com/" target="blank" rel="nofollow">
                                    <img src={ggcampus} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>GG Campus</h4>
                                <h5 style={{ marginTop: '0px' }}>Unity 3D</h5>
                            </Cell>
                        </Grid>
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h3 className="judul">Certifications</h3>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://aspen.eccouncil.org/verify" target="blank" rel="nofollow">
                                    <img src={cscu} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>EC-Council</h4>
                                <h5 style={{ marginTop: '0px' }}>Certified Secure Computer User v2</h5>
                                <h5 style={{ marginTop: '0px' }}>ECC78814255628</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.certiport.com/Portal/Pages/CredentialVerification.aspx" target="blank" rel="nofollow">
                                    <img src={microsoft} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Microsoft</h4>
                                <h5 style={{ marginTop: '0px' }}>Microsoft Technology Associate - Database Administration Fundamentals</h5>
                                <h5 style={{ marginTop: '0px' }}>EoCo - XLRq</h5>
                            </Cell>
                        </Grid>
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h3 className="judul">Experience</h3>
                        <Grid>
                            <Cell col={4}>
                                <img src={toyota} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}> Toyota Motor Manufacturing Indonesia </h4>
                                <h5 style={{ marginTop: '0px' }}> Press & Welding Division</h5>
                                <h5 style={{ marginTop: '0px' }}> 2008 - 2010</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={ahm} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Astra Honda Motor</h4>
                                <h5 style={{ marginTop: '0px' }}> Die Casting Department</h5>
                                <h5 style={{ marginTop: '0px' }}> 2011 - 2012</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={mii} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Mesin Isuzu Indonesia</h4>
                                <h5 style={{ marginTop: '0px' }}> Assembly Department</h5>
                                <h5 style={{ marginTop: '0px' }}> 2013 - 2015</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={atr} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Ministry of Agrarian and Spatial Planning / National Land Agency</h4>
                                <h5 style={{ marginTop: '0px' }}>Directorate General of Spatial Planning</h5>
                                <h5 style={{ marginTop: '0px' }}>2016 - 2020</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={siber} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Sibernetik Integradata</h4>
                                <h5 style={{ marginTop: '0px' }}>Engineer</h5>
                                <h5 style={{ marginTop: '0px' }}>2020</h5>
                            </Cell>
                        </Grid>
                        {/* <hr style={{ borderTop: '3px solid #e22947' }}/>
                        <h3 className="judul">Freelance</h3>
                        <Grid>
                            <Cell col={4}>
                                <img src={upwork} style ={logo}/>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px'}}> UPWORK </h4>
                                <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                    href="https://www.upwork.com/o/profiles/users/~01d4a8f99444120f1f/" target="blank" rel="nofollow">Developer Page</Button>
                            </Cell>
                            <Cell col={4}>
                                <img src={freelancer} style ={logo}/>
                            </Cell>
                            <Cell col={8}>
                            <h4 style={{ marginTop: '0px'}}> FREELANCER.COM </h4>
                                <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                    href="https://www.freelancer.com/u/nawan44" target="blank" rel="nofollow">Developer Page</Button>
                            </Cell>
                            <Cell col={4}>
                                <img src={projects} style ={logo}/>
                            </Cell>
                            <Cell col={8}>
                            <h4 style={{ marginTop: '0px'}}> PROJECTS.CO.ID </h4>
                                <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                    href="https://projects.co.id/public/browse_users/view/94bf15/nawan44" target="blank" rel="nofollow">Developer Page</Button>
                            </Cell>
                           
                        </Grid> */}
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default TentangSaya;