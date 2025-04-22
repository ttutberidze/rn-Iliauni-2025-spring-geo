import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const favoritesSlice = createSlice({
    name: 'Favorites',
    initialState,
    reducers: {
        toggle: (state, action) => {
            const movieIndex = state.movies.findIndex((movie) => movie.id === action.payload.movie.id)
            if(movieIndex !== -1) {
                state.movies.splice(movieIndex, 1)
            } else {
                state.movies.push(action.payload.movie)
            }
        }
    }
})

export const {toggle} = favoritesSlice.actions 
export default favoritesSlice.reducer