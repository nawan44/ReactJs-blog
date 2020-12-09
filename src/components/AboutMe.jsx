import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
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
// import upwork from './foto/upwork.png';
// import freelancer from './foto/freelancer.jpg';
// import projects from './foto/projects.png';
import atr from './foto/logo-kemenATR.png';
import aku from './foto/aku.jpg';
import dqlab from './foto/logo-dqlab.png';
import ggcampus from './foto/logo-ggs.png';
import siber from './foto/logo-siber.png';
import { Button, NavLink } from 'reactstrap';
import Footer from './Footer';


const identity = {
    margin: '50px 0 30px 0',
    fontFamily: 'Acme sans-serif',
    fontSize: '30px'
}
const fotoImgBg = {
    borderRadius: '50%',
    width: '250px',
    height: '250px',
    margin: '20px 0 40px 0'
}
const logo = {
    width: '70%'
}
const berandaGridLeftHr = {
    borderTop: '3px solid #833fb2',
}

const berandaGridRightHr = {
    borderTop: '3px solid #833fb2'
}
const judul = {
    fontFamily: 'Sawarabi Mincho sans-serif',
    fontSize: '40px',
    margin: '20px 0 20px 0'
}
const berandaRightH = {
    marginTop: '0px'
}
const contact = {
    color: 'black'
}

