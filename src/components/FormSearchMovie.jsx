import PropTypes from "prop-types";
import {  useState } from "react";

export const FormSearchMovie = ({apiCall}) => {

    const [formValues, setFormValues] = useState({})

    const handleInputChange = ({target})=>{
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        apiCall(`/api/v1/movies?keyword=${formValues.keyword}`)
        e.target.reset();
    }

  return (
    <form action="" className="d-flex align-items-center" onSubmit={handleSubmit}>
        <label htmlFor="">Buscar: </label>
      <div className="input-group mb-3">
        <input
          type="text"
          name="keyword"
          className="form-control ml-3"
          onChange={handleInputChange}
        />
        <button type="submit"  className="input-group-text " style={{cursor: "pointer"}} >
          <i class="fa fa-search"></i>
        </button >
      </div>
    </form>
  );
};

FormSearchMovie.propTypes = {
    apiCall : PropTypes.func
}