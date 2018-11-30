import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListEpisodePage } from './list-episode';

@NgModule({
  declarations: [
    ListEpisodePage,
  ],
  imports: [
    IonicPageModule.forChild(ListEpisodePage),
  ],
})
export class ListEpisodePageModule {}