class TentangSaya extends Component {
    render() {
        return (
            <div className="beranda">
                <Grid className="beranda-grid">
                    <div className="beranda-grid-left">
                        <div className="content-list">
                            <br />
                            <br /> <br />
                            <img src={aku} alt="foto" style={fotoImgBg} />
                            <h4 style={identity}>Rachmat Gunawan</h4>
                            <h5>Learn new things for continuous improvement and share to have a social impact.</h5>
                            <h4 className="hobi">Contact :</h4>
                            <hr style={berandaGridLeftHr} />
                            <p>Address :<br />
                                <i class="fa fa-map-marker" > Bekasi, West Java, Indonesia</i> </p>
                            <br />
                            <p> Telegram : <br />
                                <i class="fa fa-telegram" ><a href="https://t.me/Nawan44" target="blank" rel="nofollow" style={contact}> @Nawan44</a></i > </p>
                            <br />
                            <p> E-mail : <br />
                                <i class="fa fa-envelope"><a href="mailto:rachmat.d.gunawan@gmail.com" target="blank" rel="nofollow" style={contact}> rachmat.d.gunawan@gmail.com</a></i > </p>
                            <br /> <br />
                            <h4 className="hobi"> Hobbies  </h4>
                            <hr style={berandaGridLeftHr} />
                            <i class="fa fa-book" > Reading </i>  <br />
                            <i class="fa fa-plane" > Traveling</i> <br />
                            <i class="fa fa-coffee" > Coffee</i> <br />
                            <i class="fa fa-headphones" > Listening Music</i> <br />
                            <i class="fa fa-camera" > Photography</i> <br />
                            <br />  <br />
                            {/* <h4 style={{ marginTop: '20px' }} className="judulblog">Blog </h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }} />
                            <p><img src={travel} style={fotohoby} />Travel</p>
                            <p><img src={buku} style={fotohoby} />Paper</p> */}
                        </div>
                    </div>
                    <div className="beranda-grid-right" >
                        <h3 style={judul}>Formal Education</h3>
                        <Grid>
                            <Cell col={4}>
                                <img src={smk} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h5 style={berandaRightH}>Vocational Secondary Schools 34 Jakarta</h5>
                                <h5 style={berandaRightH}>Automotive Mechanical Engineering</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.mercubuana.ac.id" target="blank" rel="nofollow">
                                    <img src={umb} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h5 style={berandaRightH}>University Of Mercu Buana</h5>
                                <h5 style={berandaRightH}>Bachelor's Degree of Informatics</h5>
                            </Cell>
                        </Grid>
                        <hr style={berandaGridRightHr} />
                        <h3 style={judul}>Non-Formal Education</h3>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://digitalent.kominfo.go.id/" target="blank" rel="nofollow">
                                    <img src={dts} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>Digital Talent Scholarship</h4>
                                <h5 style={berandaRightH}>Build Web with Node JS</h5>
                                <h5 style={berandaRightH}>HTML, CSS, Javascript</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.dicoding.com" target="blank" rel="nofollow">
                                    <img src={dicoding} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>Dicoding Academy</h4>
                                <h5 style={berandaRightH}>Mobile & Game Development</h5>
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
                                <h4 style={berandaRightH}>Binar Academy</h4>
                                <h5 style={berandaRightH}>Front End Engeineering</h5>
                                <h5 style={berandaRightH}>ReactJs</h5>

                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://imastudio.co.id/" target="blank" rel="nofollow">
                                    <img src={imastudio} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>Indonesia Mobile-app Academy</h4>
                                <h5 style={berandaRightH}>Android Development</h5>
                                <h5 style={berandaRightH}>XML, Java</h5>

                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.dqlab.id/" target="blank">
                                    <img src={dqlab} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>DqLab Academy</h4>
                                <h5 style={berandaRightH}>Data Scientist</h5>
                                <h5 style={berandaRightH}>R, Python</h5>
                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://ggcampus.com/" target="blank" rel="nofollow">
                                    <img src={ggcampus} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>GG Campus</h4>
                                <h5 style={berandaRightH}>Game Development</h5>
                                <h5 style={berandaRightH}>Unity 3D, C#</h5>
                            </Cell>
                        </Grid>
                        <hr style={berandaGridRightHr} />
                        <h3 style={judul}>Certifications</h3>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://aspen.eccouncil.org/verify" target="blank" rel="nofollow">
                                    <img src={cscu} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>EC-Council</h4>
                                <h5 style={berandaRightH}>Certified Secure Computer User v2</h5>
                                <h5 style={berandaRightH}>ECC78814255628</h5>
                            </Cell>
                        </Grid>
                        <Grid>
                            <Cell col={4}>
                                <NavLink href="https://www.certiport.com/Portal/Pages/CredentialVerification.aspx" target="blank" rel="nofollow">
                                    <img src={microsoft} style={logo} />
                                </NavLink>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>Microsoft</h4>
                                <h5 style={berandaRightH}>Microsoft Technology Associate - Database Administration Fundamentals</h5>
                                <h5 style={berandaRightH}>EoCo - XLRq</h5>
                            </Cell>
                        </Grid>
                        <hr style={berandaGridRightHr} />
                        <h3 style={judul}>Experience</h3>
                        <Grid>
                            <Cell col={4}>
                                <img src={toyota} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}> Toyota Motor Manufacturing Indonesia </h4>
                                <h5 style={berandaRightH}> Press & Welding Division</h5>
                                <h6 style={berandaRightH}> August 2008 - August 2010</h6>
                                <h5 style={berandaRightH}>Operator Press Machine</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={ahm} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>Astra Honda Motor</h4>
                                <h5 style={berandaRightH}> Die Casting Department</h5>
                                <h6 style={berandaRightH}> February 2011 - December 2012</h6>
                                <h5 style={berandaRightH}>Operator Die Cast Machine</h5>

                            </Cell>
                            <Cell col={4}>
                                <img src={mii} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>Mesin Isuzu Indonesia</h4>
                                <h5 style={berandaRightH}> Assembly Department</h5>
                                <h6 style={berandaRightH}> February 2013 - December 2015</h6>
                                <h5 style={berandaRightH}>Quality Control & Operator Production</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={atr} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>Ministry of Agrarian and Spatial Planning / National Land Agency</h4>
                                <h5 style={berandaRightH}>Directorate General of Spatial Planning</h5>
                                <h6 style={berandaRightH}> March 2016 - March 2020</h6>
                                <h5 style={berandaRightH}>Administrative & Financial Staff</h5>
                            </Cell>
                            <Cell col={4}>
                                <img src={siber} style={logo} />
                            </Cell>
                            <Cell col={8}>
                                <h4 style={berandaRightH}>Sibernetik Integradata</h4>
                                <h5 style={berandaRightH}>Confluent</h5>
                                <h6 style={berandaRightH}> July 2020 - November 2020</h6>
                                <h5 style={berandaRightH}>Software Engineer</h5>
                            </Cell>
                        </Grid>
                        {/* <hr style={berandaGridRightHr}/>
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
                    </div>
                </Grid>
                <Footer />

            </div>
        )
    }
}
export default TentangSaya;