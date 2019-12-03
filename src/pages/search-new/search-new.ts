import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ConfigServce} from "../../providers/config-service/config-service";

import {ProfileListService} from "../../services/Pfofile-list";
import {ProfileService} from "../../api/profile.service";
import {ProfileOut} from "../../model/profileOut";
import {TrainerService} from "../../api/trainer.service";
import {ProfilViewMenuPage} from "../profil-view-menu/profil-view-menu";
import {DyscyplineService} from "../../api/dyscypline.service";
import {Disciplines} from "../../model/disciplines";
import {FormControl, FormGroup} from "@angular/forms";

// import {ViewprofilPage} from "../viewprofil/viewprofil";
//
/**
 * Generated class for the SearchNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-new',
  templateUrl: 'search-new.html',
})
export class SearchNewPage {
  structure: any;
  structure2: any;
  showFilters: boolean;

  constructor(public restdyscyp: DyscyplineService, public trenersearch: TrainerService, public rest: ProfileService, public nav: NavController, public navParams: NavParams, private sea: SearchServiceProvider, private configServce: ConfigServce, private provilconfig: SearchServiceProvider, private  service: ProfileListService, public alertCtrl: AlertController) {
    this.change_rating(4);
    this.showForm();
    this.showFilters = true;
    this.getDyscp();
    this.Idform();
    this.structure = {
      lower: 30, upper: 60

    };
    this.structure2 = {
      lower: 30, upper: 250

    };
  }

  Dysciplines: Array<Disciplines> = [];
  dyscyplina: Disciplines;
  Town: any;
  idforms = new FormGroup({Town: new FormControl()});

  public getDyscp() {
    this.restdyscyp.getDyscyplines().subscribe(result => {

      Object.assign(this.Dysciplines, result);


      //  for(var i=0;i<result.length;++i){
      //    this.Dyscyplines[i]=result[i].Name;
      // }
      console.log("wczytane profils w wyszukiwaniu :");

      console.log("list of dysc =", this.Dysciplines);


    });
  }


  rating: any;

  change_rating(x: any) {
    this.rating = x;

  }

  logRatingChange(rating) {
    console.log("changed rating: ", rating);
    // do your stuff
    this.rating = rating;
  }

  ProfilOpinie: number;
  searchParams = {
    loc: '',
    dysc: ''
  };
  showsearch: boolean;
  showresult: boolean = true;
  profiles: ProfileOut[] = [];
  profilesFiltered: ProfileOut[] = [];
  prifilFiltered: ProfileOut;
  profil: ProfileOut;
  BASE_URL: string;
  GET_PROFILE: string;
  URl: string;
  sciezka: string;
  profiltest: ProfileOut;

  public getSearch(miasto: string, dyscyplina: string) {
    this.trenersearch.getTrainers(dyscyplina, miasto).subscribe(result => {
      console.log(this.sciezka);
      if (result != undefined) {
        Object.assign(this.profiles, result);
        console.log("wczytane profils w wyszukiwaniu :");
        console.log(this.profiles);


      }
      else {
        console.log("error showserach");
        this.showresult = false;
      }


    });
  }

  public getSearch2() {
    this.rest.getProfile(1).subscribe(result => {
      console.log(this.sciezka);
      if (result != undefined) {
        Object.assign(this.profiles, result);
        console.log("wczytane profils w wyszukiwaniu :");
        console.log(this.profiles);


      }
      else {
        console.log("error showserach");
        this.showresult = false;
      }


    });
  }

  showForm() {
    this.searchParams = this.sea.getSearchParams();
    if (this.searchParams.dysc === '' && this.searchParams.loc === '') {
      this.showsearch = false;
      console.log('pola sa puste');

    } else {
      if (this.searchParams.dysc != '' && this.searchParams.loc != '') {
        this.BASE_URL = 'http://najlepszytrener.com.pl/api/';
        // this.GET_PROFILE = this.BASE_URL + 'profiles/';

        this.URl = this.BASE_URL + this.searchParams.dysc + '/' + this.searchParams.loc;
        this.sciezka = encodeURI(this.URl);
        this.getSearch(this.searchParams.loc, this.searchParams.dysc);
        this.showsearch = true;


      }

    }
  }

  profilsite(profil: ProfileOut) {
    // this.service.addItem_object(id);
    this.provilconfig.addprofilParams(profil);
    console.log("w srodku servisu");

    this.nav.push('ProfilViewMenuPage');

  }

  dualValue2: number;
  genders = ["kobieta", "meżczyzna"];
  plec: string;
  gender: any;
  testRadioOpen: boolean;
  testRadioResult: any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad Search2Page');
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Płeć');

    alert.addInput({
      type: 'radio',
      label: 'kobieta',
      value: 'K',
      checked: true,

    });

    alert.addInput({
      type: 'radio',
      label: 'Meżczyzna',
      value: 'M'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }

  knobValues: {
    upper: 100,
    lower: 50
  }

  getAgeStr(dateString) {
    var myDate = new Date(dateString),
      now = new Date(),
      month_of_birth = myDate.getMonth(),
      day_of_birht = myDate.getDay(),
      year_of_birth = myDate.getFullYear(),
      now_month = now.getMonth(),
      now_day = now.getDay(),
      now_year = now.getFullYear(),
      age = now_year - year_of_birth;
    if (now_month < month_of_birth) {
      age--;
    } else if ((now_month == month_of_birth) && (now_day < day_of_birht)) {
      age--;
      if (age < 0) {
        age = 0;
      }
    }
    return age;
  }

  Idform() {
    let plecSearch: boolean = false;
    let townSearch: boolean;
    let priceSearch: boolean;
    let ageSearch: boolean = false;
    let dyscSearch: boolean = true;
    for (let i = 0; i < this.profiles.length; i++) {
      let age = this.getAgeStr(this.profiles[i].bdate);
      console.log("age", age);
      if (age >= this.structure.lower && age <= this.structure.upper) ageSearch = true;
      else ageSearch = false;
      console.log("struture", this.structure);
      console.log("structure2", this.structure2);

      console.log("profiles", this.profiles[i]);
      // Object.assign(this.profiltest, this.profiles[i]);
      // console.log("trroffer",this.profiltest.trOff);
      debugger;
      let offers = this.profiles[i].tr_off;
      for (let j = 1; j < offers.length; j++) {
        debugger;
        if (offers[j].name == this.dyscyplina.name && offers[j].price >= this.structure2.lower && offers[j].price <= this.structure2.upper) {
          dyscSearch = true;
        } else dyscSearch = dyscSearch && offers[j].name == this.dyscyplina.name && offers[j].price >= this.structure2.lower && offers[j].price <= this.structure2.upper;
      }

      console.log("agesearch", ageSearch);
      console.log("dyscysearch", dyscSearch);
      console.log("plecsearch", plecSearch);

      if (this.profiles[i].gender == this.testRadioResult) plecSearch = true; else plecSearch = false;
      if ((ageSearch && dyscSearch && plecSearch) == true) {
        console.log("splice")
        this.profilesFiltered.push(this.profiles[i]);
        // this.profiles.splice(i+1,1);
      }
      console.log(this.profilesFiltered);
    }
    if (this.profilesFiltered.length > 0) {
      this.showFilters = true;
    }
    else this.showFilters = false;

  }
}

