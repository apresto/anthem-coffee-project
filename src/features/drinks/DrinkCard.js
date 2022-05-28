import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const DrinkCard = ({ drink }) => {
    const { image, name } = drink;
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

export default DrinkCard;