import Stars from "./Stars";

const MovieItem = ({ item, genero }) => {
  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      year: "numeric",
    };
    return nuevaFecha.toLocaleString("es-ES", opciones);
  };

  const generos = [];

  for (const i of genero) {
    for (const j of item.genre_ids) {
      if (i.id === j) {
        generos.push(i.name);
      }
    }
  }

  return (
    <div className="border border-gray-600 w-full md:w-96 rounded-lg md:inline-flex flex flex-col m-2 shadow-xl p-2 h-96">
      <div className="max-w-full h-14 pt-2">
        <h3 className="font-semibold ml-1">
          {item.title} ({formatearFecha(item.release_date)})
        </h3>
      </div>
      <div className="flex flex-row px-1 pt-3">
        <div className="w-1/2">
          <img
            src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
            alt="poster"
          />
        </div>
        <div className="w-1/2 pl-3 pr-1">
          <div className="h-44 max-h-46 overflow-y-auto">
            <p className="text-justify" style={{ fontSize: "9px" }}>
              {item.overview}
            </p>
          </div>
          <div style={{ fontSize: "10px" }} className="realative mt-0">
            <p className="mt-3">
              Titulo: <span className="font-thin">{item.title}</span>
            </p>
            <div className="flex">
              <p className="mr-1">
                Calificación:{" "}
                <span className="font-thin">{item.vote_average}</span>
              </p>
              <Stars stars={item.vote_average} />
            </div>
            <p>
              Género:{" "}
              <span className="font-thin">{generos.map((i) => i + " ")}</span>
            </p>
            <p>
              Fecha de realización:{" "}
              <span className="font-thin">{item.release_date}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
