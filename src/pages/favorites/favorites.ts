import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieDetailPage} from "../movie-detail/movie-detail";
import {IMovie} from "../../interface/IMovie";
import {FavoritesMoviesProvider} from "../../providers/favorites-movies/favorites-movies";
import {ExportProvider} from "../../providers/export/export";
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { PopoverController } from 'ionic-angular';
import {PopoverPage} from "../popover/popover";






@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favoriteMovies: any ;
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public navCtrl: NavController,
              public favoritesMovieProvider : FavoritesMoviesProvider ,
              public navParams: NavParams,
              public exportService : ExportProvider,
              public file : File,
              public transfer : FileTransfer,
              public popoverCtrl: PopoverController) {
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
  exportData(allfavorites){
   this.exportService.export(allfavorites);
  }
  download(url) {
    this.fileTransfer.download(url, this.file.dataDirectory + 'export_favorites.json').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
