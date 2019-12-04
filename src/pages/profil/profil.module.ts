import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilPage } from './profil';
import {StarRatingModule} from "ionic3-star-rating";

@NgModule({
  declarations: [
    ProfilPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(ProfilPage),
  ],
})
export class ProfilPageModule {}
