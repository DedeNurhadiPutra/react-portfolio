import ReactFullpage from '@fullpage/react-fullpage'
// pages
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState } from 'react';
import Nav from './components/Nav';

const Fullpage = () => {
  const [activeSection, setActiveSection] = useState('');
  
  return (
    <>
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1200}
      anchors = {['home', 'about', 'experience', 'service', 'portfolio', 'testimonial', 'contact', 'footer']}
      navigation = {false}
      removeURLHash={true}
      setRecordHistory={false}
      afterLoad={(origin, destination) => {
        setActiveSection(destination.item.dataset.title);
      }}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" data-title="Home">
              <Home/>
            </div>
            <div className="section" data-title="About">
              <About/>
            </div>
            <div className="section" data-title="Experience">
              <Experience/>
            </div>
            <div className="section" data-title="Service">
              <Service/>
            </div>
            <div className="section" data-title="Portfolio">
              <Portfolio/>
            </div>
            <div className="section" data-title="Testimonial">
              <Testimonial/>
            </div>
            <div className="section" data-title="Contact">
              <Contact/>
            </div>
            <div className='footer section fp-auto-height' data-title="Footer">
              <Footer/>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
      />
      <Nav activeSection={activeSection} />
      </>
    );
}

export default Fullpage;
