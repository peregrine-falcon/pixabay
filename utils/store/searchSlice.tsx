import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchItems: null,
    },
    reducers: {
        searchItemData: (state, action) => {
            state.searchItems = action.payload;
        },
    },
});

export const { searchItemData } = searchSlice.actions;
export default searchSlice.reducer;