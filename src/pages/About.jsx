import dummyImage from "../assets/dummy.png";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div className="about-content-wrapper">
        <img src={dummyImage} alt="dummy" />
        <div className="about-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
          blanditiis fugit. Numquam officiis adipisci est molestiae vero nobis
          beatae ex totam ullam, veritatis praesentium culpa dolorem vitae,
          animi, rerum blanditiis. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam temporibus, labore quos nulla quisquam vitae
          sit neque ab maiores inventore maxime eveniet quasi facilis, eligendi
          perspiciatis incidunt? Repudiandae, reiciendis minima.
        </div>
      </div>
    </div>
  );
};

export default About;
