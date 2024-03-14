import React from 'react'
import { Link } from 'react-router-dom'

import RecentArticles from '../blog/recentArticles/recentArticles';

const Contact = () => {
    return (
        <div className='container my-5 pt-5'>
            <div className='row'>
                <div className='col-8'>
                    <h1>Contact</h1>
                    <p className='lead'>Need to get in touch with us? Well, you can! Please follow the instructions below.</p>
                    <h5>General Inquiry</h5>
                    <p className='lead'>For general information, email us at <a href="/"> info@anasskssama.com.</a></p>
                    <h5>Advertise</h5>
                    <p className='lead'>For advertising, email us at <a href="/"> info@anasskssama.com.</a></p>
                </div>
                <RecentArticles/>
            </div>
        </div>
    );
}

export default Contact