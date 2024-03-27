import reviewer1 from "../assets/reviewer1.png";
import reviewer2 from "../assets/reviewer2.png";
import reviewer3 from "../assets/reviewer3.png";

export default function Testimonials() {
  return (
    <div className="testimonials-parent">
      <h2 className="menu-header">Testimonials</h2>
      <div className="testimonials">
        <div className="testimonial">
          <img className="reviewer-img" src={reviewer1} alt="reviwer" />
          <div className="name-rating">
            <p className="reviewer-name">John Doe</p>
            <p className="reviewer-rating">5/5</p>
          </div>
          <div className="review-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="testimonial">
          <img className="reviewer-img" src={reviewer2} alt="reviwer" />
          <div className="name-rating">
            <p className="reviewer-name">Li Smith</p>
            <p className="reviewer-rating">5/5</p>
          </div>
          <div className="review-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="testimonial">
          <img className="reviewer-img" src={reviewer3} alt="reviwer" />
          <div className="name-rating">
            <p className="reviewer-name">Sute Anderson</p>
            <p className="reviewer-rating">5/5</p>
          </div>
          <div className="review-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
