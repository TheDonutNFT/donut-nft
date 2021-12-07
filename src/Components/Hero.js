import CountdownTimer from './CountdownTimer/CountdownTimer';
import header from '../images/header1000x1000.png';

function Hero() {
    return (
        <section id="home" className="intro-wrapper grid-container">
          <div className="bleed-left img-contain">
              <img src={header} alt="" />
          </div>
          <div className="bleed-right">
            <h1 className="indent disable-select">
              DONUT NFT
            </h1>
            <div className="section-underline">
              <h2 className="section-lead indent">A collection of <strong className="highlight">10000</strong> unique donuts</h2>
            </div>
            <CountdownTimer
            countdownTimestampMs={1640961607000}/>
            
            <div className="margin-top cta-group">
                <p className="lead">Social Media</p>
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
    )
} 

export default Hero;