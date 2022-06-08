import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MenuDetail from '../features/menu/MenuDetail';
import MenuList from '../features/menu/MenuList';
import { selectDrinkById } from '../features/menu/drinksSlice';
import { selectPastryById } from '../features/pastries/pastriesSlice';

const MenuDirectoryPage = () => {
    const [menuId, setMenuId] = useState(0);
    const selectedMenu = selectDrinkById(menuId);
    const selectedPastry = selectPastryById(menuId);
    // const selectedMenu = selectedDrink.concat(selectedPastry);

    // console.log(selectedMenu.map(pastry => pastry))

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <MenuList setMenuId={setMenuId} />
                </Col>
                <Col sm='7' md='5'>
                    <MenuDetail menu={selectedMenu} />
                </Col>
            </Row>
        </Container>
    );
}

export default MenuDirectoryPage;