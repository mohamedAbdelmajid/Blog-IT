import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTopLink from '../ScrollToTopLink';

const NavigationBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setDropdownOpen(true);
        console.log("Mouse Enter");

    }

    const handleMouseLeave = () => {
        setDropdownOpen(false);
        console.log("Mouse Leave");

    }

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

        const newURL = '/blog';
        navigate(newURL);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3 mb-5">
            <div className="container">
                <ScrollToTopLink className="navbar-brand" to="/">
                    <img src="/images/logoAK2.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    Anas Kssama
                </ScrollToTopLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <ScrollToTopLink className="nav-link " aria-current="page" to="/">Home</ScrollToTopLink>
                        </li>
                        <li className="nav-item">
                            <ScrollToTopLink className="nav-link" to="/courses">Courses</ScrollToTopLink>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <ScrollToTopLink className="nav-link dropdown-toggle" to="/blog" role="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen} onClick={handleLinkClick}>
                                Blog
                            </ScrollToTopLink>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/azure">Azure</ScrollToTopLink></li>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/certificates">Certificates</ScrollToTopLink></li>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/exchange">Exchange</ScrollToTopLink></li>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/hybrid">Hybrid</ScrollToTopLink></li>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/microsoft-365">Microsoft 365</ScrollToTopLink></li>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/other">Other</ScrollToTopLink></li>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/outlook">Outlook</ScrollToTopLink></li>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/powershell">Powershell</ScrollToTopLink></li>
                                <li><ScrollToTopLink className="dropdown-item" to="/blog/windows-server">Windows Server</ScrollToTopLink></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <ScrollToTopLink className='nav-link' to="/about">About</ScrollToTopLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollToTopLink className='nav-link' to="/contact">Contact</ScrollToTopLink>
                        </li>
                        <li className='nav-item'>
                            <ScrollToTopLink className='nav-link' to="/newsletter">Newsletter</ScrollToTopLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
