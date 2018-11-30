import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieDetailPage} from "../movie-detail/movie-detail";
import {HttpClient} from "@angular/common/http";


@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  typeMovie ="movie"; //serie
  searchQuery: string = '';
  detailPage = MovieDetailPage;
  items: string[];
  hasResult : boolean = false;

  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public navParams: NavParams,
  )
  {
    //this.movieProvider.getListMovies().subscribe((films) => {this.movies = films});

  }


}
