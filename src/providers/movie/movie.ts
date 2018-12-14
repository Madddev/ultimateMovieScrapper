import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {APP_CONFIG, AppConfig} from "../config/config";

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

}
