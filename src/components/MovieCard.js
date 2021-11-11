/**
 *
 * @param props
 * @param {Movie} props.movie
 * @returns {JSX.Element}
 * @constructor
 */
function MovieCard(props) {
    return (
        <div className="grid grid-cols-4 rounded-xl shadow-lg overflow-hidden p-2">
            <div>
                <img className="align-middle rounded-xl"
                     src={props.movie.poster}
                     alt="Poster"/>
            </div>
            <div className="flex flex-col justify-around col-span-3 ml-2">
                <div className="mb-1">
                    <p className="text-lg font-bold">{props.movie.name}</p>
                    <p className="text-xs mt-1 mb-1">{props.movie.year}</p>
                    <p className="text-sm">{props.movie.description}</p>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default MovieCard;
