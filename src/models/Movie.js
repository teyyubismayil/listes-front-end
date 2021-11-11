/**
 *
 * @param {number} id
 * @param {string} name
 * @param {string} description
 * @param {string} year
 * @param {string} poster
 * @constructor
 */
function Movie(id, name, description, year, poster) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.year = year;
    this.poster = poster;
}

export default Movie;
