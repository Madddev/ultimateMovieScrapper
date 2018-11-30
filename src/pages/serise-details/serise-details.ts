import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";
import {ConstructImovieProvider} from "../../providers/construct-imovie/construct-imovie";
import {FavoritesMoviesProvider} from "../../providers/favorites-movies/favorites-movies";
import {ListEpisodePage} from "../list-episode/list-episode";

@IonicPage()
@Component({
  selector: 'page-serise-details',
  templateUrl: 'serise-details.html',
})
export class SeriseDetailsPage {

  movie : any = null;
  poster : any = null;
  filmrating : any;
  isFavorite: boolean = false;
  totalSeasons : any;

  constructor(public navCtrl: NavController,
              public favoritesMovieProvider : FavoritesMoviesProvider ,
              public movieProvider : MovieProvider,
              public constructObjetIMovie : ConstructImovieProvider,
              public navParams: NavParams)
  {


  }
  ionViewDidLoad() {
    console.log(this.navParams.get('movie'));
    this.movieProvider.getMovieById(this.navParams.get('movie').imdbID,'series').subscribe((lefilm : any) => {
      this.poster = this.movieProvider.getPosterById(lefilm.imdbID);
      this.movie = lefilm;
      this.filmrating = lefilm.imdbRating;
      this.totalSeasons = this.getArray(lefilm.totalSeasons);
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
  getArray(number){
    let arr = [];
    let i= 1;
    while (number > 0){
      arr.push(i);
      i++;
      number--;
    }
    return arr;
  }


  detailSeason(idSerie,season){
    this.navCtrl.push(ListEpisodePage, {
      idSeason: season,
      idSerie : idSerie
    });
  }
}
