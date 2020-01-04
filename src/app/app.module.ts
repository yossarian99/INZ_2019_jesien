import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';






//import { IonicPageModule } from 'ionic-angular';
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {ConfigServce} from "../providers/config-service/config-service";
import {HttpModule} from "@angular/http";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProfileListService} from "../services/Pfofile-list";
import { RestProvider } from '../providers/rest/rest';
import {SearchServiceProvider} from "../providers/search-service/search-service";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { StarRatingModule } from 'ionic3-star-rating';
import {ProfilViewMenuPage} from '../pages/profil-view-menu/profil-view-menu';
// import { ApiModule } from '../.';
import {ProfileService} from "../api/profile.service";
import { Calendar } from '@ionic-native/calendar/ngx';
import {CallendarProfillPage} from '../pages/callendar-profill/callendar-profill';
import {StartPage} from "../pages/start/start";
import {DyscyplineService} from "../api/dyscypline.service";
import {SearchNewPage} from "../pages/search-new/search-new";
import {TrainerService} from "../api/trainer.service";

import {SpecificPhotoService} from "../api/specificPhoto.service";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ProfilViewMenuPage,
    CallendarProfillPage,
    StartPage,
    // SearchNewPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    FormsModule,
    StarRatingModule,
    ReactiveFormsModule,

    // IonicImageLoader.forRoot(),
    // ApiModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // ProfilViewMenuPage,
    CallendarProfillPage,
    StartPage,
    // SearchNewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    HttpClient,
    HttpClientModule,
    AuthServiceProvider,
    ConfigServce,
    ProfileListService,
    RestProvider,
    SearchServiceProvider,
    ProfileService,
    Calendar,
    DyscyplineService,
    TrainerService,
    SpecificPhotoService
  ]
})
export class AppModule {}
