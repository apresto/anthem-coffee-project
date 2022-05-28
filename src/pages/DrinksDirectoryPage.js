import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DrinkDetail from '../features/drinks/DrinkDetail';
import DrinksList from '../features/drinks/DrinksList';
import { selectDrinkById } from '../features/drinks/drinksSlice';

const DrinksDirectoryPage = () => {
    const [drinkId, setDrinkId] = useState(0);
    const selectedDrink = selectDrinkById(drinkId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <DrinksList setDrinkId={setDrinkId} />
                </Col>
                <Col sm='7' md='5'>
                    <DrinkDetail drink={selectedDrink} />
                </Col>
            </Row>
        </Container>
    );
}

export default DrinksDirectoryPage;