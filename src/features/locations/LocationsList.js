import { Text } from 'react';
import { Col, Row } from 'reactstrap';
import LocationList from './LocationDetail';
import { selectAllLocations } from'./locationsSlice';

const LocationsList = () => {
    const locations = selectAllLocations();

    return (
        <Row className='ms-auto'>
            {locations.map((location) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={location.id}
                    >
                        <LocationList location={location} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default LocationsList;