import React from "react";
import Slider from "react-slick";
import Card from "./Card/Card";
import "./Section.css";

export default function Section({ title, data, content }) {
  console.log(data);

  /* let content = "movie"; */
  return (
    <section className="Section">
      <h4>{title}</h4>

     {/*  <div className="Cards"> */}
     <Slider slidesToShow={3} slidesToScroll={3}>
        {data?.map((currentValue) => (
          <Card content={content} key={currentValue.id} movie={currentValue}/>
        ))}
      {/* </div> */}</Slider>
    </section>
  );
}
