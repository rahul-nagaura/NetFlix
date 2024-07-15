import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../Hooks/useTopRatedMOvies';
import GptSearch from './GptSearch';
import { showGptSearch } from '../utils/gptSlice.js'
import { useSelector } from 'react-redux';
import useUpcomingMovies from '../Hooks/useUpcomingMovies.js';
import useTvListMovies from '../Hooks/useTvLIstMovies.js';
import useMovieList from '../Hooks/useMovieList.js';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvListMovies();
  useMovieList();
  return (
    <div className=''>
      <Header />
      {
        showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
    </div>
  );
};

export default Browse
