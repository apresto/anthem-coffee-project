import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const PastryCard = ({ pastry }) => {
    const { image, name } = pastry;
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

export default PastryCard;