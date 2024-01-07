import { Card, Pagination, Table } from "react-bootstrap";
import { TableItemMovies } from "../components/TableItemMovies";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Paginator } from "../components/Paginator";
import { FormSearchMovie } from "../components/FormSearchMovie";

export const MoviesListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});

  const apiCall = async (endpoint = "/api/v1/movies") => {
    const response = await fetch(`http://localhost:3001${endpoint}`);
    const result = await response.json();
    setLoading(false);
    setMovies(result.data);
    setPagination(result.meta);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Lista de Películas</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <FormSearchMovie />
              <Paginator pagination={pagination} apiCall={apiCall} />
            </div>
            <Table striped>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Duración</th>
                  <th>Rating</th>
                  <th>Género</th>
                  <th>Premios</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {movies.map(({ title, rating, length, awards, genre, id }) => (
                  <TableItemMovies
                    key={id}
                    title={title}
                    rating={rating}
                    length={length}
                    awards={awards}
                    genre={genre}
                  />
                ))}
              </tbody>
            </Table>
            <Paginator pagination={pagination} apiCall={apiCall} />
          </Card.Body>
        </Card>
      )}
    </>
  );
};
