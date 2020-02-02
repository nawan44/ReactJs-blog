import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { NavLink, Button } from 'reactstrap';
import kalkulator from './foto/kalkulator.png';
import recycle from './foto/recycleview.png';
import {Link} from 'react-router-dom';

class Apps extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                        <div className="karya">
                            <img src={recycle}></img>
                            <h2>Recycle View Android</h2>
                            <div className="lisk">
                               <h4>This web project was built with </h4> 
                                   
                                    <p></p><h5>Java</h5>
                                    
                            </div>
                            <p></p>
                            <Button color="secondary" block size="lg" style={{marginTop:'5px'}}>
                                <NavLink className="buttonGithub" style={{margin:"0px"}} href="https://github.com/nawan44/Dicoding-Android-Pemula">
                                    Github</NavLink></Button>
                            <br ></br>
                            <Button color="info" block size="lg" style={{marginTop:'5px'}}>
                                <NavLink className="buttonPlaystore" style={{margin:"0px"}} href="https://play.google.com/store/apps/details?id=com.contoh.rachgunawan">
                                    Playstore</NavLink></Button>
                        </div>
                        <div className="karya">
                            <img src={kalkulator}></img>
                            <h2>Kalkulator Android</h2>
                            <p> </p>
                            <Button color="secondary" block size="lg" style={{marginTop:'5px'}}>
                                <NavLink className="buttonGithub" style={{margin:"0px"}} href="https://github.com/nawan44/Kalkulator-Android-Java/tree/developer">
                                    Github</NavLink></Button>
                            <br ></br>
                            <Button block color="info" size="lg" style={{marginTop:'5px'}}>
                                <NavLink className="buttonPlaystore" style={{margin:"0px"}} href="https://play.google.com/store/apps/details?id=com.nawina.kalkulator">
                                    Playstore</NavLink></Button>
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default Apps;