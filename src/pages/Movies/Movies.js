import "./Movies.css";

import React from "react";
import Section from "../../Components/Section/Section";

import {actionMovies, newMovies} from "../../api/movies"

export default function Movies() {
   return (
     <div>
       <Section title="Action movies" data={actionMovies}/>
       <Section title="New Movies" data={newMovies}/>

       
     </div>
   );
}
