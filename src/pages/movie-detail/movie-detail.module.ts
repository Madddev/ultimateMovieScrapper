import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailPage } from './movie-detail';
import {RatingComponent} from "../../components/rating/rating";

@NgModule({
  declarations: [
    MovieDetailPage,
    RatingComponent
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailPage),
  ],
})
export class MovieDetailPageModule {}
