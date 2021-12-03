import "./TvShow.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import tvShowsArray from "../../api/tvShows";

export default function TvShow() {
  const { tvShowId } = useParams();
  const [tvShowObject, setTvShowObject] = useState({});

  const [tvShowSeason, setTvShowSeason] = useState({});

  useEffect(() => {
    const getTvShow = tvShowsArray.find((item) => {
      return item.id === tvShowId;
    });
    setTvShowObject(getTvShow);
    setTvShowSeason(getTvShow.seasons[0]);
  }, [tvShowId]);

  return (
    <div>
      <h1>{tvShowObject?.title}</h1>

      <div className="TvShow">
        <div className="Seasons">
          {tvShowObject?.seasons?.map((currentValue) => {
            return (
              <div
                key={currentValue.id}
                className="Season"
                onClick={() => setTvShowSeason(currentValue)}
              >
                {currentValue.title}
              </div>
            );
          })}
        </div>

        <div>
          <div className="Episodes">
            {tvShowSeason?.episodes?.map((currentValue) => (
              <div key={currentValue.id} className="Episode">
                <Link to={`/tv-show-episode/${tvShowObject.id}/${tvShowSeason.id}/${currentValue.id}`}>
                  <img
                    className="EpisodeImage"
                    src={currentValue.image}
                    alt=""
                    width={200}
                  />
                </Link>
                <span>{currentValue.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
