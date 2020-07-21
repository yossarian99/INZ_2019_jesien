import {Component} from '@angular/core';
import {Events, IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
// import {ArrayID} from "../../models/id-array-ns";
import {ProfileListService} from "../../services/Pfofile-list";
import {FormControl, FormGroup} from "@angular/forms";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {RestProvider} from "../../providers/rest/rest";
import {ProfileService} from "../../api/profile.service";
import {ProfileOut} from '../../model/profileOut';
import {Opinion} from "../../model/opinion";

/**
 * Generated class for the ProfilViewMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil-view-menu',
  templateUrl: 'profil-view-menu.html',
})

export class ProfilViewMenuPage {
  id: number;
  rootPage: any = ProfilViewMenuPage;

  constructor(public ProfillRest: ProfileService, public menuCtrl: MenuController, public events: Events,
              public sea: SearchServiceProvider, public nav: NavController, public navParams: NavParams,
              private provilconfig: SearchServiceProvider, public profilsService: ProfileListService,
              public rest: RestProvider) {
    events.subscribe('star-rating:changed', (starRating) =>
      console.log(starRating));
    this.id = this.provilconfig.getProfilById();
    console.log("id0000===", this.id);
    this.searchParams = this.provilconfig.searchParams;
    this.getUsers(this.id);
    this.rating_option = this.item.rating;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilViewMenuPage');
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  searchParams = {
    loc: '',
    dysc: ''
  };

  rating_option: number;
  showprofil: boolean;
  Opinions: Opinion = {};
  item: ProfileOut = {};
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

  backtoprofiles() {
    this.nav.pop();
  }

  getUsers(id: number) {
    console.log("id9999==", id);
    this.ProfillRest.getProfile(id).subscribe(result => {
      Object.assign(this.item, result);
    });
  }

  initializeopinionforms() {
    this.opinionforms = new FormGroup({
      opinionuser: new FormControl(),
      Opinionss: new FormControl(), email: new FormControl(), ocena: new FormControl()
    })
  }

  openPage(page) {
    this.provilconfig.setId2(this.id);
    this.nav.push(page);
  }
}
