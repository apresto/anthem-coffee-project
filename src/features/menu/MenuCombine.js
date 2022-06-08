import { selectAllDrinks } from './drinksSlice';
import { selectAllPastries } from './pastriesSlice';

const MenuCombine = () => {
    const drinks = selectAllDrinks();
    const pastry = selectAllPastries();
    const menu = drinks.concat(pastry);
}

export default MenuCombine;