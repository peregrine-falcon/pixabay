import { configureStore } from '@reduxjs/toolkit';
import pixbayReducer from './picSlice';
import searchReducer from './searchSlice';

const appStore = configureStore({
    reducer: {
        pixbay: pixbayReducer,
        search: searchReducer,
    },
})

export default appStore;