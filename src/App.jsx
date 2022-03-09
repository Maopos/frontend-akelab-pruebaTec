import Home from "./components/Home";
import Navbar from "./Navbar";

import Fibonacci from "./components/Fibonacci";
import Multiplos from './components/Multiplos';
import Movies from './components/movies/Movies';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/multiplos" element={<Multiplos />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
};

export default App;
