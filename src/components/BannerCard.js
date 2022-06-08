import { CardBody, CardTitle, Button,
        Container, Row, Col } from 'reactstrap';
// import MenuDirectoryPage from '../../pages/MenuDirectoryPage';

const BannerCard = () => {
    return (
        <div className='masthead'>
            <Container className='h-100'>
                <Row className='h-100 align-items-center'>
                    <Col className='text-center'>
                        <CardBody>
                            <CardTitle className='text-light hero-title' tag='h1'>Anthem Coffee</CardTitle>
                            <Button href='/menu' size='lg' color='primary'>Menu</Button>
                            <Button href='/locations' className='m-1' size='lg' color='light'>Locations</Button>
                        </CardBody>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BannerCard;