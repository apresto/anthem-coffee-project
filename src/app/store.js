import { configureStore } from '@reduxjs/toolkit';
import { menuReducer } from '../features/menu/menuSlice';
import { locationsReducer } from '../features/locations/locationsSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    locations: locationsReducer
  },
});
