import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProfileOut} from "../../model/profileOut";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileService} from "../../api/profile.service";

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
  dyscyumbers:number;
  id:number;
  constructor(public ProfillRest:ProfileService,public navCtrl: NavController,private provilconfig: SearchServiceProvider , public navParams: NavParams, public events: Events,public nav: NavController,public sea:SearchServiceProvider) {
    events.subscribe('star-rating:changed', (starRating) =>
      console.log(starRating));
    this.id = this.provilconfig.getId2();

    this.getUsers(this.id);
    this.rating_option = this.item.rating;
    // this.searchParams = this.provilconfig.searchParams;
// this.dyscyumbers=this.getsycyplinsNumberDiv2();
    console.log("tr_dysc==",this.item.tr_disc);
    console.log("item==",this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
  backtoprofiles(){

    this.nav.pop();



  }
  getUsers(id:number) {

    this.ProfillRest.getProfile(id).subscribe(result => {

      Object.assign(this.item, result);
      console.log("dyscyplines22222==",this.item.tr_disc);
      this.dyscyumbers=   Math.floor(this.item.tr_disc.length/2);
      console.log("dysnumbers==",this.dyscyumbers);
    });
  }
  searchParams = {
    loc: '',
    dysc: ''
  };
getsycyplinsNumberDiv2(){

  return Math.floor(this.item.tr_disc.length/2);
}
  onCheckItem(){}
}
