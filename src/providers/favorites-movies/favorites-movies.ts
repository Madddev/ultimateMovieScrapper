import {Injectable} from '@angular/core';
import { Storage } from "@ionic/storage";
import {IMovie} from "../../interface/IMovie";
const MOVIE_KEY = "movie_";

@Injectable()
export class FavoritesMoviesProvider {

  constructor(private storage : Storage) {
  }
  addFavoriteMovie(movie: IMovie) {
    return this.storage.set(this.getMovieKey(movie), JSON.stringify(movie));
  }

  removeFavoriteMovie(movie: IMovie) {
    this.storage.remove(this.getMovieKey(movie));
  }

  isFavortieMovie(movie: IMovie) {
    return this.storage.get(this.getMovieKey(movie));
  }

  toogleFavoriteMovie(movie: IMovie) {
    this.isFavortieMovie(movie).then(
      isFavorite =>
        isFavorite
          ? this.removeFavoriteMovie(movie)
          : this.addFavoriteMovie(movie)
    );
  }

  getMovieKey(movie) {
    return MOVIE_KEY + movie.id.toString();
  }

  getFavoriteMovies() {
    let resultsPromise: Array<any> = [];
    return this.storage
      .keys()
      .then(keys => {
          keys
            .filter(key => key.includes(MOVIE_KEY))
            .forEach(key =>
              resultsPromise.push(this.storage.get(key).then(data => JSON.parse(data)))
            );
          return Promise.all(resultsPromise);
        }
      );
  }

}
