import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";
import {FavoritesMoviesProvider} from "../../providers/favorites-movies/favorites-movies";
import {ConstructImovieProvider} from "../../providers/construct-imovie/construct-imovie";


@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie : any = null;
  poster : any = null;
  filmrating : any;
  isFavorite: boolean = false;

  constructor(public navCtrl: NavController,
              public favoritesMovieProvider : FavoritesMoviesProvider ,
              public movieProvider : MovieProvider,
              public constructObjetIMovie : ConstructImovieProvider,
              public navParams: NavParams)
  {


  }
  ionViewDidLoad() {
    console.log(this.navParams.get('movie'));
    this.movieProvider.getMovieById(this.navParams.get('movie').imdbID,'movie').subscribe((lefilm : any) => {
      this.poster = this.movieProvider.getPosterById(lefilm.imdbID);
      this.movie = lefilm;
      this.filmrating = lefilm.imdbRating;
      let imovie = this.constructObjetIMovie.constructIMovie(this.movie);
      this.favoritesMovieProvider
        .isFavortieMovie(imovie)
        .then(value => (this.isFavorite = value));
    });

  }

  toggleFavorite(): void {
    let imovie = this.constructObjetIMovie.constructIMovie(this.movie);
    this.isFavorite = !this.isFavorite;
    this.favoritesMovieProvider.toogleFavoriteMovie(imovie);
  }
}
