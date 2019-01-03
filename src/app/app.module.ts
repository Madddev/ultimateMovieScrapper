import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieProvider } from '../providers/movie/movie';
import {APP_DI_CONFIG, APP_CONFIG} from '../providers/config/config';
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
import { ExportProvider } from '../providers/export/export';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { SignupPage } from '../pages/signup/signup';
import {PopoverPageModule} from "../pages/popover/popover.module";
import {HTTP} from "@ionic-native/http";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { firebaseConfig } from '../config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    MoviesPageModule,
    FavoritesPageModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    TabsPageModule,
    SerisesPageModule,
    MovieDetailPageModule,
    SeriseDetailsPageModule,
    NgxErrorsModule,
    ListEpisodePageModule,
    PopoverPageModule,
    HttpModule


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
    AngularFireAuth,
    FileTransfer,
    HTTP,
    AuthServiceProvider
  ]
})
export class AppModule {}
