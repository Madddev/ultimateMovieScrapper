import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailPage } from './movie-detail';
import {RatingComponent} from "../../components/rating/rating";
import {RatingComponentModule} from "../../components/rating/rating.module";

@NgModule({
  declarations: [
    MovieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailPage),
    RatingComponentModule
  ],
})
export class MovieDetailPageModule {}
