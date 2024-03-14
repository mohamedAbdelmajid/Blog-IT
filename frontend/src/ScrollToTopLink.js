import React from 'react'
import { Link } from 'react-router-dom'

const ScrollToTopLink = ({ to, children, ...rest}) => {
    const scrollToTop= () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <Link to={to} onClick={scrollToTop} {...rest}>
            {children}
        </Link>
    );
}

export default ScrollToTopLink
