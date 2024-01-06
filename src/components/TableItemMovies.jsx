import PropTypes from "prop-types";

export const TableItemMovies = ({ title, rating, length, awards, genres }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>
        <ul>
          {genres.length
            ? genres.map((genre, index) => <li key={index}>{genre}</li>)
            : "No especifica"}
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  );
};

TableItemMovies.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  length: PropTypes.number,
  awards: PropTypes.number,
  genres: PropTypes.array,
};

TableItemMovies.defaultProps = {
  genres: [],
};
