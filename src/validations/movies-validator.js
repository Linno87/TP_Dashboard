export const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "El titulo es requerido";
  }

  if (!values.rating) {
    errors.rating = "No merece un podio?";
  } 
  if (!values.awards) {
    errors.awards = "Sin premios? Seguro no la recomiendo..";
  } 

  if (!values.length) {
    errors.length = "Olvidaste la duración";
  }

  if (!values.release_date) {
    errors.release_date = "Aún no fue creada?";
  }

  if (!values.genre_id) {
    errors.genre_id = "Seleccione un género";
  }

  return errors;
};
