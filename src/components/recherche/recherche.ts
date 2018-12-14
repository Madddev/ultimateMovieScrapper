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
  errorMessage: string;
  page = 1;
  totalPage = 100;
  title : any;
  hasResult : boolean = false;

  constructor( public movieProvider : MovieProvider, public navCtrl: NavController) {
  }

  getItems(event) {
    this.title = event.target.value;
    if (this.title && this.title.trim() != '') {
      this.movieProvider.getDataBySearch(this.title,this.typeMovie, this.page).subscribe((data) => {
        if (data != null){
          this.items = data;
          this.hasResult = true;
        }else {
          this.dropData();
        }
      }, error1 => this.errorMessage = error1)
    }
  }
  doInfinite(infiniteScroll){
    this.page = this.page+1;
    setTimeout(() => {
      this.movieProvider.getDataBySearch(this.title,this.typeMovie, this.page)
        .subscribe(
          res => {
            //this.items = {...this.items, ...res};
            for(let i=0; i<res.length; i++) {
              this.items.push(res[i]);
            }
          },
          error =>  this.errorMessage = <any>error);
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
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
