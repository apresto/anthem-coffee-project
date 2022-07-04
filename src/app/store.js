import { configureStore } from '@reduxjs/toolkit';
import { menuReducer, drinksReducer, pastriesReducer } from '../features/menu/menuSlice';
import { locationsReducer } from '../features/locations/locationsSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    drinks: drinksReducer,
    pastries: pastriesReducer,
    locations: locationsReducer
  },
});
