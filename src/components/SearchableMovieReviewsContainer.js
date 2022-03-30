import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
      super();
      this.state = {
        reviews: [],
        searchTerm: "",
      };
    }



    render() {
        return (
          <div className="searchable-movie-reviews">
            <div className="search-bar">
              <h1>Search</h1>
              <form onSubmit={this.sendSearch}>
                <input
                  className="form-control"
                  id="search-input"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.searchTerm}
                  placeholder="Search for a movie"
                />