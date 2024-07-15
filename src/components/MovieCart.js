import React from 'react';
import { IMAGE_CDN } from '../utils/constant';

const MovieCart = ({posterPath}) => {
  return (
    <div className="w-36 md:w-48 pr-4 hover:w-52">
      
      <img 
      className='rounded-md m-2 hover:border border-white'
        alt='Movie Card'
        src={IMAGE_CDN + posterPath } />
    </div>
  )
}

export default MovieCart
