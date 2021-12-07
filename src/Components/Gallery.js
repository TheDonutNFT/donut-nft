import gallery1 from '../images/1.jpg';
import gallery2 from '../images/2.jpg';
import gallery3 from '../images/3.jpg';
import gallery4 from '../images/4.jpg';
import gallery5 from '../images/5.jpg';

function Gallery() {
    return(
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
    )
}

export default Gallery;