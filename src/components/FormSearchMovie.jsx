export const FormSearchMovie = () => {
  return (
    <form action="" className="d-flex align-items-center">
        <label htmlFor="">Buscar: </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control ml-3"
        />
        <span className="input-group-text " style={{cursor: "pointer"}} id="basic-addon2">
          <i class="fa fa-search"></i>
        </span>
      </div>
    </form>
  );
};
