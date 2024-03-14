import React from 'react'

import Header from '../header/header'
import Courses from '../courses/courses'
import Quote from '../quote/quote'
import RecentBlog from '../blog/recentBlog/recentBlog'


const Home = () => {
    return (
        <div>
            <Header />
            <Courses />
            <Quote />
            <RecentBlog />
        </div>
    );
}

export default Home;