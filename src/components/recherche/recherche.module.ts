import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RechercheComponent} from "./recherche";

@NgModule({
  declarations: [
    RechercheComponent,
  ],
  imports: [
    IonicPageModule.forChild(RechercheComponent),
  ],
  exports :[RechercheComponent]
})
export class RechercheComponentModule {}
