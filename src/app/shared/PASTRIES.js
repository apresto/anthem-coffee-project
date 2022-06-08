import breakfastCookie from '../assets/images/breakfast-cookie.jpg';
import chocolateCroissant from '../assets/images/chocolate-croissant.jpg';
import cinnamonRoll from '../assets/images/cinnamon-roll.jpg';

export const PASTRIES = [
    {
        id: 5,
        name: 'Breakfast Cookie',
        image: breakfastCookie,
        price: '$4.00',
        featured: true,
        description: 'Anthem\'s signature cookie with oats, peanut butter and chocolate chips'
    },
    {
        id: 6,
        name: 'Chocolate Croissant',
        image: chocolateCroissant,
        price: '$3.25',
        featured: false,
        description: 'chocolate filled croissant topped with powdered sugar'
    },
    {
        id: 7,
        name: 'Cinnamon Roll w/Vanilla Bean Glaze',
        image: cinnamonRoll,
        price: '$4.00',
        featured: false,
        description: 'Fresh cinnamon roll with Vanilla Bean Glaze on top'
    }
]