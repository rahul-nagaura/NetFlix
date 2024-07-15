import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        trailerVideo: null,
        topRatedMovies: null,
        upcomingMovies: null,
        tvListMovies: null,
        movieList: null,
    },
    reducers: {
        addNowPlayingMovies : (state,action ) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action ) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action ) => {
            state.topRatedMovies = action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTvListMovies: (state, action) => {
            state.tvListMovies = action.payload;
        },
        addMoviesList: (state, action ) => {
            state.movieList = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTvListMovies, addMoviesList} = moviesSlice.actions;

export default moviesSlice.reducer;