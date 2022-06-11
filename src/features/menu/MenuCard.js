import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

export const MenuCard = ({ menu }) => {
    const { image, name } = menu;

    return (
        <Card>
            <CardImg 
                width='100%' 
                src={image} 
                alt={name} 
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default MenuCard