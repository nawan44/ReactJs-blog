import React from 'react';
import { Grid } from 'react-mdl';
import binar from '../assets/logo/logo-binar.png';
import dts from '../assets/logo/logo-dts.png';
import dicoding from '../assets/logo/logo-dicoding.png';
import imastudio from '../assets/logo/logo-ima.png';
import microsoft from '../assets/logo/logo-microsoft.png';
import cscu from '../assets/logo/logo-cscu.png';
import smk from '../assets/logo/logo-smk.png';
import umb from '../assets/logo/logo-mercubuana.png';
import toyota from '../assets/logo/logo-toyota.png';
import ahm from '../assets/logo/logo-ahm.png';
import mii from '../assets/logo/logo-isuzu.png';
// import upwork from '../assets/logo/upwork.png';
// import freelancer from '../assets/logo/freelancer.jpg';
// import projects from '../assets/logo/projects.png';
import atr from '../assets/logo/logo-kemenATR.png';
import dqlab from '../assets/logo/logo-dqlab.png';
import ggcampus from '../assets/logo/logo-ggs.png';
import siber from '../assets/logo/logo-siber.png';
import { Button, NavLink } from 'reactstrap';
import Footer from '../components/Footer';
import ContentList from '../components/contenList';




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


const TentangSaya = () => {
    return (
        <div className="beranda">
            <Grid className="beranda-grid">
                <div className="beranda-grid-left">
                    <ContentList />
                </div>
                <div className="beranda-grid-right" >
                    <h3 style={judul}>Formal Education</h3>
                    <Grid>
                        <div className="bg-right-logo" >
                            <img src={smk} className="logo" />
                        </div>
                        <div className="bg-right-content">
                            <h5 style={berandaRightH}>Vocational Secondary Schools 34 Jakarta</h5>
                            <h5 style={berandaRightH}>Automotive Mechanical Engineering</h5>
                        </div>
                    </Grid>
                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://www.mercubuana.ac.id" target="blank" rel="nofollow">
                                <img src={umb} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h5 style={berandaRightH}>University Of Mercu Buana</h5>
                            <h5 style={berandaRightH}>Bachelor's Degree of Informatics</h5>
                        </div>
                    </Grid>
                    <hr style={berandaGridRightHr} />
                    <h3 style={judul}>Non-Formal Education</h3>
                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://digitalent.kominfo.go.id/" target="blank" rel="nofollow">
                                <img src={dts} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Digital Talent Scholarship</h4>
                            <h5 style={berandaRightH}>Build Web with Node JS</h5>
                            <h5 style={berandaRightH}>HTML, CSS, Javascript</h5>
                        </div>
                    </Grid>
                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://www.dicoding.com" target="blank" rel="nofollow">
                                <img src={dicoding} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Dicoding Academy</h4>
                            <h5 style={berandaRightH}>Mobile & Game Development</h5>
                            <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                href="https://www.dicoding.com/users/84441" target="blank" rel="nofollow">Developer Page</Button>
                        </div>
                    </Grid>
                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://binar.co.id/" target="blank" rel="nofollow">
                                <img src={binar} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Binar Academy</h4>
                            <h5 style={berandaRightH}>Front End Engeineering</h5>
                            <h5 style={berandaRightH}>ReactJs</h5>

                        </div>
                    </Grid>

                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://imastudio.co.id/" target="blank" rel="nofollow">
                                <img src={imastudio} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Indonesia Mobile-app Academy</h4>
                            <h5 style={berandaRightH}>Android Development</h5>
                            <h5 style={berandaRightH}>XML, Java</h5>

                        </div>
                    </Grid>
                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://www.dqlab.id/" target="blank">
                                <img src={dqlab} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>DqLab Academy</h4>
                            <h5 style={berandaRightH}>Data Scientist</h5>
                            <h5 style={berandaRightH}>R, Python</h5>
                        </div>
                    </Grid>

                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://ggcampus.com/" target="blank" rel="nofollow">
                                <img src={ggcampus} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>GG Campus</h4>
                            <h5 style={berandaRightH}>Game Development</h5>
                            <h5 style={berandaRightH}>Unity 3D, C#</h5>
                        </div>
                    </Grid>
                    <hr style={berandaGridRightHr} />
                    <h3 style={judul}>Certifications</h3>
                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://aspen.eccouncil.org/verify" target="blank" rel="nofollow">
                                <img src={cscu} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>EC-Council</h4>
                            <h5 style={berandaRightH}>Certified Secure Computer User v2</h5>
                            <h5 style={berandaRightH}>ECC78814255628</h5>
                        </div>
                    </Grid>
                    <Grid>
                        <div className="bg-right-logo" >
                            <NavLink href="https://www.certiport.com/Portal/Pages/CredentialVerification.aspx" target="blank" rel="nofollow">
                                <img src={microsoft} className="logo" />
                            </NavLink>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Microsoft</h4>
                            <h5 style={berandaRightH}>Microsoft Technology Associate - Database Administration Fundamentals</h5>
                            <h5 style={berandaRightH}>EoCo - XLRq</h5>
                        </div>
                    </Grid>
                    <hr style={berandaGridRightHr} />
                    <h3 style={judul}>Experience</h3>
                    <Grid>
                        <div className="bg-right-logo" >
                            <img src={toyota} className="logo" />
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}> Toyota Motor Manufacturing Indonesia </h4>
                            <h5 style={berandaRightH}> Press & Welding Division</h5>
                            <h6 style={berandaRightH}> August 2008 - August 2010</h6>
                            <h5 style={berandaRightH}>Operator Press Machine</h5>
                        </div>
                        <div className="bg-right-logo" >
                            <img src={ahm} className="logo" />
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Astra Honda Motor</h4>
                            <h5 style={berandaRightH}> Die Casting Department</h5>
                            <h6 style={berandaRightH}> February 2011 - December 2012</h6>
                            <h5 style={berandaRightH}>Operator Die Cast Machine</h5>

                        </div>
                        <div className="bg-right-logo" >
                            <img src={mii} className="logo" />
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Mesin Isuzu Indonesia</h4>
                            <h5 style={berandaRightH}> Assembly Department</h5>
                            <h6 style={berandaRightH}> February 2013 - December 2015</h6>
                            <h5 style={berandaRightH}>Quality Control & Operator Production</h5>
                        </div>
                        <div className="bg-right-logo" >
                            <img src={atr} className="logo" />
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Ministry of Agrarian and Spatial Planning / National Land Agency</h4>
                            <h5 style={berandaRightH}>Directorate General of Spatial Planning</h5>
                            <h6 style={berandaRightH}> March 2016 - March 2020</h6>
                            <h5 style={berandaRightH}>Administrative & Financial Staff</h5>
                        </div>
                        <div className="bg-right-logo" >
                            <img src={siber} className="logo" />
                        </div>
                        <div className="bg-right-content">
                            <h4 style={berandaRightH}>Sibernetik Integradata</h4>
                            <h5 style={berandaRightH}>Confluent</h5>
                            <h6 style={berandaRightH}> July 2020 - November 2020</h6>
                            <h5 style={berandaRightH}>Software Engineer</h5>
                        </div>
                    </Grid>
                    {/* <hr style={berandaGridRightHr}/>
                    <h3 className="judul">Freelance</h3>
                    <Grid>
                        <div className="bg-right-logo" >
                            <img src={upwork} style ={logo}/>
                        </div>
                        <div className="bg-right-content">
                            <h4 style={{ marginTop: '0px'}}> UPWORK </h4>
                            <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                href="https://www.upwork.com/o/profiles/users/~01d4a8f99444120f1f/" target="blank" rel="nofollow">Developer Page</Button>
                        </div>
                        <div className="bg-right-logo" >
                            <img src={freelancer} style ={logo}/>
                        </div>
                        <div className="bg-right-content">
                        <h4 style={{ marginTop: '0px'}}> FREELANCER.COM </h4>
                            <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                href="https://www.freelancer.com/u/nawan44" target="blank" rel="nofollow">Developer Page</Button>
                        </div>
                        <div className="bg-right-logo" >
                            <img src={projects} style ={logo}/>
                        </div>
                        <div className="bg-right-content">
                        <h4 style={{ marginTop: '0px'}}> PROJECTS.CO.ID </h4>
                            <Button color="success" size="lg" style={{ marginTop: '5px' }}
                                href="https://projects.co.id/public/browse_users/view/94bf15/nawan44" target="blank" rel="nofollow">Developer Page</Button>
                        </div>
                       
                    </Grid> */}
                </div>
            </Grid>
            <Footer />

        </div>
    )
}
export default TentangSaya;