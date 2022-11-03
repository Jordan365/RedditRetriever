import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: "searchBar",
    initialState: "",
    reducers: {
        updateSearch: (state, action) => {
            return action.payload.value;
            
        }
    }
};

const searchSlice = createSlice(options);

export default searchSlice.reducer;
export const { updateSearch } = searchSlice.actions;
export const selectSearch = (state) => state.searchBar