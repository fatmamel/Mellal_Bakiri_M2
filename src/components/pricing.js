import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const pricingData = [
  {
    id: 1,
    plan: 'Acheter',
    price: '500000 DA',
    images: [
      require('../assets/images/home1.jpg'),
      require('../assets/images/home2.jpg'),
      require('../assets/images/home3.jpg')
    ]
  },
  {
    id: 2,
    plan: 'Louer',
    price: '1000000 DA',
    images: [
      require('../assets/images/home1.jpg'),
      require('../assets/images/home2.jpg'),
      require('../assets/images/home3.jpg')
    ]
  },
  {
    id: 3,
    plan: 'Enchers',
    price: '50000000 DA',
    images: [
      require('../assets/images/home1.jpg'),
      require('../assets/images/home2.jpg'),
      require('../assets/images/home3.jpg')
    ]
  },
  {
    id: 4,
    plan: 'TrocS',
    price: '50000000 DA',
    images: [
      require('../assets/images/home1.jpg'),
      require('../assets/images/home2.jpg'),
      require('../assets/images/home3.jpg')
    ]
  }
];

function AppPricing() {
  const [hoveredImages, setHoveredImages] = useState(pricingData.map(() => null));

  const handleMouseEnter = (pricingId, imageIndex) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[pricingId - 1] = imageIndex;
    setHoveredImages(newHoveredImages);
  };

  const handleMouseLeave = (pricingId) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[pricingId - 1] = null;
    setHoveredImages(newHoveredImages);
  };

  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder" style={{ color: 'blue', fontFamily: 'Arial' }}>
          <h2 style={{ color: 'red', fontFamily: 'Arial' }}>Pricing &amp; announcements</h2>
          <div className="subtitle" style={{ color: 'Black', fontFamily: 'Arial' }}>Explore our disponibilities &amp; pricing</div>
        </div>
        <Row className="my-4">
          {pricingData.map(pricing => (
            <Col sm={3} key={pricing.id} className={`mb-4 ${pricing.plan.toLowerCase()}`} style={{ borderRight: `${pricing.plan !== 'Groc' ? '1px solid lightgrey' : 'none'}`, paddingRight: `${pricing.plan !== 'Groc' ? '15px' : '0'}` }}>
              <div className='heading'>
                <h3>{pricing.plan}</h3>
              </div>
              <div className='image-container'>
                {pricing.images.map((image, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={image}
                      alt={`Image ${index}`}
                      className="image"
                      style={{ transform: hoveredImages[pricing.id - 1] === index ? 'scale(1.2)' : 'scale(1)' }}
                      onMouseEnter={() => handleMouseEnter(pricing.id, index)}
                      onMouseLeave={() => handleMouseLeave(pricing.id)}
                    />
                    <span className="price">{pricing.price}</span>
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;
