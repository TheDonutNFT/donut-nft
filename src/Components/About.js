function About(){
    return(
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
            <p className="lead">Join the Community</p>
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

export default About;