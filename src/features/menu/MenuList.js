import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import MenuCard from './MenuCard';
import { selectAllItems } from './menuSlice';

const MenuList = () => {
    const menu = useSelector(selectAllItems);
    console.log('menu:', menu);

    return (
        <Row className="ms-auto justify-content-center">
            {menu.map((menu) => {
                return (
                    <Col 
                        md='5'
                        className='m-4'
                        key={menu.id}
                    >
                        <MenuCard menu={menu} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default MenuList;