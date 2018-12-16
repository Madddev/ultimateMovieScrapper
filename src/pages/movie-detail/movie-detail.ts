import { Component } from '@angular/core';
import { IonicPage, Platform,NavController, NavParams } from 'ionic-angular';
import {MovieProvider} from "../../providers/movie/movie";
import {FavoritesMoviesProvider} from "../../providers/favorites-movies/favorites-movies";
import {ConstructImovieProvider} from "../../providers/construct-imovie/construct-imovie";
import { FileTransfer, FileTransferObject  } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ToastController } from 'ionic-angular';

import {SocialSharing} from "@ionic-native/social-sharing";


import {ExportProvider} from "../../providers/export/export";




@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie: any = null;
  poster: any = null;
  filmrating: any;
  isFavorite: boolean = false;
  fileTransfer: FileTransferObject = this.transfer.create();
   filename = 'poster_film';




  constructor(public navCtrl: NavController,
              public favoritesMovieProvider: FavoritesMoviesProvider,
              public movieProvider: MovieProvider,
              public constructObjetIMovie: ConstructImovieProvider,
              public navParams: NavParams,
              private transfer: FileTransfer,
              private file: File,
              private exportService : ExportProvider,
              private platform : Platform,
              private socialSharing : SocialSharing,
              private toastCtrl: ToastController
  ) {


  }

  ionViewDidLoad() {
    this.movieProvider.getMovieById(this.navParams.get('movie').imdbID, 'movie').subscribe((lefilm: any) => {
      this.poster = this.movieProvider.getPosterById(lefilm.imdbID);
      this.movie = lefilm;
      this.filmrating = lefilm.imdbRating;
      let imovie = this.constructObjetIMovie.constructIMovie(this.movie);
      this.favoritesMovieProvider.isFavortieMovie(imovie).then(value => (this.isFavorite = value));
    });

  }

  toggleFavorite(): void {
    let imovie = this.constructObjetIMovie.constructIMovie(this.movie);
    this.isFavorite = !this.isFavorite;
    this.favoritesMovieProvider.toogleFavoriteMovie(imovie);
  }

  posterWhenReject(movie) {
    this.poster = movie.Poster;
  }

  async download(poster) {
    var img = null;

    if (this.platform.is('core')) {
      img = await this.exportService.getBlobImage(poster);
      this.exportService.downloadBrowser(img, this.filename);
    }else {
     //return this.socialSharing.shareWithOptions({message : 'message',files : [poster]});
      return this.socialSharing.shareWithOptions({
        subject : 'Poster',
        message : 'message',
        files : ['https://upload.wikimedia.org/wikipedia/commons/9/9c/GNOME_Web_logo.png'],
        url : poster});

    }
  }

  presentToast(message) {
    return this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'top'
    });
  }

}
