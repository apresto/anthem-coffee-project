import { Card, CardTitle, CardImg, CardText, CardBody, Col, Row } from 'reactstrap';

const MenuDetail = ({ menu }) => {
    const { image, name, description } = menu;

    return (
        <Row className='my-5 justify-content-center'>
            <Col md='5' className='my-4 px-0'>
                <Card>
                    <CardImg top src={image} alt={name} />
                </Card>
            </Col>
            <Col md='5' className='my-4 px-0'>
                <Card>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
};

export default MenuDetail;