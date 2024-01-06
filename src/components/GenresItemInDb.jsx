import PropTypes from "prop-types";

export const GenresItemInDb = ({nombre}) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{nombre}</div>
      </div>
    </div>
  );
};

GenresItemInDb.propTypes = {
    nombre : PropTypes.string
}

GenresItemInDb.defaultProps = {
    nombre : "No definido"
}
