import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerisesPage } from './serises';

@NgModule({
  declarations: [
    SerisesPage,
  ],
  imports: [
    IonicPageModule.forChild(SerisesPage),
  ],
})
export class SerisesPageModule {}
