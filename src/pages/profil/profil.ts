import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProfileOut} from "../../model/profileOut";
import {SearchServiceProvider} from "../../providers/search-service/search-service";

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  item:ProfileOut={};
  rating_option:number;
  constructor(public navCtrl: NavController,private provilconfig: SearchServiceProvider , public navParams: NavParams, public events: Events,public nav: NavController,public sea:SearchServiceProvider) {
    events.subscribe('star-rating:changed', (starRating) =>
      console.log(starRating));
    this.item=sea.getProfillViewMenu();
    this.rating_option = this.item.rating;
    this.searchParams = this.provilconfig.searchParams;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  backtoprofiles(){

    this.nav.pop();



  }
  searchParams = {
    loc: '',
    dysc: ''
  };
}
