import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieDetailPage} from "../movie-detail/movie-detail";
import {IMovie} from "../../interface/IMovie";
import {FavoritesMoviesProvider} from "../../providers/favorites-movies/favorites-movies";



@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favoriteMovies: any ;
  constructor(public navCtrl: NavController,
              public favoritesMovieProvider : FavoritesMoviesProvider ,
              public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.initFavoriteMovies();
  }

  private initFavoriteMovies() {
    this.favoritesMovieProvider
      .getFavoriteMovies()
      .then(favs => (this.favoriteMovies = favs));
  }


  goToDetail(movie) {
    this.navCtrl.push(MovieDetailPage, {movie: movie});
  }

  getFavorites(event){

  }
  onCancel(event){

  }

}
