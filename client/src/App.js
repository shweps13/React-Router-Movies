import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  // const [movies, setMovies] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  
  return (
    <div>
      <SavedList list={savedList} />
      <div>
  <Route exact path="/" render={props => <MovieList {...props} component={MovieList} />} />

        <Route path="/movies/:id" render={props => <Movie {...props} component={Movie} />} />  
      

      </div>
    </div>
  );
};

export default App;
