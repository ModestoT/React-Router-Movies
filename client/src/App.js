import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    const movieTitles = this.state.savedList.map(movie => movie.title);

    if(!movieTitles.includes(movie.title)){
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path = "/" render={props => <MovieList {...props} addToSavedList={this.addToSavedList} />} />
        <Route path = "/movie/:id" render={props => <Movie {...props} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}
