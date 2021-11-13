import MovieCard from "./MovieCard";

/**
 *
 * @param props
 * @param {Movie[]} props.watchList
 * @param {(Movie) => void} props.onWatchedListAdd
 * @returns {JSX.Element}
 * @constructor
 */
function WatchList(props) {
    return (
        <div className="h-full">
            <div className="grid grid-cols-3 gap-4">
                {props.watchList.map(movie =>
                    <MovieCard key={movie.id} movie={movie}>
                        <div className="flex flex-col items-end">
                            <button className="bg-blue-100 p-1 pl-2 pr-2 rounded-md font-medium"
                                    onClick={() => props.onWatchedListAdd(movie)}>+ WATCHED</button>
                        </div>
                    </MovieCard>)}
            </div>
        </div>
    );
}

export default WatchList;
