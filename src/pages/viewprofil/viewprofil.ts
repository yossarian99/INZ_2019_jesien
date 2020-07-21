import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Opinie} from "../../models/Opnie-model";
import {ProfileListService} from "../../services/Pfofile-list";
import {FormControl, FormGroup} from "@angular/forms";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {RestProvider} from "../../providers/rest/rest";
import {ProfileOut} from "../../model/profileOut";

/**
 * Generated class for the ViewprofilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewprofil',
  templateUrl: 'viewprofil.html',
})

export class ViewprofilPage {

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, private provilconfig: SearchServiceProvider, public profilsService: ProfileListService, public rest: RestProvider) {
    events.subscribe('star-rating:changed', (starRating) =>
      console.log(starRating));
    this.id = this.provilconfig.getProfilById();
    // Object.assign(this.item, this.item1);
    this.searchParams = this.provilconfig.searchParams;
    rest.id = this.id;
    this.getUsers();
    // this.rating_option = this.item.rating;
    this.logRatingChange(this.item.rating)
    // this.initializeopinionforms();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewprofilPage');
  }
  searchParams = {
    loc: '',
    dysc: ''
  };
  id: number;
  rating_option: number;
  showprofil: boolean;
  Opinions: Opinie = {};
  item: ProfileOut = {};
  opinionforms = new FormGroup({
    Opinionss: new FormControl(),
    opinionuser: new FormControl(),
    email: new FormControl(),
    ocena: new FormControl()
  });


  Opinionform() {
    this.profilsService.addOponion(this.Opinions.description, this.Opinions.name, this.Opinions.email, this.Opinions.rating,
      this.item.name);
    console.log("opinion=", this.Opinions.description);
    console.log("opinodawca=", this.Opinions.name);
    this.opinionforms.reset();
  }

  backtoprofiles() {
    this.navCtrl.pop();
    }

  logRatingChange(rating) {
    console.log("changed rating: ", rating);
    // do your stuff
    this.rating_option = rating;
  }

  getUsers() {
    this.item = this.provilconfig.getprofilParms();
  }

  initializeopinionforms() {
    this.opinionforms = new FormGroup({
      opinionuser: new FormControl(),
      Opinionss: new FormControl(), email: new FormControl(), ocena: new FormControl()
    })
  }
}
