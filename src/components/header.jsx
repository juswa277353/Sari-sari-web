import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <section className="header-section">
      <div className="carousel-card">
        <Carousel fade interval={3000} controls={false} indicators={true} pause={false}>
          {/* Slide 1 */}
          <Carousel.Item>
            <img src="/img/intro-bg.png" alt="First slide" />
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img src="/img/bg.jpg" alt="Second slide" />
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img src="/img/intro1.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
