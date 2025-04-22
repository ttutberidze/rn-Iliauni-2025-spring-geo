import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './slices/favoritesSlice'

const store = configureStore({
    reducer: {
        favorites: favoriteReducer
    }
})

export default store;