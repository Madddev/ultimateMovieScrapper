import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesPage } from './movies';
import {RechercheComponentModule} from "../../components/recherche/recherche.module";

@NgModule({
  declarations: [
    MoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
    RechercheComponentModule

  ],
})
export class MoviesPageModule {}
