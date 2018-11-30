import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IMovie} from "../../interface/IMovie";



@Injectable()
export class ConstructImovieProvider {
  constructor(public http: HttpClient) {
  }

  constructIMovie(movie) : IMovie{
    let bjtlefilm : IMovie = {
      title: movie.Title,
      id : movie.imdbID,
      poster: movie.Poster,
      language: movie.Language,
      imdbRating:movie.imdbRating,
      imdbVotes : movie.imdbVotes,
      imdbID : movie.imdbID,
      year: movie.Year
    };

    return bjtlefilm;
  }

}
