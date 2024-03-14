import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './home/home'
import Layout from './layout/layout';
import Courses from './courses/courses';
import NoPage from './noPage/noPage';
import About from './about/about';
import Contact from './contact/contact';
import Newsletter from './newsletter/newsletter';
import ExchangeServer from './courses/exchange-server/exchange-server';
import Blog from './blog/blog';
import RemoveDomainController from './blog/removeDomainController/removeDomainController';
import ExchangeServerHAvailability from './courses/exchange-server-h-availability/exchange-server-h-availability';
import Azure from './blog/azure/azure';
import ExchangeHybrid from './courses/exchange-hybrid/ExchangeHybrid';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="blog" element={<Blog />} />
          <Route path="remove-domain-controller" element={<RemoveDomainController />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="courses/exchange-server" element={<ExchangeServer />} />
          <Route path="courses/exchange-server-high-availability" element={<ExchangeServerHAvailability />} />
          <Route path="courses/exchange-hybrid" element={<ExchangeHybrid />} />
          <Route path="blog/azure" element={<Azure/>} />
        </Route>
        <Route path="*" element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
