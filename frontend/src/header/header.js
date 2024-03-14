import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTopLink from '../ScrollToTopLink';

const Header = () => {
    return (
        <div className='bg-dark text-white'>
            <div className='container text-center py-5'>
                <div className='pt-5'>
                    <h1 className='display-4'>IT for everyone</h1>
                </div>
                <div className='my-5 w-50 mx-auto text-center'>
                    <p className='lead'>
                        Discover some of the best IT articles, latest tech trends, tech guides, tech tutorials, tech tips, useful scripts, how-tos, and more.
                    </p>
                </div>
                <div className='pb-5'>
                    <ScrollToTopLink to="/courses"><button type="button" className="btn btn-primary btn-lg me-4">Courses</button></ScrollToTopLink>
                    <ScrollToTopLink to="/blog"><button type="button" className="btn btn-outline-light btn-lg ms-4">Blog</button></ScrollToTopLink>
                </div>
            </div>
        </div>
    );
}

export default Header;