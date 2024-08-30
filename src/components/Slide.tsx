import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";

function Slide() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage
          src="https://via.placeholder.com/800x400?text=First+Slide"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Primera Imagen</h3>
          <p>Texto informativo - Tiene que ver con la imagen</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage
          src="https://via.placeholder.com/800x400?text=Second+Slide"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Segunda Imagen</h3>
          <p>Texto informativo - Tiene que ver con la imagen</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage
          src="https://via.placeholder.com/800x400?text=Third+Slide"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Tercera Imagen</h3>
          <p>Texto informativo - Tiene que ver con la imagen</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
