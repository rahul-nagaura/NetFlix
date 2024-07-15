import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addMoviesList } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieList = () => {
    const dispatch = useDispatch();

    const movieList = useSelector((state) => state.movies.movieList);
    const getMovieList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results);
        dispatch(addMoviesList(json.results));
    }

    useEffect(() => {
        !movieList && getMovieList();
    }, [])
}

export default useMovieList;