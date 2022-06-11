import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MenuDetail from '../features/menu/MenuDetail';
import MenuList from '../features/menu/MenuList';
import { selectItemById } from '../features/menu/menuSlice';

const MenuDirectoryPage = () => {
    const [menuId, setMenuId] = useState(0);
    const selectedMenu = selectItemById(menuId);

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