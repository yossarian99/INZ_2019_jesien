import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileService} from "../../api/profile.service";
import {ProfileOut} from "../../model/profileOut";
import {FormControl, FormGroup} from "@angular/forms";
import {Opinion} from "../../model/opinion";
import {ProfileListService} from "../../services/Pfofile-list";
import {Dodanieopini} from "../../model/dodanieopini";
import {AddopinionService} from "../../api/addopinion.service";

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
  Opinions: Dodanieopini = {};
   opinionSend:Dodanieopini={};
   exitCode:number;
  constructor(public nav: NavController,public opinionService:AddopinionService, public profilsService: ProfileListService, public navParams: NavParams, private provilconfig: SearchServiceProvider, public sea: SearchServiceProvider, public ProfillRest: ProfileService) {
    this.id = this.provilconfig.getId2();
    this.getUsers(this.id);
    this.initializeopinionforms();
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
         console.log("item",this.item.tr_op);
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
    ocena: new FormControl(),

  });

  Opinionform() {

this.opinionSend.email=this.Opinions.email;
this.opinionSend.name=this.Opinions.name;
this.opinionSend.rating=this.Opinions.rating;
this.opinionSend.trainerId=this.id;
this.opinionSend.description=this.Opinions.description;
console.log("opinionsend",this.opinionSend);
this.opinionService.addOpinion(this.opinionSend).subscribe(result => {
  console.log("result",result);
  this.exitCode = result;
});

console.log("exitcode",this.exitCode);



    // console.log("opinodawca=", this.Opinions.name);
    this.opinionforms.reset();
  }



}
