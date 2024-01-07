import { ContentRowItemMovies } from "./ContentRowItemMovies";

const data = [
  {
    id: crypto.randomUUID(),
    color: "primary",
    title: " Movies in Data Base",
    value: 21,
    icon: "fa-film",
  },
  {
    id: crypto.randomUUID(),
    color: "success",
    title: "Total awards",
    value: 79,
    icon: "fa-award",
  },
  {
    id: crypto.randomUUID(),
    color: "warning",
    title: "Actors quantity",
    value: 49,
    icon: "fa-user",
  },
];

export const ContentRowMovies = () => {
  return (
    <div className="col-12">
    <div className="row ">
      {data.map(({color, title, value,icon, id}) => (
        <ContentRowItemMovies key={id} color={color} title={title} value={value} icon={icon} />
      ))}
    </div>
    </div>
  );
};
