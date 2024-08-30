interface ExampleCarouselImageProps {
  src: string;
  alt: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({
  src,
  alt,
}) => {
  return (
    <div className="carousel-image-container">
      <img src={src} alt={alt} className="d-block w-100" />
    </div>
  );
};

export default ExampleCarouselImage;
