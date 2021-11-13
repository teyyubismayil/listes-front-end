import WatchList from "../components/WatchList";
import Discover from "../components/Discover";
import Sidebar from "../components/Sidebar";
import Watched from "../components/Watched";
import {useEffect, useState} from "react";
import {addToWatchList, addToWatchedList, getWatchList, getWatchedList} from "../services/MovieService";

const WATCH_LIST = 1;
const DISCOVER = 2;
const WATCHED = 3;

function Home() {
    const [currentComponent, setCurrentComponent] = useState(WATCH_LIST);
    const [watchList, setWatchList] = useState([]);
    const [watchedList, setWatchedList] = useState([]);

    useEffect(() => {
        setWatchList(getWatchList());
        setWatchedList(getWatchedList());
    }, []);

    const navigate = (component) => {
      if (currentComponent !== component) {
          setCurrentComponent(component);
      }
    };

    /**
     *
     * @param {Movie} movie
     */
    const onWatchListAdd = (movie) => {
        addToWatchList(movie);
        setWatchList(getWatchList());
    };

    /**
     *
     * @param {Movie} movie
     */
    const onWatchedListAdd = (movie) => {
        addToWatchedList(movie)
        setWatchList(getWatchList());
        setWatchedList(getWatchedList());
    };

    return (
        <div className="grid grid-cols-6 h-full">
            <aside className="col-span-1 border-r-2 h-full">
                <Sidebar />
            </aside>
            <div className="col-span-5 p-5">
                <nav>
                    <button
                        className={`font-bold ${currentComponent !== WATCH_LIST ? 'text-gray-400' : ''}`}
                        onClick={() => navigate(WATCH_LIST)}>Watch List</button>
                    <button
                        className={`m-6 font-bold ${currentComponent !== DISCOVER ? 'text-gray-400' : ''}`}
                        onClick={() => navigate(DISCOVER)}>Discover</button>
                    <button
                        className={`font-bold ${currentComponent !== WATCHED ? 'text-gray-400' : ''}`}
                        onClick={() => navigate(WATCHED)}>Watched</button>
                </nav>
                <main>
                    <div className={currentComponent !== WATCH_LIST ? 'hidden' : ''}>
                        <WatchList watchList={watchList} onWatchedListAdd={movie => onWatchedListAdd(movie)} />
                    </div>
                    <div className={currentComponent !== DISCOVER ? 'hidden' : ''}>
                        <Discover onWatchListAdd={movie => onWatchListAdd(movie)} />
                    </div>
                    <div className={currentComponent !== WATCHED ? 'hidden' : ''}>
                        <Watched watchedList={watchedList} />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;
