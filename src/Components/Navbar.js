function Navbar() {
    return(
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
    )
} 

export default Navbar;