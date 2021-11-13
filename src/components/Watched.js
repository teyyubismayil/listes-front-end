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
                {props.watchedList.map(movie =>
                    <MovieCard key={movie.id} movie={movie}>
                        <div className="flex flex-col items-end">
                            <button className="bg-gray-100 p-1 pl-2 pr-2 rounded-md font-medium" disabled={true}>
                                WATCHED
                            </button>
                        </div>
                    </MovieCard>)}
            </div>
        </div>
    );
}

export default Watched;
