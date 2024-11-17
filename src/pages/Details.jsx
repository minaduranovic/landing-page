import { Carousel } from "react-responsive-carousel";
import cat1 from "../assets/cat1.webp";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.avif";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Details = () => {
  return (
    <div>
      <h1>Details</h1>
      <div className="carousel-wrapper">
        <Carousel>
          <div>
            <img src={cat1} alt="cat1" />
            <p>Cat 1</p>
          </div>
          <div>
            <img src={cat2} alt="cat2" />
            <p>Cat 2</p>
          </div>
          <div>
            <img src={cat3} alt="cat3" />
            <p>Cat 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Details;
