import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewprofilPage } from './viewprofil';
import {StarRatingModule} from "ionic3-star-rating";
@NgModule({
  declarations: [
    ViewprofilPage,

  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(ViewprofilPage),
  ],
})
export class ViewprofilPageModule {}
