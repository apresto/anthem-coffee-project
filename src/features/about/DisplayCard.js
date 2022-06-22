import { Container, Col, Row, 
    CardGroup, Card, CardTitle, CardText } from 'reactstrap';

const DisplayCard = () => {
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
                <CardGroup>
                    <Card body className='text-center h-100'>
                            <CardTitle tag='h4'>Our Mission Statement</CardTitle>
                            <CardText>
                                We create unique experiences that change lives and bring people back.  We do this by loving and serving people, by preparing top notch, handcrafted food and beverages, and by creating an environment where real relationships are fostered.
                            </CardText>
                    </Card>
                    <Card body className='text-center mx-2'>
                        <CardTitle>Our Values</CardTitle>
                        <CardText>
                            <ol class='center'>
                                <li>
                                    We do the right thing.
                                </li>
                                <li>
                                    We are creative and innovative.
                                </li>
                                <li>
                                    We expect excellence in everything.
                                </li>
                                <li>
                                    We love growing and learning.
                                </li>
                                <li>
                                    We minimize waste and maximize profit.
                                </li>
                                <li>
                                    We are GOOD FINDERS.
                                </li>
                                <li>
                                    We honor one another with clear and consistent communication.
                                </li>
                                <li>
                                    We serve others over self.
                                </li>
                                <li>
                                    We care about our community.
                                </li>
                                <li>
                                    We build people.
                                </li>
                                <li>
                                    We run to potential problems to maintain unity.
                                </li>
                                <li>
                                    We have FUN!
                                </li>
                            </ol>
                        </CardText>
                    </Card>
                    <Card body className='text-center p-4 h-100'>
                            <CardTitle>Our Vision</CardTitle>
                            <CardText>
                                We strive to be recognized as a hub in the community, as the “place to be”.
                                We know and are known by our community.
                                We continually improve our skills and knowledge of handcrafted food & beverages and seek to be a leader and an innovator in the forefront of our industry.
                                We are a collective of creatives who aspire to teach, train, inspire, build-up and empower leaders.
                            </CardText>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    )
}

export default DisplayCard;