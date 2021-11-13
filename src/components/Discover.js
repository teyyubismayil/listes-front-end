import {findMovies, getPopularMovies} from "../services/MovieService";
import MovieCard from "./MovieCard";
import {useEffect, useState} from "react";

/**
 *
 * @param props
 * @param {(Movie) => void} props.onWatchListAdd
 * @param {Map<number, boolean>} props.movieToWatched
 * @param {(Movie) => void} props.onWatchedListAdd
 * @returns {JSX.Element}
 * @constructor
 */
function Discover(props) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        getPopularMovies().then(movies => setPopularMovies(movies));
    }, []);

    useEffect(() => {
        if (query !== '') {
            findMovies(query).then(movies => setSearchedMovies(movies));
        }
    }, [query]);

    return (
        <div>
            <input className="w-full shadow appearance-none border
             rounded w-full py-2 px-3 text-gray-700 rounded-xl
             leading-tight focus:outline-none focus:shadow-outline"
                   type="text"
                   placeholder="Search"
                   onKeyUp={(e) => setQuery(e.target.value)}
            />
            {query === '' && <p className="text-xl font-medium mt-5 mb-5">Popular movies</p>}
            <div className="grid grid-cols-3 gap-4">
                {(query === '' ? popularMovies: searchedMovies).map(movie =>
                    <MovieCard key={movie.id} movie={movie}>
                        <div className="flex flex-col items-end">
                            <button className={`p-1 pl-2 pr-2 rounded-md font-medium 
                                                ${props.movieToWatched.get(movie.id) ? 'bg-gray-100' : 'bg-blue-100'}`}
                                    disabled={props.movieToWatched.get(movie.id)}
                                    onClick={() => props.movieToWatched.has(movie.id)
                                        ? props.onWatchedListAdd(movie)
                                        : props.onWatchListAdd(movie)}
                            >
                                {props.movieToWatched.has(movie.id)
                                    ? (props.movieToWatched.get(movie.id) ? 'WATCHED' : '+ WATCHED')
                                    : '+ WATCHLIST'}
                            </button>
                        </div>
                    </MovieCard>)}
            </div>
        </div>
    );
}

export default Discover;
