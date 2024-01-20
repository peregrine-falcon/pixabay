import { createSlice } from "@reduxjs/toolkit";

const picSlice = createSlice({
    name: "pixbay",
    initialState: {
        pixbayResults: null,
    },
    reducers: {
        setPixbayData: (state, action) => {
            state.pixbayResults = action.payload;
        },
    },
});

export const { setPixbayData } = picSlice.actions;
export default picSlice.reducer;