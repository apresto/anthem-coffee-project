import { Col, Row } from 'reactstrap';
import MenuCard from './MenuCard';
import { selectMenuItems } from './menuSlice';

const MenuList = ({ setMenuId }) => {
    const menu = selectMenuItems();

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