import { useSelector } from 'react-redux';
import { Container, Row, } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectItemById } from '../features/menu/menuSlice';
import MenuDetail from '../features/menu/MenuDetail';

const MenuDetailPage = () => {
    const { itemId } = useParams();
    const menu = useSelector(selectItemById(itemId));
    console.log('menu:', menu);

    return (
        <Container>
            <Row>
                <MenuDetail menu={menu} />
            </Row>
        </Container>
    )
}

export default MenuDetailPage;