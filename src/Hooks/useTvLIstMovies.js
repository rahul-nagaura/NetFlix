import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant";
import { addTvListMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTvListMovies = () => {
    const dispatch = useDispatch();

    const tvListMovies = useSelector((store) => store.movies.tvListMovies);
    const getTvListMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTvListMovies(json.results));
    }

    useEffect(() => {
        !tvListMovies && getTvListMovies();
    },[]);
}

export default useTvListMovies;