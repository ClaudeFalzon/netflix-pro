import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moviesData from "../../api/movies";
import { Modal } from "react-bootstrap";
import "./Movie.css";

export default function Movie() {
  const { pageId } = useParams();
  // const [movieObject, setMovieObject] = useState({});
  const [movieObject, setMovieObject] = useState(null);

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    /** From React Docs:
  The function passed to useEffect will run after the render is committed to the screen.
*/
    const targetMovie = moviesData.find(
      (currentValue) => pageId === currentValue.id
    );
    setMovieObject(targetMovie);
    //console.log("targetMovie ==> ", targetMovie);
  }, [pageId]);

  /*   console.log("targetMovie outside ==> ", movieObject); */

  return movieObject ? (
    <div
      className="Movie"
      style={{ backgroundImage: `url(${movieObject.image})` }}
    >
      <h2>{movieObject.title}</h2>
      <p>{movieObject.description}</p>
      <span className="Play" onClick={() => setIsOpen(true)}>
        PLAY
      </span>

      <Modal
        onHide={() => setIsOpen(false)} /* to click outside hide */
        show={isOpen} /* to show modal when you press play */
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <iframe
          height="400"
          src={movieObject.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
    </div>
  ) : (
    <div>Loading....</div>
  );
}

// useParams() => { pageId : '????' }
