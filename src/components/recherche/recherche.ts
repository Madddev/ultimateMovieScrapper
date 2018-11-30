import {Component, Input} from '@angular/core';
import {MovieProvider} from "../../providers/movie/movie";
import {NavController} from "ionic-angular";

@Component({
  selector: 'recherche',
  templateUrl: 'recherche.html'
})

export class RechercheComponent {
  @Input() typeMovie: string;
  @Input() detailPage: any;
  items: string[];
  hasResult : boolean = false;

  constructor( public movieProvider : MovieProvider, public navCtrl: NavController) {
  }

  getItems(event) {
    var val = event.target.value;
    if (val && val.trim() != '') {
      this.movieProvider.getDataBySearch(val,this.typeMovie).subscribe((data) => {
        if (data != null){
          this.items = data;
          this.hasResult = true;
        }else {
          this.dropData();
        }
      })
    }
  }
  onCancel(event){
    this.dropData();
  }

  dropData(){
    this.items = [];
    this.hasResult = false;
  }


  goToDetail(movie) {

    this.navCtrl.push(this.detailPage, {
      movie: movie
    });
  }

}
