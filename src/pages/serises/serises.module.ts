import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerisesPage } from './serises';
import {RechercheComponentModule} from "../../components/recherche/recherche.module";

@NgModule({
  declarations: [
    SerisesPage,
  ],
  imports: [
    IonicPageModule.forChild(SerisesPage),
    RechercheComponentModule

  ],
})
export class SerisesPageModule {}
