import React, { useEffect, useState } from "react";
import "./TvShowEpisode.css";
import { useParams } from "react-router-dom";
import tvShowsData from "../../api/tvShows";
/* import tvShows from "../../api/tvShows"; */
import { Modal } from "react-bootstrap";

export default function TvShowEpisode() {
  const { tvShowId, seasonId, episodeId } = useParams();

  const [tvShow, setTvShow] = useState({});
  const [season, setSeason] = useState({});
  const [episode, setEpisode] = useState({});

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const getTvShow = tvShowsData.find((item) => {
      return item.id === tvShowId;
    });

    setTvShow(getTvShow);

    const getSeason = getTvShow.seasons.find((el) => el.id === seasonId);
    setSeason(getSeason);

    const getEpisode = getSeason.episodes.find((el) => el.id === episodeId);

    setEpisode(getEpisode);
  }, [tvShowId, seasonId, episodeId]);

  return (
    <div
      className="TvShowEpisode"
      style={{ backgroundImage: `url(${tvShow.image})` }}
    >
      <h1>{tvShow.title}</h1>
      <h2>
        {season.title} - {episode.title}
      </h2>

      <div className="Play" onClick={() => setIsOpen(!isOpen)}>
        PLAY
      </div>

      <Modal
        onHide={() => setIsOpen(false)} /* to click outside hide */
        show={isOpen} /* to show modal when you press play */
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <iframe
          height="400"
          src={episode.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
    </div>
  );
}
