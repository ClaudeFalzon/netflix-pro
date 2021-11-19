import "./Home.css";
import React from "react";
import Section from "../../Components/Section/Section";
import { actionMovies, newMovies } from "../../api/movies";

export default function Home() {
  return (
    <div>
      <Section title="Action movies" data={actionMovies} />
      <Section title="New Movies" data={newMovies} />
      <Section title="New TV Shows" />
      <Section title="Action TV Shows" />
    </div>
  );
}
