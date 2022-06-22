import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import LocationDetail from './LocationDetail';
import { selectAllLocations } from './locationsSlice';

const LocationsList = () => {
    const locations = useSelector(selectAllLocations);
    console.log('locations:', locations)

    return (
        <Row className='ms-auto'>
            {locations.map((location) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={location.id}
                    >
                        <LocationDetail location={location} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default LocationsList;