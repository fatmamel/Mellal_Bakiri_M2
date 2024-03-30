import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'BAkiri.G',
    description: 'MEILLEURE APPLICATION.',
    designation: 'Manager'
  },
  {
    id: 2,
    name: 'MELLAL.f',
    description: 'BEST EVER!',
    designation: 'Accountant'
  }
];

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel
          nextIcon={<FaChevronRight className="carousel-icon" />}
          prevIcon={<FaChevronLeft className="carousel-icon" />}
          indicators={true} //desactiver navig par indic audessous 
        >
          {testimonialsData.map(testimonial => (
            <Carousel.Item key={testimonial.id}>
              <blockquote>
                <p>{testimonial.description}</p>
                <cite>
                  <span className="name">{testimonial.name}</span>
                  <span className="designation">{testimonial.designation}</span>
                </cite>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;
