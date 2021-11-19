import { Fragment } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
/* import Section from "./Components/Section/Section"; */

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/TvShows/TvShows";
import NotFound from "./pages/NotFound/NotFound";
import Movie from "./pages/Movie/Movie";

function App() {
  return (
    <>
      <Navbar />

      <main className="Container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movie/:pageId" element={<Movie/>}/>
          <Route path="/tv-shows" element={<TvShows/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
