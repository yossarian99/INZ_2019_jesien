import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewprofilPage } from './viewprofil';
import {IonicImageLoader} from "ionic-image-loader";
// import { StarRatingModule } from 'ionic3-star-rating';
import { SharedModule } from '../../app/app.shared.module';
import {StarRatingModule} from "ionic3-star-rating";
@NgModule({
  declarations: [
    ViewprofilPage,

  ],
  imports: [   IonicImageLoader,
    StarRatingModule,
    // StarRatingModule,
    IonicPageModule.forChild(ViewprofilPage),
  ],
})
export class ViewprofilPageModule {}
