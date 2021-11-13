/**
 *
 * @param {number} id
 * @param {string} name
 * @param {string} description
 * @param {string} year
 * @param {string} poster
 * @param {boolean} watched
 * @constructor
 */
function Movie(id, name, description, year, poster, watched = false) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.year = year;
    this.poster = poster;
    this.watched = watched;
}

export default Movie;
