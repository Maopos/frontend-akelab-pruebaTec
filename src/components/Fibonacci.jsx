import { useState } from "react";
import Message from "./Message";

const Fibonacci = () => {
  // States
  const [limit, setLimit] = useState("");
  const [serieState, setSerieState] = useState([]);

  // Errores
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([limit].includes("")) {
      setError(true);
      setMsg("Introduce un número...");
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    }

    if (limit <= 0) {
      setError(true);
      setMsg("Introduce un número mayor a cero...");
      setTimeout(() => {
        setError(false);
      }, 1500);
      setLimit("");
      return;
    }

    if (Number(limit) === 1) {
      setSerieState([1]);
    } else {
      let serie = [1, 1];
      for (let i = 2; i < limit; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
      }
      setSerieState(serie);
    }

    setLimit("");
  };

  return (
    <div className="mt-20 md:w-1/2 md:mx-auto">
      <h2 className="font-semibold text-3xl text-center">Serie Fibonacci</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded pt-10 px-5"
      >
        {error && <Message msg={msg} />}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-normal">
            Introduce un número.
          </label>
          <input
            id="name"
            type="number"
            placeholder="Solo se aceptan números enteros positivos..."
            className="border-2 border-gray-500 p-2 w-full mt-2 placeholder-stone-400 rounded"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-blue-700 rounded text-center w-full p-2 hover:bg-blue-600 cursor-pointer transition-all text-white"
          value={"Vamos!"}
        />
        <input
          type="button"
          className="bg-blue-700 rounded text-center w-full mt-5 p-2 hover:bg-blue-600 cursor-pointer transition-all text-white"
          value={"Reset"}
          onClick={() => setSerieState([])}
        />
        <p className="text-center mt-5">
          {serieState.length > 0
            ? `Resultado.`
            : `Aqui se mostrará el resultado.`}
        </p>
        <div className="flex">
          <div className="my-5">
            {serieState.map((i, j) => (
              <p key={j} className="inline w-2">
                {i} -{" "}
              </p>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Fibonacci;
