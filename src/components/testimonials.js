<<<<<<< HEAD
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'BAkiri.G',
    description: 'MEILLEURE APPLICATION.',
=======
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
>>>>>>> da257c46219cade5900c7628908db82ffc257323
    designation: 'Manager'
  },
  {
    id: 2,
<<<<<<< HEAD
    name: 'MELLAL.f',
    description: 'BEST EVER!',
    designation: 'Accountant'
  }
];
=======
    name: 'Jasmine Perry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!',
    designation: 'Accountant'
  },
  // {
  //   id: 3,
  //   name: 'Rocky Johnson',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
  //   designation: 'CEO'
  // }
]
>>>>>>> da257c46219cade5900c7628908db82ffc257323

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
<<<<<<< HEAD
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
=======
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
>>>>>>> da257c46219cade5900c7628908db82ffc257323
        </Carousel>
      </Container>
    </section>
  );
}

<<<<<<< HEAD
export default AppTestimonials;
=======
export default AppTestimonials;
>>>>>>> da257c46219cade5900c7628908db82ffc257323
