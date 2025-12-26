import "../css_files/Testimonials.css";
import { testimonialData } from "../lib/testimonialData";

const Testimonials = () => {
  return (
    <div className="testimonial_wrapper" id="testimonial">
      <div className="part1">
        <h2 id="heading">Testimonials</h2>
        <p>
          I am a product-oriented Software Engineer with a business mindset from
          bringing the latest tech to launching successful startups!
        </p>
      </div>

      <div id="part2">
        {testimonialData.map((t, index) => (
          <div className="testimonalcard" key={index}>
            <div className="cardp1">
              <img src={t.img} alt={t.name} />
              <h3>{t.name}</h3>
              <span>{t.profession}</span>
            </div>

            <div className="cardp2">
              <p>{t.description}</p>
              <button className="test_btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
