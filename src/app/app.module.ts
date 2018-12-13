import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieProvider } from '../providers/movie/movie';
import { APP_DI_CONFIG, APP_CONFIG } from '../providers/config/config';
import {HttpClientModule} from "@angular/common/http";
import {MoviesPageModule} from "../pages/movies/movies.module";
import { ConstructImovieProvider } from '../providers/construct-imovie/construct-imovie';
import { FavoritesMoviesProvider } from '../providers/favorites-movies/favorites-movies';
import {IonicStorageModule} from "@ionic/storage";
import {TabsPageModule} from "../pages/tabs/tabs.module";
import {FavoritesPageModule} from "../pages/favorites/favorites.module";
import {MovieDetailPageModule} from "../pages/movie-detail/movie-detail.module";
import { SeriseProvider } from '../providers/serise/serise';
import {SerisesPageModule} from "../pages/serises/serises.module";
import {SeriseDetailsPageModule} from "../pages/serise-details/serise-details.module";
import {ListEpisodePageModule} from "../pages/list-episode/list-episode.module";
import {ListEpisodePage} from "../pages/list-episode/list-episode";
import { ExportProvider } from '../providers/export/export';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {PopoverPage} from "../pages/popover/popover";
import {PopoverPageModule} from "../pages/popover/popover.module";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    MoviesPageModule,
    FavoritesPageModule,
    IonicStorageModule.forRoot(),
    TabsPageModule,
    SerisesPageModule,
    MovieDetailPageModule,
    SeriseDetailsPageModule,
    ListEpisodePageModule,
    PopoverPageModule


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG},
    ConstructImovieProvider,
    FavoritesMoviesProvider,
    SeriseProvider,
    ExportProvider,
    SocialSharing,
    File,
    FileTransferObject,
    FileTransfer
  ]
})
export class AppModule {}
