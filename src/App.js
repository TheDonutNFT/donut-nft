import './App.scss';

//import draft images
import temp4x5 from './images/4x5.jpg';
import temp1x1 from './images/1x1.jpg';
import gallery1 from './images/1.jpg';
import gallery2 from './images/2.jpg';
import gallery3 from './images/3.jpg';
import gallery4 from './images/4.jpg';
import gallery5 from './images/5.jpg';
import header from './images/header1000x1000.png';


function App() {
  return (
    <div className="App">
      <header>
        <nav className="grid-container">
          <ul className="nav-menu nav-grid-container">
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                About
              </a>
            </li>
            <li>
              <a href="#roadmap">
                Roadmap
              </a>
            </li>
          </ul>
          <div className="icon-grid-container">
            <a className="disable-select"   id="typographic-icon" href="#home">
              DONUT NFT
            </a>
          </div>
        </nav>
      </header>
      <section id="home" className="intro-wrapper grid-container">
          <div className="bleed-left img-contain">
              <img src={header} alt="" />
          </div>
          <div className="bleed-right">
            <h1 className="disable-select">
              DONUT NFT
            </h1>
            <div className="section-underline">
              <h2 className="section-header">A collection of <strong className="highlight">10000</strong> unique donuts</h2>
            </div>
            <div className="media-links">
              <h5>SOCIAL MEDIA</h5>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/thedonutnft" className="black-border-btn intro-btn static-btn">Twitter</a>
              <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/dVEEKFsQbk" className="black-border-btn intro-btn static-btn">Discord</a>
            </div>
          </div>
      </section>
      <section className="grid-container">
        <div className="max-bleed">
          <div className="section-underline">
            <h2 className="section-header"> 
              The Collection
            </h2>
          </div>
          <div className="gallery-collection">
            <div className="img-contain">
              <img src={gallery1} alt="" />
            </div>
            <div className="img-contain">
              <img src={gallery2} alt="" />
            </div>
            <div className="img-contain">
              <img src={gallery5} alt="" />
            </div>
            <div className="img-contain">
              <img src={gallery4} alt="" />
            </div>
            <div className="img-contain">
              <img src={gallery3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="grid-container about-section">
        <div className="section-underline">
          <h2 className="section-header">The Donut Army</h2>
        </div>
        <div className="anchor-left">
          <div className="social-cta">
            <p>Just landed in the metaverse, these delectable donuts are here to stay (After a quick layover in your local supermarket for outfits, of course). Hailing from the faraway donutverse, the donuts love showing off, exploring, and above all, making new friends.</p>
          </div>
        </div>
        <div className="anchor-right">
          <h3>About the Project</h3>
          <div className="social-cta">
            <p>Finally, some donuts we can all feel good about buying. The Donut NFTs comprise of 10,000 hand drawn, unique, and randomly generated donuts. Our vision is to create a community of likeminded charitable investors who will change the world, one donut at a time.</p>
          </div>
          <div className="cta-group">
            <p>Join the Community</p>
            <div className="small-cta-group">
              <ul>
                <div id="icon-container">
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/thedonutnft">
                    <div id="icon">
                      <li><i className="fab fa-twitter"></i></li>
                    </div>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/dVEEKFsQbk">
                    <div id="icon">
                      <li><i className="fab fa-discord"></i></li>
                    </div>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="roadmap" className="grid-container">
        <div className="max-bleed">
          <div className="section-underline">
            <h2 className="section-header">The Donut NFT Roadmap</h2>
          </div>
          <div className="road-map-gallery">
            <div className="road-map-stage">
              <h3>
                The First Bite (25% sold)
              </h3>
              <p>
                10% of proceeds from minted Donuts are donated to a charitable cause chosen by existing holders.
              </p>
            </div>
            <div className="road-map-stage">
              <h3 className="stage-incomplete">
                Half Way (50% sold)
              </h3>
              <p>
                An additional 10% of proceeds from minted Donuts are donated.
              </p>
              <p>
                20 Donuts are randomly airdropped to existing holders.
              </p>
            </div>
            <div className="road-map-stage">
              <h3 className="stage-incomplete">
                Almost Gone (75% sold)
              </h3>
              <p>
                Exclusive IRL merch released for Donut holders (limited run).
              </p>
            </div>
            <div className="road-map-stage">
              <h3 className="stage-incomplete">
                All Gone (100% sold)
              </h3>
              <p>
                An additional 10% of proceeds from minted Donuts are donated.
              </p>
              <p>
                Holders will be able to participate in the artistic direction of a new NFT.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div id="contact">
          <ul>
            <div id="icon-container">
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/thedonutnft">
                <div id="icon">
                  <li><i className="fab fa-twitter"></i></li>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/dVEEKFsQbk">
                <div id="icon">
                  <li><i className="fab fa-discord"></i></li>
                </div>
              </a>
            </div>
          </ul>

        </div>
        <p className="disable-select" id="copyright">&copy; The Donut NFT</p>
      </footer>
    </div>
  );
}

export default App;
