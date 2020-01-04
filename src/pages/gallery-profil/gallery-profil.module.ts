import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GalleryProfilPage} from './gallery-profil';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    GalleryProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryProfilPage),
    CommonModule,
    // IonicImageLoader,
  ],
})
export class GalleryProfilPageModule {}
