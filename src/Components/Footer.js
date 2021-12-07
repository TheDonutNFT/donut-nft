function Footer(){
    return(
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
    )
}

export default Footer;