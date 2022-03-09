import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-zinc-200 text-center md:flex md:justify-between py-5 px-20">
      <div className="font-bold text-2xl">
        <h2 className="md:mb-0 mb-5">
          <NavLink to="/">Prueba Técnica</NavLink>{" "}
        </h2>
      </div>
      <div className="flex gap-2 md:gap-5 text-xl font-thin">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/fibonacci">Fibonacci</NavLink>
        <NavLink to="/multiplos">Múltiplos</NavLink>
        <NavLink to="/movies">Películas</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
