import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/team1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'BAKIRI_MELLAL',
    designation: 'Developpeurs',
    description: 'etudiantes en master 2 isi'
  },
  {
    id: 2,
    image: require('../assets/images/team2.jpg'),
    fbLink: '',
    twitterLink: '',
    linkedinLink: '',
    gmailLink: 'mailto:samy.sadi@ummto.dz',
    name: 'Monsieur Sadi',
    designation: 'Professeur',
    description: 'Promoteur.'
  },
  {
    id: 3,
    image: require('../assets/images/team3.jpg'),
    fbLink: '',
    twitterLink: '',
    linkedinLink: '',
    name: 'Monsieur Karar',
    designation: 'CEO',
    description: 'OWNER.'
  },
 
]

function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>TEAM</h2>
          <div className="subtitle">Meet our staff</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={4} key={teams.id}>
                  <div className='image'>
                  <Image src={teams.image} className="img-fluid w-100" style={{ height: teams.id === 1 ? '400px' : '400px' }} />
                   
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                          {teams.gmailLink &&
                            <li><a href={teams.gmailLink}><i className="far fa-envelope"></i></a></li>
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;