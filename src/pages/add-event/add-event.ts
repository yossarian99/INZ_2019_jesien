import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileService} from "../../api/profile.service";
import {ProfileOut} from "../../model/profileOut";
import {FormControl, FormGroup} from "@angular/forms";
import {RezerwacjaTreningu} from "../../model/rezerwacjaTreningu";
import {TrainingrezerwationService} from "../../api/trainingrezerwation.service";

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
id:number;
  item: ProfileOut = {};
  tr:RezerwacjaTreningu;
  treningRezerwation:RezerwacjaTreningu;
  trId:number;
  exitCode:number;
  constructor(public setTR:TrainingrezerwationService,public navCtrl: NavController, public navParams: NavParams,private provilconfig: SearchServiceProvider,public ProfillRest: ProfileService) {
    this.id = this.provilconfig.getId2();
    this.trId=this.provilconfig.getTRId();
    this.treningInitalize();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }
  getUsers(id: number) {

    this.ProfillRest.getProfile(id).subscribe(result => {

      Object.assign(this.item, result);

    });
  }
  treningInitalize(){
   this.setTrening = new FormGroup({

     //Dane do posta do zapisu osoby na trening
     name: new FormControl(),
     surname: new FormControl(),

     phone: new FormControl(),
     email: new FormControl(),
     comment: new FormControl(),
   })

  };
  setTrening = new FormGroup({

    //Dane do posta do zapisu osoby na trening
    name:new FormControl(),
  surname:new FormControl(),

  phone:new FormControl(),
  email:new FormControl(),
  comment:new FormControl(),
  });
  setTreningMew() {

    this.treningRezerwation.email=this.tr.email;
    this.treningRezerwation.name=this.tr.name;
    this.treningRezerwation.surname=this.tr.surname;
    this.treningRezerwation.phone=this.tr.phone;
    this.treningRezerwation.comment=this.tr.comment;
    this.treningRezerwation.id=this.trId;
    this.treningRezerwation.trainerId=this.id;
    this.setTR.orderTraining(this.treningRezerwation).subscribe(result => {
      console.log("result",result);
      this.exitCode = result;
    });

    console.log("exitcode",this.exitCode);



    // console.log("opinodawca=", this.Opinions.name);
    this.setTrening.reset();
  }




}
