import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
//import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
// import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Link-uri rapide:</h3>
                    <Link to='/about'>Despre</Link>
                    <Link to='/terms'>Termeni si conditii</Link>
                    {/* <a href='https://lst-telefoane.netlify.app/' target="_blank" rel="noopener noreferrer">Demo Lista Telefoane</a> */}
                    <a href='https://smtrk.herokuapp.com/' target="_blank" rel="noopener noreferrer">Blog Samothraki</a>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="mailto:theodorbur@yahoo.com">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            theodorbur@yahoo.com
                        </a>
                    </p>
                    {/* <p className="m-0"><Phone className="mr-1 footer-icon"/>+40726709576</p> */}
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="https://github.com/bursumactheodor">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            bursumactheodor
                        </a>
                    </p>
                    {/* <p className="m-0">
                        <a href="https://www.linkedin.com/in/theodor-bursumac-56472397/">
                            <LinkedIn className="mr-1 footer-icon"/>
                            Theodor Bursumac
                        </a>
                    </p> */}
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Bursumac Theodor, 2022
            </div>
        </footer>
    );
}

export default Footer;

