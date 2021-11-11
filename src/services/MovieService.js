import Movie from "../models/Movie";

/**
 *
 * @param {number} page
 * @returns {Promise<Movie[]>}
 */
async function getPopularMovies(page = 1) {
    const result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f6473e4d474a28fd8ca9acd9b4409211&page=${page}`);
    const json = await result.json();
    const movies = json.results;
    return movies.map(movieDto =>
        new Movie(movieDto.id,
            movieDto.original_title,
            movieDto.overview,
            movieDto.release_date,
            `https://image.tmdb.org/t/p/w185${movieDto.poster_path}`)
    );
}

/**
 *
 * @param {string} query
 * @returns {Promise<Movie[]>}
 */
async function findMovies(query) {
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f6473e4d474a28fd8ca9acd9b4409211&query=${query}`);
    const json = await result.json();
    const movies = json.results;
    return movies.map(movieDto =>
        new Movie(movieDto.id,
            movieDto.original_title,
            movieDto.overview,
            movieDto.release_date,
            `https://image.tmdb.org/t/p/w185${movieDto.poster_path}`)
    );
}

/**
 *
 * @param {Movie} movie
 */
function addToWatchList(movie) {
    const watchList = getWatchList();
    if (!watchList.some(m => m.id === movie.id)) {
        watchList.push(movie);
        saveWatchList(watchList);
    }
}

/**
 *
 * @returns {Movie[]}
 */
function getWatchList() {
    return JSON.parse(localStorage.getItem('watchList')) ?? [];
}

/**
 *
 * @param {Movie[]} watchList
 */
function saveWatchList(watchList) {
    localStorage.setItem('watchList', JSON.stringify(watchList));
}

export {getPopularMovies, findMovies, addToWatchList, getWatchList};
