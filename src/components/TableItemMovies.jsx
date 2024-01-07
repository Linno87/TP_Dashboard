import PropTypes from "prop-types";

export const TableItemMovies = ({ title, rating, length, awards, genre }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>{genre?.name}</td>
      <td>{awards}</td>
      <td>
        <div className="d-flex justify-content-between gap-2">
          <button className="btn btn-sm btn-success">
              <i className="fas fa-eye"></i>
          </button>
          <button className="btn btn-sm btn-warning">
              <i class="fa fa-edit"></i>
          </button>
          <button className="btn btn-sm btn-danger">
              <i class="fa fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

TableItemMovies.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  length: PropTypes.number,
  awards: PropTypes.number,
  genre: PropTypes.object,
};

TableItemMovies.defaultProps = {
  genre: "No especifica",
};
