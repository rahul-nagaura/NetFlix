import React from 'react'
import GptBarSearch from './GptBarSearch';
import GptMoviesSuggestion from './GptMoviesSuggestion';
import { HOME_IMG } from '../utils/constant.js';

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10 h-screen w-full'>
        <img className='w-full h-full object-cover' src={HOME_IMG}
          alt="background" />
      </div>
      <div className=''>

        <GptBarSearch />
        <GptMoviesSuggestion />
      </div>
    </>

  )
}

export default GptSearch;
