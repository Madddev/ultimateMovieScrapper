import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SocialSharing} from "@ionic-native/social-sharing";
import {File} from '@ionic-native/file';
import {FavoritesMoviesProvider} from "../favorites-movies/favorites-movies";
import * as json2csv from 'json2csv';
import * as papa from 'papaparse';
import { Platform } from 'ionic-angular';




@Injectable()
export class ExportProvider {
  fileName = "export_favorites";

  constructor(public http: HttpClient, public file: File, private socialSharing: SocialSharing,
              public favoritesMovieProvider: FavoritesMoviesProvider,
              public platform : Platform
  ) {

  }

  async export(type) {
    let dir = this.file.externalApplicationStorageDirectory;
    let favorites = await this.favoritesMovieProvider.getFavoriteMovies();
    let content;
    let fileName;
    if (this.platform.is('core')) {
      switch (type) {
        case 'json' : {
          content = JSON.stringify(favorites);
          fileName = this.fileName + '.json';
          this.downloadBrowser(content,fileName);
          break;
        }
        case 'csv' : {
          let fields = ['id', 'imdbID', 'imdbRating', 'imdbVotes', 'language', 'poster', 'title', 'year'];
          content =  json2csv.parse( favorites, {fields} );
          fileName = this.fileName + '.csv';
          this.downloadBrowser(content,fileName);
          break;
        }
      }
    }else {
      switch (type) {
        case 'json' : {
          content = JSON.stringify(favorites);
          fileName = this.fileName + '.json';
          break;
        }
        case 'csv' : {
          let fields = ['id', 'imdbID', 'imdbRating', 'imdbVotes', 'language', 'poster', 'title', 'year'];
          content =  json2csv.parse( favorites, {fields} );
          fileName = this.fileName + '.csv';
          break;
        }
      }

      return this.file
        .writeFile(dir,
          fileName,
          content,
          {replace: true})
        .then(value => {
          let options =  {
            message : 'Export Favorites',
            files : [value.nativeURL]
          };
          return this.socialSharing.shareWithOptions(options);
        });
    }

  }

  private extractData(res) {
    let parsedData = papa.parse(res, {header : true}).data;
    return parsedData;

  }

  import(url,type) {
    let content;
    let UrlRemote = url.import;
    return new Promise((resolve, reject) => {
      switch (type) {
        case 'json' : {
          this.http.get(UrlRemote).subscribe(data => {
            this.addToLocalStorage(data).then( (res) =>{
                resolve(res);
              }
            );
          });
          break;
        }
        case 'csv' : {
          this.http.get(UrlRemote,{responseType : "text"}).subscribe(data => {
              content = this.extractData(data);
              this.addToLocalStorage(content).then((res) => {
                resolve(res);
              });
            },
            err => reject(err));
          break;
        }
      }

    });

  }
  addToLocalStorage(arrayFavorites){
    let tab = [];
      for (let i= 0; i < arrayFavorites.length; i++){
        tab.push(this.favoritesMovieProvider.addFavoriteMovie(arrayFavorites[i]));
      }
      return Promise.all(tab);
  }

  async getBlobImage(poster){
     const response = await this.http.get(poster, {responseType: 'blob'}).toPromise();
     return new Blob([response], {type : 'image/jpg'});
  }
  downloadBrowser(content,filename) {
    var blob = new Blob([content]);
    let objectOjectURL = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.setAttribute('href',objectOjectURL);
    link.setAttribute('download',filename);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectOjectURL);
  }

}
