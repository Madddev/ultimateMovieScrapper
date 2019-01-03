import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import { LoginPage } from '../pages/login/login';
import {AuthServiceProvider} from "../providers/auth-service/auth-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar,private auth : AuthServiceProvider, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.initializeApp(auth);
    });
  }
  initializeApp(auth) {
    auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
  }
  login() {
    this.auth.signOut();
    this.nav.push(LoginPage);
  }
  logout() {
    this.auth.signOut();
    this.nav.push(LoginPage);
  }

}

