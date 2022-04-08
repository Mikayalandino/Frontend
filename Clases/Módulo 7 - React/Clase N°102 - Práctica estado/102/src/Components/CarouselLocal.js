import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Styles/CarouselLocal.css"

const CarouselLocal = () => {
  return (
    <div className="contenedor-carousel">
      <Carousel
      autoPlay={true}
      interval={500}>
        <div>
          <img src="http://placekitten.com/100" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="http://placekitten.com/100" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="http://placekitten.com/100" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselLocal;
