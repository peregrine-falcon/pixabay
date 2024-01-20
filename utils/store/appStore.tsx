import { configureStore } from '@reduxjs/toolkit';
import pixbayReducer from './picSlice';

const appStore = configureStore({
    reducer: {
        pixbay: pixbayReducer,
    },
})

export default appStore;