import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedDrinks, selectFeaturedPastry } from '../menu/menuSlice';
import { selectFeaturedLocations } from '../locations/locationsSlice';

const DisplayList = () => {
    const featured = useSelector((state) => [
        selectFeaturedLocations(state),
        selectFeaturedDrinks(state),
        selectFeaturedPastry(state)
    ]);
    console.log('featured:', featured);

    return (
        <Row className="w-100 justify-content-center">
            {featured.map((item, idx) => {
                return (
                    <Col
                        md='3'
                        className='m-4'
                        key={idx}
                    >
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;