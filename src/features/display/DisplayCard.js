import { Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';

export const DisplayCard = ({ item }) => {
    const { image, name } = item;

    return (
        <Col md='12' className='m-2'>
            <Card body className='w-100 w-md-50'>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DisplayCard;