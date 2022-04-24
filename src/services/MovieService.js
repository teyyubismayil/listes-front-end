import Movie from "../models/Movie";

/**
 *
 * @param {number} page
 * @returns {Promise<Movie[]>}
 */
async function getPopularMovies(page = 1) {
    const result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&page=${page}`);
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
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=API_KEY&query=${query}`);
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
    const movieList = getMovieList();
    if (!movieList.some(m => m.id === movie.id)) {
        movieList.push(movie);
        saveMovieList(movieList);
    }
}

/**
 *
 * @param {Movie} movie
 */
function addToWatchedList(movie) {
    const movieList = getMovieList();
    const savedMovie = movieList.find(m => m.id === movie.id);
    savedMovie.watched = true;
    saveMovieList(movieList);
}

/**
 *
 * @returns {Movie[]}
 */
function getMovieList() {
    return JSON.parse(localStorage.getItem('movieList')) ?? [];
}

/**
 *
 * @returns {Movie[]}
 */
function getWatchList() {
    const movieList = getMovieList();
    return movieList.filter(m => !m.watched);
}

/**
 *
 * @returns {Movie[]}
 */
function getWatchedList() {
    const movieList = getMovieList();
    return movieList.filter(m => m.watched);
}

/**
 *
 * @param {Movie[]} movieList
 */
function saveMovieList(movieList) {
    localStorage.setItem('movieList', JSON.stringify(movieList));
}

export {getPopularMovies, findMovies, addToWatchList, addToWatchedList, getWatchedList, getWatchList};
