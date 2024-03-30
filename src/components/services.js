import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faShop, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';



const servicesData = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faBed} className="bounce" size="lg" />,
    title: 'Rent a home',
    description: '3 beds, 2baths.'
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faShop} className="bounce" size="lg" />,
    title: 'Buy a home',
    description: '3 beds, 2baths.'
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} className="bounce" size="lg" />,
    title: 'Sell a home',
    description: '3 beds, 2baths.'
  },
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    {services.icon}
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;