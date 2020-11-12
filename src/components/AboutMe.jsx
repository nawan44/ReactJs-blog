import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import buku from './foto/buku.png';
import coffee from './foto/coffee.png';
import music from './foto/music.png';
import camera from './foto/camera.png';
import travel from './foto/travel.png';
import binar from './foto/binar.jpg';
import dts from './foto/dts.png';
import dicoding from './foto/dicoding.png';
import imastudio from './foto/imastudio.png';
import microsoft from './foto/microsoft.png';
import cscu from './foto/cscu.png';
import smk from './foto/smk.png';
import umb from './foto/umb.png';
import toyota from './foto/toyota.png';
import ahm from './foto/ahm.png';
import mii from './foto/isuzu.png';
import siber from './foto/siber.png';
import upwork from './foto/upwork.png';
import freelancer from './foto/freelancer.jpg';
import projects from './foto/projects.png';
import atr from './foto/atr.png';
import aku from './foto/aku.jpg';
import dqlab from './foto/dqlab.png';
import telegram from './foto/telegram.png';
import ggcampus from './foto/ggcampus.jpg';
import { Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class TentangSaya extends Component {
    render() {
        return (
            <div className="content-body">
                <Grid className="beranda-grid">
                    <Cell col={3}>
                        <div className="content-list">
                            <br />
                            <br /> <br />
                            <img src={aku} alt="foto" className="foto-img-bg" />
                            <h4 style={{ marginTop: '50px' }} className="identity">Rachmat Gunawan</h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }} />
                            <p>Address :<br />
                                KH Ahmad Junaedi Street,
                                Bekasi, West Java, Indonesia</p>
                            Contact :
                            <p> <a href="https://t.me/Nawan44" target="blank" rel="nofollow"><img src={telegram} className="fotohoby" /><h5 className="contact">Telegram</h5></a></p>

                            <br /> <br />
                            <h4 className="hobi"> Hobbies  </h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }} />
                            <p><img src={buku} className="fotohoby" />Reading</p>
                            <p><img src={travel} className="fotohoby" />Traveling</p>
                            <p><img src={coffee} className="fotohoby" />Coffee</p>
                            <p><img src={music} className="fotohoby" />Listening to Music</p>
                            <p><img src={camera} className="fotohoby" />Photography</p>
                            <br />  <br />
                            <h4 style={{ marginTop: '20px' }} className="judulblog">Blog </h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }} />
                            <p><img src={travel} className="fotohoby" />Travel</p>
                            <p><img src={buku} className="fotohoby" />Paper</p>
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={9}>
                        <h3 className="judul">Formal Education</h3>
                        <Grid>
                            <Cell col={4}>
                                <img src={smk} height="80px" width="90px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h5 style={{ marginTop: '0px' }}>Vocational Secondary Schools 34 Jakarta</h5>
                                <h5 style={{ marginTop: '0px' }}>Automotive Mechanical Engineering</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.mercubuana.ac.id" target="blank" rel="nofollow">
                                    <img src={umb} height="70px" width="100px"></img>
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
                                    <img src={dts} height="100px" width="150px"></img>
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
                                    <img src={dicoding} height="100px" width="100px"></img>
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
                                    <img src={binar} height="100px" width="100px"></img>
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
                                    <img src={imastudio} height="100px" width="100px"></img>
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
                                    <img src={dqlab} height="100px" width="100px"></img>
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
                                    <img src={ggcampus} height="100px" width="150px"></img>
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
                                    <img src={cscu} height="70px" width="100px"></img>
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
                                    <img src={microsoft} height="70px" width="100px"></img>
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
                                <img src={toyota} height="70px" width="120px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}> Toyota Motor Manufacturing Indonesia </h4>
                                <h5 style={{ marginTop: '0px' }}> Press & Welding Division</h5>
                                <h5 style={{ marginTop: '0px' }}> 2008 - 2010</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={ahm} height="50px" width="120px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Astra Honda Motor</h4>
                                <h5 style={{ marginTop: '0px' }}> Die Casting Department</h5>
                                <h5 style={{ marginTop: '0px' }}> 2011 - 2012</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={mii} height="50px" width="120px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Mesin Isuzu Indonesia</h4>
                                <h5 style={{ marginTop: '0px' }}> Assembly Department</h5>
                                <h5 style={{ marginTop: '0px' }}> 2013 - 2015</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={atr} height="80px" width="90px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Ministry of Agrarian and Spatial Planning / National Land Agency</h4>
                                <h5 style={{ marginTop: '0px' }}>2016 - 2020</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={siber} height="80px" width="90px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px' }}>Sibernetik Integradata</h4>
                                <h5 style={{ marginTop: '0px' }}>2020</h5>
                            </Cell>
                        </Grid>
                        {/* <hr style={{ borderTop: '3px solid #e22947' }}/>
                        <h3 className="judul">Freelance</h3>
                        <Grid>
                            <Cell col={4}>
                                <img src={upwork} height="70px" width="120px"></img>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{ marginTop: '0px'}}> UPWORK </h4>
                                <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                    href="https://www.upwork.com/o/profiles/users/~01d4a8f99444120f1f/" target="blank" rel="nofollow">Developer Page</Button>
                            </Cell>
                            <Cell col={4}>
                                <img src={freelancer} height="50px" width="120px"></img>
                            </Cell>
                            <Cell col={8}>
                            <h4 style={{ marginTop: '0px'}}> FREELANCER.COM </h4>
                                <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                    href="https://www.freelancer.com/u/nawan44" target="blank" rel="nofollow">Developer Page</Button>
                            </Cell>
                            <Cell col={4}>
                                <img src={projects} height="50px" width="120px"></img>
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