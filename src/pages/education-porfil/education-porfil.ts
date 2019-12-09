import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileService} from "../../api/profile.service";
import {ProfileOut} from "../../model/profileOut";

/**
 * Generated class for the EducationPorfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education-porfil',
  templateUrl: 'education-porfil.html',
})
export class EducationPorfilPage {
  id:number;
  item:ProfileOut={};
  constructor(public nav: NavController,private provilconfig: SearchServiceProvider, public navParams: NavParams,public sea:SearchServiceProvider,public ProfillRest:ProfileService) {
    this.id = this.provilconfig.getId2();
    this.getUsers(this.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPorfilPage');
  }
  backtoprofiles(){

    this.nav.pop();



  }
  getUsers(id:number) {

    this.ProfillRest.getProfile(id).subscribe(result => {

      Object.assign(this.item, result);

    });
  }
}
