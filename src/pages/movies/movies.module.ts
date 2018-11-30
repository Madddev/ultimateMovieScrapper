import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesPage } from './movies';
import {RechercheComponent} from "../../components/recherche/recherche";

@NgModule({
  declarations: [
    MoviesPage,
    RechercheComponent
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
  ],
})
export class MoviesPageModule {}
