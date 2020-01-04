import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StartPage} from "../pages/start/start";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = StartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) { //, imageLoaderConfig: ImageLoaderConfig
    platform.ready().then(() => {

      // imageLoaderConfig.enableDebugMode();
      // imageLoaderConfig.enableFallbackAsPlaceholder(true);
      // imageLoaderConfig.setFallbackUrl('./assets/imgs/avatar.png');
      // imageLoaderConfig.setMaximumCacheAge(2*60*60*1000);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

