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
import {MovieDetailPage} from "../pages/movie-detail/movie-detail";
import {FavoritesPageModule} from "../pages/favorites/favorites.module";
import {MovieDetailPageModule} from "../pages/movie-detail/movie-detail.module";

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
    MovieDetailPageModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG},
    ConstructImovieProvider,
    FavoritesMoviesProvider,
  ]
})
export class AppModule {}
