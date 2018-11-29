import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {APP_CONFIG, AppConfig} from "../config/config";

@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient,@Inject(APP_CONFIG) private config : AppConfig) {
    console.log('Hello MovieProvider Provider');
  }

  getListMovies(){
    return this.http.get(this.config.apiEndpoint + 's=batman').pipe(
      map(response =>  response['Search'])
    );
  }
  getMovieById(id){
    return this.http.get(this.config.apiEndpoint + 'i='+ id+'&plot=full');
  }
  getDataBySearch(titleFilm){
    return this.http.get(this.config.apiEndpoint + 's='+titleFilm).pipe(
      map(response =>  response['Search'])
    );
  }

}
