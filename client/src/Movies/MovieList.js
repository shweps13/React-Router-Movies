import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const MovieList = props => {
  const [movies, setMovies] = useState([])
  console.log(props);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
          // console.log("MovieList data", response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails {...props} key={movie.id} movie={movie} />
      ))}
    </div>
  );
}



function MovieDetails(props) {
  console.log(props);
  function moveToMovie (props) {
    console.log(props);
    props.history.push(`/movies/${props.movie.id}`)
  }
  return (
    // <div className="movie-card" key={props.movie.id}>
    <div onClick={() => moveToMovie(props)} className="movie-card" key={props.movie.id}>
      <Link to={`/movies/${props.movie.id}`}><h2>{props.movie.title}</h2></Link>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}


export default MovieList;
