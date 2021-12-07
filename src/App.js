import './style/App.scss';
import './style/global.scss';

// Import components
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Timeline from './Components/Timeline'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <div class="background">
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <span className="bokeh"></span>
        <Navbar/>
        <Hero/>
        <Gallery/>
        <About/>
        <Timeline/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
