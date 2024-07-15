import React from 'react';
import lang from '../utils/LanguageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { useRef } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { addGptMoviesResult } from '../utils/gptSlice';

const GptBarSearch = () => {
    const dispatch = useDispatch();
    const language = useSelector((store) => store.config.lang);
    const searchText = useRef(null);


    const searchMovieTmdb = async(movie) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' + movie +'&include_adult=false&language=en-US&page=1',
             API_OPTIONS);
        const json = await data.json();
        console.log(json);
        return json.results;

    };

    const handleGptSearchClick = async() => {
        // console.log(searchText.current.value);
        if(!searchText.current.value) return null
        const gptQuery = 
            "You are a movie database. Based on the search text "
            + searchText.current.value +
            " list five movies, comma-separated. Example: Inception, Interstellar, The Matrix, Blade Runner 2049, Arrival.";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if(!gptResults.choices){
            console.log("error")
        }
        console.log(gptResults.choices?.[0]?.message?.content);
        // Inception, Interstellar, The Matrix, Blade Runner 2049, Arrival
        const gptMoviesList = gptResults.choices?.[0]?.message?.content.split(",");
        // [Inception, Interstellar, The Matrix, Blade Runner 2049, Arrival]

        const promiseArray  = gptMoviesList.map((movie) => searchMovieTmdb(movie));

        const tmdbResult = await Promise.all(promiseArray);

        console.log(tmdbResult);

        dispatch(addGptMoviesResult({movieNames: gptMoviesList, moviesResults: tmdbResult}));

        }
    return (
        <div className=' pt-[40%] md:pt-[10%] flex jsutify-center'>
                <form 
                onSubmit={(e) => e.preventDefault()}
                className='w-full md:w-1/2 bg-black grid grid-cols-12'>
                <input 
                ref={searchText}
                type='text' placeholder={lang[language].gptPlaceHolder}
                    className='p-4 m-4 col-span-9' />
                <button
                onClick={handleGptSearchClick}
                    className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
                    >
                    {lang[language].Search}
                </button>
                </form>
        </div>
    );
};

export default GptBarSearch
