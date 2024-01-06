import { GenresItemInDb } from "./GenresItemInDb";

const data = [
  { id: crypto.randomUUID(),
	nombre : "Acción"},
  { id: crypto.randomUUID(),
	nombre : "Animación"},
  { id: crypto.randomUUID(),
	nombre : "Aventura"},
  { id: crypto.randomUUID(),
	nombre : "Ciencia Ficción"},
  { id: crypto.randomUUID(),
	nombre : "Comedia"},
  { id: crypto.randomUUID(),
	nombre : "Documental"},
  { id: crypto.randomUUID(),
	nombre : "Drama"},
  { id: crypto.randomUUID(),
	nombre : "Fantasía"},
  { id: crypto.randomUUID(),
	nombre : "Infantiles"},
  { id: crypto.randomUUID(),
	nombre : "Musical"},
];
export const GenresInDb = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {data.map(({id, nombre}) => (
              <GenresItemInDb key={id} nombre={nombre} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
