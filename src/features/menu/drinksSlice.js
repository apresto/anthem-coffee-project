import { DRINKS } from '../../app/shared/DRINKS';

export const selectAllDrinks = () => {
    return DRINKS
};

export const selectDrinkById = (id) => {
    return (
        DRINKS.find((drink) => drink.id === id)
    )
};