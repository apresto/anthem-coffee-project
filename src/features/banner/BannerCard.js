import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, Button,
        Container, Row, Col } from 'reactstrap';
import banner from '../../app/assets/images/parallax.jpg';

const BannerCard = () => {
    return (

        <div className='masthead'>
            <Container className='h-100'>
                <Row className='h-100 align-items-center'>
                    <Col className='text-center'>
                        <CardBody>
                            <CardTitle className='text-light' tag='h1'>Anthem Coffee</CardTitle>
                            <Button>Menu</Button>
                            <Button className='m-1'>Locations</Button>
                        </CardBody>
                    </Col>
                </Row>
            </Container>
        </div>

        // <Card>
        //     <CardImg
        //         src={banner}
        //         className='vh-100'
        //     />
        //     <CardImgOverlay className='d-flex justify-content-center align-items-center'>
        //         <CardBody className='text-center'>
        //             <CardTitle tag='h1'>
        //                 Anthem Coffee Shop
        //             </CardTitle>
        //             <Button>
        //                 Menu
        //             </Button>
        //             <Button>
        //                 Locations
        //             </Button>
        //         </CardBody>
        //     </CardImgOverlay>
        // </Card>
    );
}

export default BannerCard;