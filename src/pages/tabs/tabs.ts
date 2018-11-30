import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  moviesRoot = 'MoviesPage'
  serisesRoot = 'SerisesPage'
  favoritesRoot = 'FavoritesPage'


  constructor(public navCtrl: NavController) {}

}
