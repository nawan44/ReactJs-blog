import React from 'react';
import { Grid } from 'react-mdl';
import { NavLink, Button } from 'reactstrap';
import Footer from '../components/Footer';
import kalkulator from '../assets/logo/kalkulator.png';
import recycle from '../assets/logo/recycleview.png';
import ContentList from '../components/contenList';

const buttonPorto = {
    padding: '0px'
}

const Apps = () => {
    return (
        <div className="beranda">
            <Grid className="beranda-grid">
                <div className="beranda-grid-left">
                    <ContentList />
                </div>
                <div className="beranda-grid-right" >
                    <h1>Portofolio Mobile App Android</h1>
                    <div className="container-porto">
                        <div className="porto">
                            <h2>Recycle View Android</h2>
                            <img src={recycle} />
                            <div className="porto-desc-container">
                                <div className="porto-desc">
                                    <p>This web project was built with</p>
                                    Java
                                </div>
                            </div>

                            <Button block="block" style={buttonPorto} >
                                <NavLink className="porto-button-git" href="https:github.com/nawan44/Dicoding-Android-Pemula" target="blank" rel="nofollow">
                                    Github</NavLink></Button>
                            <br ></br>
                            <Button block="block" style={buttonPorto} >
                                <NavLink className="porto-button-demo" href="https:play.google.com/store/apps/details?id=com.contoh.rachgunawan" target="blank" rel="nofollow">
                                    Playstore</NavLink></Button>
                        </div>
                        <div className="porto">
                            <h2>Kalkulator Android</h2>

                            <img src={kalkulator} />
                            <div className="porto-desc-container">
                                <div className="porto-desc">
                                    <p>This web project was built with</p>
                                    Java
                                </div>
                            </div>
                            <Button block="block" style={buttonPorto}>
                                <NavLink className="porto-button-git" href="https:github.com/nawan44/Kalkulator-Android-Java/tree/developer" target="blank" rel="nofollow">
                                    Github</NavLink></Button>
                            <br ></br>
                            <Button block="block" style={buttonPorto}>
                                <NavLink className="porto-button-demo" href="https:play.google.com/store/apps/details?id=com.nawina.kalkulator" target="blank" rel="nofollow">
                                    Playstore</NavLink></Button>
                        </div>
                    </div>
                </div>
            </Grid>
            <Footer />
        </div>

    )
}
export default Apps;