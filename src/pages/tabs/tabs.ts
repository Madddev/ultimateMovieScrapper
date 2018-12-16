import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FavoritesMoviesProvider} from "../../providers/favorites-movies/favorites-movies";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  moviesRoot = 'MoviesPage'
  serisesRoot = 'SerisesPage'
  favoritesRoot = 'FavoritesPage'
  totalFavorites = 0;

  constructor(public navCtrl: NavController, public favoritesService : FavoritesMoviesProvider) {
      this.favoritesService.getFavoriteMovies().then( (res) => {
        if (res.length > 0 ){
          this.totalFavorites = res.length;
        }
        }
      )
  }


}
