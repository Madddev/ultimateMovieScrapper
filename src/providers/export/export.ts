import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SocialSharing} from "@ionic-native/social-sharing";
import {File} from '@ionic-native/file';
import {FavoritesMoviesProvider} from "../favorites-movies/favorites-movies";
import {Parser as Json2csvParser} from 'json2csv';


@Injectable()
export class ExportProvider {
  fileName = "export_favorites";

  // please set your fileName;

  constructor(public http: HttpClient, public file: File, private socialSharing: SocialSharing,
              public favoritesMovieProvider: FavoritesMoviesProvider,
  ) {

  }

  async export(type) {
    let dir = this.file.externalApplicationStorageDirectory;


    let favorites = await this.favoritesMovieProvider.getFavoriteMovies();


    let content;
    let fileName;
    switch (type) {
      case 'json' : {
        content = JSON.stringify(favorites);
        fileName = this.fileName + '.json';
        break;
      }
      case 'csv' : {
        let fields = ['id', 'imdbID', 'imdbRating', 'imdbVotes', 'language', 'poster', 'title', 'year'];
        const json2csv = new Json2csvParser();
        content = json2csv.parse(favorites);
        console.log(content)
        fileName = this.fileName + 'toto.csv';
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
          message : 'Mamadou',
          files : [value.nativeURL]
        };
        return this.socialSharing.shareWithOptions(options);
      });
  }

}
