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

const Fullpage = () => (
  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1200}
    anchors = {['home', 'about', 'portfolio', 'service', 'contact']}
    navigation = {false}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home/>
          </div>
          <div className="section">
            <About/>
          </div>
          <div className="section">
            <Experience/>
          </div>
          <div className="section">
            <Service/>
          </div>
          <div className="section">
            <Portfolio/>
          </div>
          <div className="section">
            <Testimonial/>
          </div>
          <div className="section">
            <Contact/>
          </div>
          <div className='footer section fp-auto-height'>
            <Footer/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
)

export default Fullpage;
