import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchServiceProvider} from "../../providers/search-service/search-service";

/**
 * Generated class for the BigphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bigphoto',
  templateUrl: 'bigphoto.html',
})
export class BigphotoPage {
picturephoto:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public sea: SearchServiceProvider) {
   this.picturephoto=this.sea.getPhoto();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BigphotoPage');
  }

}
