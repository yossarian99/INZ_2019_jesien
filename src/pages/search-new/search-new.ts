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
import {SpecificPhotoService} from "../../api/specificPhoto.service";
import {DomSanitizer} from "@angular/platform-browser";
import {cloneDeep} from 'lodash';
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
  Avatarphoto: any;
  photoArray = [];
  photoArray2 = [];
  photoArray3 = [];
  singlephoto: any;
  binaryData = [];
  avatarShow = [];
  avatarShow2 = [];
  ln: number;
  showsearch: boolean;
  showresult: boolean = true;
  public profiles1: ProfileOut[] = [];
  public profiles2: ProfileOut[] = [];
  public profiles3: ProfileOut[] = [];
  profilesFiltered: ProfileOut[] = [];
  prifilFiltered: ProfileOut;
  profil: ProfileOut;
  BASE_URL: string;
  GET_PROFILE: string;
  URl: string;
  sciezka: string;
  profiltest: ProfileOut;
  public check: boolean = false;

  constructor(public restdyscyp: DyscyplineService, private sanitizer: DomSanitizer, public getphoto: SpecificPhotoService, public trenersearch: TrainerService, public rest: ProfileService, public nav: NavController, public navParams: NavParams, private sea: SearchServiceProvider, private configServce: ConfigServce, private provilconfig: SearchServiceProvider, private  service: ProfileListService, public alertCtrl: AlertController) {
    this.change_rating(4);
    this.showForm();
    this.profiles3 = this.sea.getProfiles();
    console.log("prifiles root", this.profiles3);
    console.log("prifiles root", this.profiles3.length);
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
  rating: any;
  idforms = new FormGroup({Town: new FormControl()});
  dualValue2: number;
  genders = ["kobieta", "meżczyzna"];
  plec: string;
  gender: any;
  testRadioOpen: boolean;
  testRadioResult: any;

  public getDyscp() {
    this.restdyscyp.getDyscyplines().subscribe(result => {
      Object.assign(this.Dysciplines, result);
      console.log("wczytane profils w wyszukiwaniu :");
      console.log("list of dysc =", this.Dysciplines);
    });
  }

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

  public getSearch(miasto: string, dyscyplina: string) {
    this.trenersearch.getTrainers(dyscyplina, miasto).subscribe(result => {
      console.log(this.sciezka);
      if (result != undefined) {
        Object.assign(this.profiles1, result);
        // console.log("avatar2", result[0].avatar);
        console.log("wczytane profils w wyszukiwaniu :");
        console.log(this.profiles1.length);
        this.profiles2 = cloneDeep(this.profiles1);
        console.log(this.profiles2.length);
        this.sea.setProfiles(this.profiles2);
        this.loadPhoto();
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
        Object.assign(this.profiles1, result);
        console.log("wczytane profils w wyszukiwaniu :");
        console.log(this.profiles1);
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
        this.URl = this.BASE_URL + this.searchParams.dysc + '/' + this.searchParams.loc;
        this.sciezka = encodeURI(this.URl);
        this.getSearch(this.searchParams.loc, this.searchParams.dysc);
        console.log("ppp", this.profiles1);
        this.profiles3 = Array.from(this.profiles1);
        console.log("lll", this.profiles1.length);
        this.showsearch = true;
      }
    }
  }

  profilsite(profil: ProfileOut) {
    this.provilconfig.addprofilParams(profil);
    console.log("id333==", profil.id);
    this.provilconfig.addProfilById(profil.id);
    console.log("w srodku servisu");
    this.nav.push('ProfilViewMenuPage');
  }

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
  };

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
    for (let i = 0; i < this.profiles2.length; i++) {
      let age = this.getAgeStr(this.profiles2[i].bdate);
      console.log("age", age);
      if (age >= this.structure.lower && age <= this.structure.upper) ageSearch = true;
      else ageSearch = false;
      console.log("struture", this.structure);
      console.log("structure2", this.structure2);
      console.log("profiles", this.profiles2[i]);
      let offers = this.profiles2[i].tr_tr;
      for (let j = 0; j < offers.length; j++) {
        if (offers[j].place == this.Town) townSearch = true;
        else townSearch = false;
        console.log("dys==name", offers[j].name);
        console.log("dysc name list ===", this.dyscyplina.name);
        if (offers[j].name == this.dyscyplina.name) dyscSearch = true;
        else dyscSearch = false;
        if (offers[j].price >= this.structure2.lower && offers[j].price <= this.structure2.upper)
          priceSearch = true;
        else priceSearch = false;
        if (this.profiles2[i].gender == this.testRadioResult) plecSearch = true; else plecSearch = false;
        console.log("agesearch", ageSearch);
        console.log("dyscysearch", dyscSearch);
        console.log("plecsearch", plecSearch);
        console.log("pricesearch", priceSearch);
        console.log("townsearch", townSearch);
        if ((ageSearch && dyscSearch && plecSearch && priceSearch && townSearch) == true) {
          console.log("splice ====== true");
          this.profilesFiltered.push(this.profiles2[i]);
        }
        console.log("Profile filtered", this.profilesFiltered);
      }
    }
    if (this.profilesFiltered.length > 0) {
      this.showFilters = true;
      this.loadPhoto2();
    }
    else this.showFilters = false;
  }

  myFunction(item) {
    console.log("item", item);
  }

  loadPhoto() {
    this.profiles2 = this.sea.getProfiles();
    console.log("profiles", this.profiles2);
    console.log(this.profiles2.length);
    for (let i = 0; i < this.profiles2.length; i++) {
      var index: number;
      index = JSON.parse(this.profiles2[i].avatar);
      console.log("index", index);
      if (index === undefined) {
        this.photoArray.push(null);
        this.avatarShow.push(null);
      } else {
        if (index != null) {
          console.log("index1=", index);
          this.singlephoto = this.getphoto.photoServiceGetPhoto(index).subscribe(result => {
            this.createImageFromBlob(result);
            this.avatarShow.push("good");
          });
          console.log("photoarray", this.photoArray);
        }
      }
    }
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.photoArray.push(this.sanitizer.bypassSecurityTrustUrl(reader.result));
    }, false);
    if (image) {
      let binaryData = [];
      binaryData.push(image);
      reader.readAsDataURL(new Blob(binaryData, {type: "image/png"}));
    }
  }

  loadPhoto2() {
    for (let i = 0; i < this.profilesFiltered.length;i++) {
      var index2: number;
      index2 = JSON.parse(this.profilesFiltered[i].avatar);
      if (index2 === undefined) {
        this.photoArray2.push(null);
        this.avatarShow2.push(null);
      } else {
        this.singlephoto = this.getphoto.photoServiceGetPhoto(index2).subscribe(result => {
          this.createImageFromBlob3(result);
          this.avatarShow2.push("good");
        });
      }
    }
  }


  createImageFromBlob2(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.photoArray2.push(this.sanitizer.bypassSecurityTrustUrl(reader.result));
    }, false);
    if (image) {
      let binaryData = [];
      binaryData.push(image);
      reader.readAsDataURL(new Blob(binaryData, {type: "image/png"}));
    }
  }
  createImageFromBlob3(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.photoArray3.push(this.sanitizer.bypassSecurityTrustUrl(reader.result));
    }, false);
    if (image) {
      let binaryData = [];
      binaryData.push(image);
      reader.readAsDataURL(new Blob(binaryData, {type: "image/png"}));
    }
  }
}

