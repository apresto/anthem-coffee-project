import { Col, Row } from 'reactstrap';
import MenuCard from './MenuCard';
import { selectAllDrinks } from './drinksSlice';
import { selectAllPastries } from './pastriesSlice';

const MenuList = ({ setMenuId }) => {
    const drinks = selectAllDrinks();
    const pastry = selectAllPastries();
    const menu = drinks.concat(pastry);

    return (
        <Row className="ms-auto">
            {menu.map((menu) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={menu.id}
                        onClick={() => setMenuId(menu.id)}
                    >
                        <MenuCard menu={menu} />
                        
                    </Col>
                )
            })}
        </Row>
    )
}

export default MenuList;