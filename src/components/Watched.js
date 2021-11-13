import MovieCard from "./MovieCard";

/**
 *
 * @param props
 * @param {Movie[]} props.watchedList
 * @returns {JSX.Element}
 * @constructor
 */
function Watched(props) {
    return (
        <div className="h-full">
            <div className="grid grid-cols-3 gap-4">
                {props.watchedList.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
}

export default Watched;
