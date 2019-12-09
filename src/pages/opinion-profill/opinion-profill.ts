import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileService} from "../../api/profile.service";
import {ProfileOut} from "../../model/profileOut";
import {FormControl, FormGroup} from "@angular/forms";
import {Opinion} from "../../model/opinion";
import {ProfileListService} from "../../services/Pfofile-list";

/**
 * Generated class for the OpinionProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opinion-profill',
  templateUrl: 'opinion-profill.html',
})
export class OpinionProfillPage {
  id: number;
  item: ProfileOut = {};
  Opinions: Opinion = {};

  constructor(public nav: NavController, public profilsService: ProfileListService, public navParams: NavParams, private provilconfig: SearchServiceProvider, public sea: SearchServiceProvider, public ProfillRest: ProfileService) {
    this.id = this.provilconfig.getId2();
    this.getUsers(this.id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpinionProfillPage');
  }

  backtoprofiles() {

    this.nav.pop();


  }

  getUsers(id: number) {

    this.ProfillRest.getProfile(id).subscribe(result => {

      Object.assign(this.item, result);

    });
  }

  initializeopinionforms() {

    this.opinionforms = new FormGroup({
      opinionuser: new FormControl(),
      Opinionss: new FormControl(), email: new FormControl(), ocena: new FormControl()


    });
  }

  opinionforms = new FormGroup({
    Opinionss: new FormControl(),
    opinionuser: new FormControl(),
    email: new FormControl(),
    ocena: new FormControl()
  });

  Opinionform() {

    this.profilsService.addOponion(this.Opinions.description, this.Opinions.name, this.Opinions.email, this.Opinions.rating, this.item.name);

    console.log("opinion=", this.Opinions.description);
    console.log("opinodawca=", this.Opinions.name);
    this.opinionforms.reset();
  }



}
