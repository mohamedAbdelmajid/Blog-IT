import React from "react";
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollToTopLink from "../ScrollToTopLink";


const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <h5 className="mb-4">NEWSLETTER</h5>
                        <p>Join the movement and receive our weekly Tech related <ScrollToTopLink to="/newsletter">newsletter</ScrollToTopLink>. It’s Free.</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-4">Popular Articles</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><ScrollToTopLink to="#" className="text-white" style={{ textDecoration: 'none' }}><i className="bi bi-file-text"></i> Office 365 Hybrid Configuration Wizard can’t start</ScrollToTopLink></li>
                            <hr />
                            <li className="mb-2"><ScrollToTopLink to="#" className="text-white" style={{ textDecoration: 'none' }}><i className="bi bi-file-text"></i> Change default mailbox language</ScrollToTopLink></li>
                            <hr />
                            <li className="mb-2"><ScrollToTopLink to="#" className="text-white" style={{ textDecoration: 'none' }}><i className="bi bi-file-text"></i> Trasfer FSMO roles in Active Directory</ScrollToTopLink></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-4">Follow Us</h5>
                        <p>Follow us on social media and keep up with our latest Technology news.</p>
                        <Link to="#">
                            <i className="bi bi-linkedin fs-3 me-3"></i>
                        </Link>
                        <Link to="#">
                            <i className="bi bi-twitter-x fs-3 me-3"></i>
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p>&copy; 2024 Anass Kssama</p>
                    </div>
                    <div className="col text-center">
                        <ScrollToTopLink to="/contact" className="footer-link me-5">Contact</ScrollToTopLink>
                        <ScrollToTopLink to="/link2" className="footer-link me-5">Privacy Policy</ScrollToTopLink>
                        <ScrollToTopLink to="/link3" className="footer-link me-5">Terms and Disclosure</ScrollToTopLink>
                    </div>
                </div>

                {/* <p>&copy; 2024 ALI TAJRAN</p> */}

            </div>
        </footer>
    );
}

export default Footer