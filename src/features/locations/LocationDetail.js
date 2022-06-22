import { Card, CardImg, CardTitle, CardText, CardBody, Col } from 'reactstrap';

const LocationDetail = ({location}) => {
    const {name, image, address, weekdays, weekends} = location;

    return (
        <Col md='12' className='m-2'>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>
                        <a href='{address}' color='black'>{address}</a>
                    </CardText>
                    <CardTitle tag='h6' className='mt-3'>Hours</CardTitle>
                    <CardText>{weekdays}</CardText>
                    <CardText>{weekends}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
};

export default LocationDetail;