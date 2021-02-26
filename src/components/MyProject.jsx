import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import { NavLink, Button } from 'reactstrap';
import kalkulator from '../assets/logo/kalkulator.png';
import recycle from '../assets/logo/recycleview.png';
import { Link } from 'react-router-dom';

const Apps = () => {
    return (
        <div>
            <Grid className="beranda-grid">
                <div className="container-porto">
                    <div className="porto">
                        <img src={recycle}></img>
                        <h2>Recycle View Android</h2>
                        <div className="lisk">
                            <h4>This web project was built with </h4>
                            <p></p><h5>Java</h5>
                        </div>
                        <p></p>
                        <Button color="secondary" block size="lg" style={{ marginTop: '5px' }}>
                            <NavLink className="buttonGithub" style={{ margin: "0px" }} href="https://github.com/nawan44/Dicoding-Android-Pemula" target="blank" rel="nofollow">
                                Github</NavLink></Button>
                        <br ></br>
                        <Button color="primary" block size="lg" style={{ marginTop: '5px' }}>
                            <NavLink className="buttonPlaystore" style={{ margin: "0px" }} href="https://play.google.com/store/apps/details?id=com.contoh.rachgunawan" target="blank" rel="nofollow">
                                Playstore</NavLink></Button>
                    </div>
                    <div className="porto">
                        <img src={kalkulator}></img>
                        <h2>Kalkulator Android</h2>
                        <p> </p>
                        <Button color="secondary" block size="lg" style={{ marginTop: '5px' }}>
                            <NavLink className="buttonGithub" style={{ margin: "0px" }} href="https://github.com/nawan44/Kalkulator-Android-Java/tree/developer" target="blank" rel="nofollow">
                                Github</NavLink></Button>
                        <br ></br>
                        <Button block color="primary" size="lg" style={{ marginTop: '5px' }}>
                            <NavLink className="buttonPlaystore" style={{ margin: "0px" }} href="https://play.google.com/store/apps/details?id=com.nawina.kalkulator" target="blank" rel="nofollow">
                                Playstore</NavLink></Button>
                    </div>
                </div>
            </Grid>
        </div>
    )
}
export default Apps;