import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import { Button, NavLink } from 'reactstrap';

import {Link} from 'react-router-dom';

class Apps extends Component {
    render() {
        return (
            <div>
                <Grid className="beranda-grid">
                    <div className="karyaku">

                        <div className="karya1">
                            <img
                                src="https://lh3.googleusercontent.com/isyLJsg-ybq8xsxkg2sIihjoztQPpXqUoESQi8saBP7SA-fPGFS2Em1LbmGknyxLnyvh=w720-h310-rw"></img>
                            <h2>Aplikasi Recycle View Android</h2>
                            <p>
                                Aplikasi Android recycle untuk menampilkan produk secara dinamis
                            </p>
                            <Button color="success" size="lg" block>Demo</Button>
                            <Button size="lg" style={{marginTop:'20px'}}><NavLink size="lg" block color="success"  href="https://play.google.com/store/apps/details?id=com.contoh.rachgunawan">Download</NavLink></Button>

                        </div>

                    </div>

                </Grid>

            </div>

        )
    }
}
export default Apps;