import { legacy_createStore as createStore } from 'redux';
import { basketSlice } from './reducer';
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
    reducer:basketSlice.reducer
});