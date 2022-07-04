import { createSlice } from '@reduxjs/toolkit';
import { DRINKS } from '../../app/shared/DRINKS';
import { PASTRIES } from '../../app/shared/PASTRIES';

const MENU = DRINKS.concat(PASTRIES);

const initialState = {
    menuArray: MENU,
    drinksArray: DRINKS,
    pastriesArray: PASTRIES
};

const menuSlice = createSlice({
    name: 'menu',
    initialState
});

const drinksSlice = createSlice({
    name: 'drinks',
    initialState
});

const pastriesSlice = createSlice({
    name: 'pastries',
    initialState
});

export const menuReducer = menuSlice.reducer;
export const drinksReducer = drinksSlice.reducer;
export const pastriesReducer = pastriesSlice.reducer;

export const selectAllItems = (state) => {
    return state.menu.menuArray;
};

export const selectItemById = (id) => (state) => {
    return state.menu.menuArray.find (
        (item) => item.id === parseInt(id)
    );
};

export const selectFeaturedDrinks = (state) => {
    return state.drinks.drinksArray.find (
        (item => item.featured)
    );
    
};

export const selectFeaturedPastry = (state) => {
    return state.pastries.pastriesArray.find (
        (item => item.featured)
    );

};