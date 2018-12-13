import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';
import {PopoverPageModule} from "../popover/popover.module";

@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPage),
    PopoverPageModule
  ],
})
export class FavoritesPageModule {}
