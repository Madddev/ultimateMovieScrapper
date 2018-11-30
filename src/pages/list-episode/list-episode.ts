import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeriseProvider} from "../../providers/serise/serise";
import {MovieDetailPage} from "../movie-detail/movie-detail";

@IonicPage()
@Component({
  selector: 'page-list-episode',
  templateUrl: 'list-episode.html',
})
export class ListEpisodePage {
  episodes : any;
  idSeason : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public seriesProvider : SeriseProvider) {
    this.idSeason = this.navParams.get('idSeason');
  }

  ionViewDidLoad() {
    this.seriesProvider.getEpisodeByIdSerieAndNumSeason(this.navParams.get('idSerie'),
      this.navParams.get('idSeason')).subscribe((data) => {
        this.episodes = data;

      });
  }
  goToDetail(episode){
    this.navCtrl.push(MovieDetailPage, {
      movie: episode,
    });
  }
}
