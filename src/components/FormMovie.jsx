import PropTypes from "prop-types";

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
} from "react-bootstrap";
import { validate } from "../validations/movies-validator";

export const FormMovie = ({ handleAddMovie, movie, handleUpdateMovie, setMovie, handleDeleteMovie }) => {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    try {
      let response = await fetch(`${import.meta.env.VITE_API_URLBASE}/genres`);
      let result = await response.json();

      const genresArray = result.data.map(({ id, name }) => ({ id, name }));

      const genresOrder = genresArray.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );

      setGenres(genresOrder);

      return null;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  useEffect(() => {
    if (movie) {
      formik.setValues({
        title: movie.title,
        rating: movie.rating,
        awards: movie.awards,
        release_date: movie.release_date.split(`T`)[0],
        length: movie.length,
        genre_id: movie.genre?.id,
      });
    }
  }, [movie]);

  const handleReset = () =>{
    formik.resetForm()
    setMovie(null)
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      rating: 0,
      awards: 0,
      release_date: "",
      length: 0,
      genre_id: "",
    },
    validate,
    onSubmit: (values) => {
      /*  const data = new FormData()
            data.append("title",values.title)
            data.append("rating",values.rating)
            data.append("awards",values.awards)
            data.append("release_date",values.release_date)
            data.append("length",values.length)
            data.append("genre_id",values.genre_id)
 */   if (movie) {
        handleUpdateMovie(movie.id, values);
        
      } else {
        handleAddMovie(values);
      }

      formik.handleReset();
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agregar Pelicula</CardTitle>
      </CardHeader>
      <CardBody>
        <Form className="row" onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Titulo de la pelicula"
              className={formik.errors.title && "is-invalid"}
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title ? (
              <div className="text-danger ml-2">{formik.errors.title}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              className={formik.errors.rating && "is-invalid"}
              value={formik.values.rating}
              onChange={formik.handleChange}
            />
            {formik.errors.rating ? (
              <div className="text-danger ml-2">{formik.errors.rating}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Duración</Form.Label>
            <Form.Control
              type="number"
              name="length"
              className={formik.errors.length && "is-invalid"}
              value={formik.values.length}
              onChange={formik.handleChange}
            />
            {formik.errors.length ? (
              <div className="text-danger ml-2">{formik.errors.length}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Premios</Form.Label>
            <Form.Control
              type="number"
              name="awards"
              className={formik.errors.awards && "is-invalid"}
              value={formik.values.awards}
              onChange={formik.handleChange}
            />
            {formik.errors.awards ? (
              <div className="text-danger ml-2">{formik.errors.awards}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Fecha de estreno</Form.Label>
            <Form.Control
              type="date"
              name="release_date"
              className={formik.errors.release_date && "is-invalid"}
              value={formik.values.release_date}
              onChange={formik.handleChange}
            />
            {formik.errors.release_date ? (
              <div className="text-danger ml-2">
                {formik.errors.release_date}
              </div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Géneros</Form.Label>
            <Form.Select
              className={`form-control ${
                formik.errors.genre_id && "is-invalid"
              }`}
              name="genre_id"
              value={formik.values.genre_id}
              onChange={formik.handleChange}
            >
              <option hidden selected>
                Selecciona el género
              </option>
              {genres.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Form.Select>
            {formik.errors.genre_id ? (
              <div className="text-danger ml-2">{formik.errors.genre_id}</div>
            ) : null}
          </Form.Group>
          <div className="d-flex justify-content-between w-100">
            <Button
              type="button"
              onClick={handleReset}
              variant="outline-secondary"
              className="mt-5"
            >
              Cancelar
            </Button>
            <Button type="submit" variant="outline-dark" className="mt-5">
              Guardar
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

FormMovie.propTypes = {
  handleAddMovie: PropTypes.func,
  movie: PropTypes.object,
  handleUpdateMovie: PropTypes.func,
  setMovie: PropTypes.func,
};
