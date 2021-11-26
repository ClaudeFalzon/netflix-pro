import "./TvShows.css";

import React from "react";
import Section from "../../Components/Section/Section";
import { actionTvShows, newTvShows } from "../../api/tvShows";

export default function TvShows() {
  return (
    <div>
      <Section title="New TV Shows" data={newTvShows} content="tv-show" />
      <Section title="Action TV Shows" data={actionTvShows} content="tv-show" />
    </div>
  );
}
