import { Col, Row } from 'reactstrap';
import PastryCard from './PastryCard';
import { selectAllPastries } from './pastriesSlice';

const pastriesList = ({ setPastriesId }) => {
    const pastries = selectAllPastries();

    return (
        <Row className="ms-auto">
            {pastries.map((pastry) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={pastry.id}
                        onClick={() => setPastriesId(pastry.id)}
                    >
                        <PastryCard pastry={pastry} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default pastriesList;