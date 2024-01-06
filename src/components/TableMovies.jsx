import { Card, Table } from "react-bootstrap";
import { TableItemMovies } from "./TableItemMovies";

const movies = [
    {   id: crypto.randomUUID(),
        title: "Tarzan",
        length: 120,
        rating: 8,
        genres : ["Acción", "Comedia"],
        awards : 6
    },
    {
        id: crypto.randomUUID(),
        title: "Rambo",
        length: 110,
        rating: 10,
        genres : ["Ciencia Ficción", "Comedia"],
        awards : 10
    }
];

export const TableMovies = () => {
  return (
    <Card>
      <Card.Body>
        <Table striped>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Duración</th>
              <th>Rating</th>
              <th>Género</th>
              <th>Premios</th>
            </tr>
          </thead>
          <tbody>
            
               { movies.map(({ title, rating, length, awards, genres, id }) => 
                    <TableItemMovies key={id} title={title} rating={rating} length={length} awards={awards} genres={genres} />
                )
                }
            
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
