import vanillaDirtyChai from '../assets/images/van-dirty-chai.jpg';
import caramelMacchiato from '../assets/images/caramel-macchiato.jpg';
import icedMocha from '../assets/images/iced-mocha.jpg';
import icedAmericano from '../assets/images/iced-americano.jpg';
import whiteCaramelMocha from '../assets/images/white-caramel-mocha.jpg';

export const DRINKS = [
    {
        id: 0,
        name: "Vanilla Dirty Chai",
        image: vanillaDirtyChai,
        price: "$4.20",
        featured: false,
        description: 'vanilla or spicy chai + espresso + steamed milk'
    },
    {
        id: 1,
        name: 'Caramel Macchiato',
        image: caramelMacchiato,
        price: '$4.20',
        featured: false,
        description: 'steamed milk + vanilla marked by espresso + caramel'
    },
    {
        id: 2,
        name: 'Iced Mocha',
        image: icedMocha,
        price: '$5.15',
        featured: false,
        description: 'espresso + chocolate + milk'
    },
    {
        id: 3,
        name: 'Iced Americano',
        image: icedAmericano,
        price: '$3.55',
        featured: false,
        description: 'espresso + water'
    },
    {
        id: 4,
        name: 'White Caramel Mocha',
        image: whiteCaramelMocha,
        price: '$4.50',
        featured: true,
        description: 'white chocolate + caramel + espresso + milk'
    }
]