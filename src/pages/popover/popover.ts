import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {ExportProvider} from "../../providers/export/export";


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController,
              public exportService : ExportProvider,
              public viewCtrl: ViewController,
              public alertController:AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
  presentPrompt( type) {
    let alert = this.alertController.create({
      title: 'Import ' + type,
      inputs: [
        {
          name: 'import',
          placeholder: 'url import'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            this.close(false);
          }
        },
        {
          text: 'Import',
          handler: data => {
            this.importFavorites(data,type);
          }
        }
      ]
    });
    alert.present();
  }
  exportFavorites(type){
    this.exportService.export(type);
    this.close(false);

  }
  importFavorites(data,type){
    this.exportService.import(data,type).then(() =>
      this.close(true)
    );
  }
  close(bol) {
    this.viewCtrl.dismiss().then(res => {
      return bol;
    });
  }
}
