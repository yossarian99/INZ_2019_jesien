import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfileService} from "../../api/profile.service";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileOut} from "../../model/profileOut";

/**
 * Generated class for the ExperienceProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experience-profill',
  templateUrl: 'experience-profill.html',
})
export class ExperienceProfillPage {
  id:number;
  item:ProfileOut={};
  constructor(public nav: NavController,public sea:SearchServiceProvider, public navParams: NavParams,public ProfillRest:ProfileService,private provilconfig: SearchServiceProvider) {
    this.id = this.provilconfig.getId2();
    this.getUsers(this.id);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperienceProfillPage');
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
