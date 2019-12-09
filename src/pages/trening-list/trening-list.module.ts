import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreningListPage } from './trening-list';

@NgModule({
  declarations: [
    TreningListPage,
  ],
  imports: [
    IonicPageModule.forChild(TreningListPage),
  ],
})
export class TreningListPageModule {}
