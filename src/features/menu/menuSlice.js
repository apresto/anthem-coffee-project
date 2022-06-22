import { createSlice } from '@reduxjs/toolkit';
import { DRINKS } from '../../app/shared/DRINKS';
import { PASTRIES } from '../../app/shared/PASTRIES';

const MENU = DRINKS.concat(PASTRIES);

const initialState = {
    menuArray: MENU
};

const menuSlice = createSlice({
    name: 'menu',
    initialState
});

export const menuReducer = menuSlice.reducer;

export const selectAllItems = (state) => {
    return state.menu.menuArray;
};

export const selectItemById = (id) => (state) => {
    return state.menu.menuArray.find(
        (item) => item.id === parseInt(id)
    );
};

// export const selectFeaturedMenu = (state) => {
//     return state.menu.menuArray.find((item) => item.featured);
// };