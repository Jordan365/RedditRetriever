import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../Components/SearchBar/SearchBarSlice";

const store = configureStore({
    reducer: {
        searchBar: searchBarReducer
    }
})

export default store;