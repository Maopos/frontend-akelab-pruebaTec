import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieItem from "./MovieItem";
import DropDown from "./DropDown";
import { useState } from "react";
import Sort from "./Sort";

const List = () => {
  // States
  const [genreFilter, setGenreFilter] = useState("");
  const [byGenre, setByGenre] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  const { data, genero, error, loading } = useFetch(
    "http://localhost:4000/data"
  );

  if (loading) {
    return <h2 className="text-4xl">Loading...</h2>;
  }

  if (error !== "") {
    return <h1>{error}</h1>;
  }

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  const result = [];

  const filterByGenre = (id) => {
    if (id === 0) {
      setByGenre(data);
    } else {
      for (const i of data) {
        for (const j of i.genre_ids) {
          if (j === id) {
            result.push(i);
          }
        }
      }
      setByGenre(result);
    }
  };

  return (
    <div className="">
      <div className="md:flex py-3 px-5 md:px-40 gap-5 mt-5">
        <h3 className="font-thin text-2xl">Peliculas </h3>
        <input
          type="text"
          className="rounded p-1 w-96 md:w-1/3 border-black border "
          value={searchParams.get("filter") || ""}
          onChange={handleChange}
        />
        <DropDown
          genero={genero}
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          filterByGenre={filterByGenre}
        />
        <p className="text-xl font-thin mb-2">|</p>
        <Sort />
      </div>
      <div className="md:px-24 ">
        {genreFilter ? (
          <div>
            <p>
              Género: <span className="font-light">{genreFilter}</span>
            </p>
            {byGenre.map((i, j) => (
              <MovieItem key={i.id} item={i} genero={genero}></MovieItem>
            ))}
          </div>
        ) : (
          data
            .filter((item) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = item.title.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((i, j) => (
              <MovieItem key={i.id} item={i} genero={genero}></MovieItem>
            ))
        )}
      </div>
    </div>
  );
};

export default List;
