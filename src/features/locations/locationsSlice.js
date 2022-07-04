import { createSlice } from '@reduxjs/toolkit';
import { LOCATIONS } from '../../app/shared/LOCATIONS';

const initialState = {
    locationsArray: LOCATIONS
};

const locationsSlice = createSlice({
    name: 'locations',
    initialState
});

export const locationsReducer = locationsSlice.reducer;

export const selectAllLocations = (state) => {
    return state.locations.locationsArray;
};

export const selectFeaturedLocations = (state) => {
    return state.locations.locationsArray.find((location) => location.featured);
};