import React from 'react';
import aku from './foto/aku.jpg';


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
const berandaGridLeftHr = {
    borderTop: '3px solid #833fb2',
}
const contact = {
    color: 'black',
    textAlign: 'left',
    margin: '10px 0 10px 0',
    width: '100%',
    float: 'left'
}

class ContentList extends React.Component {
    render() {
        return (
            <div className="content-list">
                <br />
                <br /> <br />
                <img src={aku} alt="foto" style={fotoImgBg} />
                <h4 style={identity}>Rachmat Gunawan</h4>
                <h5>Learn new things for continuous improvement and share to have a social impact.</h5>
                <h4 className="hobi">Contact </h4>
                <hr style={berandaGridLeftHr} />
                <div style={contact}>Address :<br />
                    <i class="fa fa-map-marker" > Bekasi, West Java, Indonesia</i> </div>
                <br />
                <div style={contact}> Telegram : <br />
                    <i class="fa fa-telegram" ><a href="https://t.me/Nawan44" target="blank" rel="nofollow" style={{ color: "black" }} > @Nawan44</a></i > </div>
                <br />
                <div style={contact}> E-mail : <br />
                    <i class="fa fa-envelope"><a href="mailto:rachmat.d.gunawan@gmail.com" target="blank" rel="nofollow" style={{ color: "black" }}> rachmat.d.gunawan@gmail.com</a></i > </div>
                <br /> <br />
                <h4 className="hobi"> Hobbies  </h4>
                <hr style={berandaGridLeftHr} />
                <div style={contact}><i class="fa fa-book" > Reading </i> </div>
                <div style={contact}><i class="fa fa-plane" > Traveling</i> </div>
                <div style={contact}><i class="fa fa-coffee" > Coffee</i> </div>
                <div style={contact}><i class="fa fa-headphones" > Listening Music</i> </div>
                <div style={contact}><i class="fa fa-camera" > Photography</i></div>

                <br />  <br />
                {/* <h4 style={{ marginTop: '20px' }} className="judulblog">Blog </h4>
                            <hr style={{ borderTop: '3px solid #833fb2' }} />
                            <p><img src={travel} style={fotohoby} />Travel</p>
                            <p><img src={buku} style={fotohoby} />Paper</p> */}
            </div>

        )
    }
}
export default ContentList;