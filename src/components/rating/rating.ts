import {Component, Input} from '@angular/core';
import {MovieProvider} from "../../providers/movie/movie";


@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  @Input() imdbRating: any;
  maxStars = 10;
  maxRating : any;
  constructor( public movieProvider : MovieProvider) {
    let arr = [];
    for(let i = 0; i < this.maxStars; i++) {
      arr.push(i);
    }
    this.maxRating = arr;
  }


}
