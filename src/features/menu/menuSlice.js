import { DRINKS } from '../../app/shared/DRINKS';
import { PASTRIES } from '../../app/shared/PASTRIES';

const menu = DRINKS.concat(PASTRIES);

export const selectMenuItems = () => {
    return menu
};

export const selectItemById = (id) => {
    return (
        menu.find((item) => item.id === id)
    )
};