import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { Button, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';

class Web extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">
                       
                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/PkBg6wYYdAR1PJ7FiqfSpqac3MTKA6ZskOaxrkrflYkFLSRPa18NssZgzeISDECV-mM=w720-h310-rw"></img>
                            <h2>Augmented Reality Geographic Information System</h2>
                            <p>
                                <p>Menampilkan 3D Pulau Bali dengan teknologi Augmented Reality untuk pengguna
                                    smartphone android.</p>
                                Dibangun dengan Game Engine Unity dengan menggunakan bahasa pemrograman C#.
                                <br/>Aplikasi ini membutuhkan:
                                <br/>
                                <ul align="left">
                                    <li>Kamera minimal 8mp</li>
                                    <li>Pastikan aplikasi diizinkan menggunakan kamera ( pengaturan >> aplikasi >>
                                        pilih aplikasi >> izin )</li>
                                    <li>RAM minimal 3GB</li>
                                    <li>Prosesor Qualcomm® Snapdragon™ 430</li>
                                    <li>Minimal oS Android 8.0 Oreo</li>

                                </ul>

                            </p>
                            <Button size="lg" block color="success" >Demo</Button>
                            <Button size="lg" >Download</Button>

                        </div>
                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/isyLJsg-ybq8xsxkg2sIihjoztQPpXqUoESQi8saBP7SA-fPGFS2Em1LbmGknyxLnyvh=w720-h310-rw"></img>
                            <h2>Aplikasi Recycle View Android</h2>
                            <p>
                                Aplikasi Android recycle untuk menampilkan produk secara dinamis
                            </p>
                            <Button size="lg" block color="success" >Demo</Button>
                            <Button size="lg" >Download</Button>

                        </div>

                    </div>

                </Grid>

            </div>
                    )
                }
            }
export default Web;