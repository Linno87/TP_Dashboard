import PropTypes from "prop-types";

export const TableItemMovies = ({movie : {id, title, rating, length, awards, genre}, handleEditMovie , handleDeleteMovie}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>{genre?.name}</td>
      <td>{awards}</td>
      <td>
        <div className="d-flex justify-content-around ">
          <button className="btn btn-sm btn-success">
              <i className="fas fa-eye"></i>
          </button>
          <button className="btn btn-sm btn-warning mx-1" onClick={() =>handleEditMovie(id)}>
              <i class="fa fa-edit"></i>
          </button>
          <button className="btn btn-sm btn-danger" onClick={()=>handleDeleteMovie(id)}>
              <i class="fa fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

TableItemMovies.propTypes = {
  movie: PropTypes.object,
  handleEditMovie: PropTypes.func,
  
  handleDeleteMovie: PropTypes.func
};

TableItemMovies.defaultProps = {
  genre: "No especifica",
};
