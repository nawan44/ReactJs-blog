import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './Footer';

class Contact extends Component {
    render(){
        return(
            <div >
        <Grid className="beranda-grid1">


        
            <div className= "kartu-nama-i">
            <img src="https://graph.facebook.com/1005568859629953/picture?height=200" 
                alt ="foto"
                className="foto-img-bg"
                />
                <br />
                <br />
                <br />
                <br />
            Kontak Saya :
            <br />
            <br />
            rachmatgunawan@rachmatgunawan.com
            <br />
            <br />
            <br />
            <div className="social-links" >
                <a href ="https://www.instagram.com/nawan44" 
                rel="noopener noreferrer" target="_blank">
                <i className= "fa fa-instagram" aria-hidden = "true" />
                </a>

                <a href ="https://www.linkedin.com/in/rachmat-gun"
                rel="noopener noreferrer" target="_blank">
                <i className= "fa fa-linkedin-square" aria-hidden = "true" />
                </a>

                <a href ="https://www.github.com/rachmatgunawan"
                rel="noopener noreferrer" target ="_blank">
                <i className= "fa fa-github-square" aria-hidden = "true" />
                </a>
                </div>
            
             </div>
           

        </Grid>

        </div>
        
        
        )
    }
}
export default Contact;