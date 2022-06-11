import { Container, Col, Row } from 'reactstrap';
import AnimatedAboutCard from '../components/AnimatedAboutCard';

const About = () => {
    return (
        <div className='bg-light pb-5'>
            <Container className='bannerhead'>
                <Row className='align-items-center'>
                    <Col justify-content-center>
                        <h2>Our Mission</h2>
                        <h4>Heroic Hospitality</h4>
                    </Col>
                </Row>
            </Container>

            <Container>
                <AnimatedAboutCard />
            </Container>
        </div>
    );
};

export default About;