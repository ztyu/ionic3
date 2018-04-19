import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpService} from "../providers/http-service";
import { TabsPage } from '../pages/tabs/tabs';
import {HttpClient} from "@angular/common/http";
import {ShareService} from "../providers/share-service";
import {AppSettings} from './config/app-settings';
@Component({
  templateUrl: 'app.html',
  providers: [ AppSettings,HttpService,HttpClient]
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public ShardService:ShareService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
