import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {APP_CONFIG, AppConfig} from "../config/config";
import searchYoutube from 'youtube-api-v3-search';


@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient,@Inject(APP_CONFIG) private config : AppConfig) {
  }

  getPosterById(id){
    return this.config.apiEndpointPoster + 'i='+ id +'&h=500';
  }
  getMovieById(id,type){
    let url = this.config.apiEndpointDate + 'i='+ id+'&plot=full'+'&type=' + type;
    return this.http.get(this.config.apiEndpointDate + 'i='+ id+'&plot=full'+'&type=' + type);
  }
  getDataBySearch(titleFilm, type, page){
    return this.http.get(this.config.apiEndpointDate + 's='+titleFilm+'&type=' + type + '&page=' + page).pipe(
      map(response =>  response['Search'])
    );
  }

  async getTrailerByIdFilm(title){
    const options = {
      q:title+'trailer',
      type:'video',
      part:'id'
    };
    let result = await searchYoutube(this.config.apiEndPointYoutube,options);
    let objectVideo = result.items[0].id ;
    return objectVideo.videoId;
  }
}
