import { PASTRIES } from '../../app/shared/PASTRIES';

export const selectAllPastries = () => {
    return PASTRIES;
};

export const selectPastryById = (id) => {
    return (
        PASTRIES.find((pastry) => pastry.id === id)
    )
};