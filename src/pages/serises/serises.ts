import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeriseDetailsPage} from "../serise-details/serise-details";

/**
 * Generated class for the SerisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serises',
  templateUrl: 'serises.html',
})
export class SerisesPage {
  typeMovie ="series"; //serie
  detailPage = SeriseDetailsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
