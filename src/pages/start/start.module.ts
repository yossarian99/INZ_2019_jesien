import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartPage } from './start';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StarRatingModule} from "ionic3-star-rating";
@NgModule({
  declarations: [
    StartPage,
  ],
  imports: [
    IonicPageModule.forChild(StartPage),
    FormsModule,
    ReactiveFormsModule,

  ],
})
export class StartPageModule {}
