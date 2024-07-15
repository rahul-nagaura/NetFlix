import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieNames: null,
    },
    reducers: {
        toggleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult:(state,action) => {
            const { movieNames, movieResults } = action.payload;
            state.gptMovies = action.payload;
            state.movieResults = movieResults;
        }
    }
});


export const { toggleGptSearchView, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;

