import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeriseDetailsPage } from './serise-details';
import {RatingComponent} from "../../components/rating/rating";
import {RatingComponentModule} from "../../components/rating/rating.module";

@NgModule({
  declarations: [
    SeriseDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeriseDetailsPage),
    RatingComponentModule
  ],
})
export class SeriseDetailsPageModule {}
