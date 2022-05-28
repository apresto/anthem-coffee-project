import { Col, Row } from 'reactstrap';
import DrinkCard from './DrinkCard';
import { selectAllDrinks } from './drinksSlice';

const DrinksList = ({ setDrinkId }) => {
    const drinks = selectAllDrinks();

    return (
        <Row className="ms-auto">
            {drinks.map((drink) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={drink.id}
                        onClick={() => setDrinkId(drink.id)}
                    >
                        <DrinkCard drink={drink} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default DrinksList;