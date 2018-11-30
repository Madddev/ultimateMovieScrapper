import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../config/config";
import {map} from "rxjs/operators";


@Injectable()
export class SeriseProvider {

  constructor(public http: HttpClient,@Inject(APP_CONFIG) private config : AppConfig) {
    console.log('Hello MovieProvider Provider');
  }

  getPosterById(id){
    return this.config.apiEndpointPoster + 'i='+ id +'&h=500';
  }
  getSeriseById(id,type){
    let url = this.config.apiEndpointDate + 'i='+ id+'&plot=full'+'&t=' + type;
    return this.http.get(this.config.apiEndpointDate + 'i='+ id+'&plot=full'+'&type=' + type);
  }
  getEpisodeByIdSerieAndNumSeason(idSerie, numSeason){
    return this.http.get(this.config.apiEndpointDate + 'i='+idSerie+'&type=series' + '&season='+numSeason).pipe(
      map(response =>  response['Episodes'])
    );
  }

}
