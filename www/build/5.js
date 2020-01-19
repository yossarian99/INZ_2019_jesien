webpackJsonp([5],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNewPageModule", function() { return SearchNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_new__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchNewPageModule = /** @class */ (function () {
    function SearchNewPageModule() {
    }
    SearchNewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_new__["a" /* SearchNewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
                // IonicImageLoader,
                // SharedModule,
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_new__["a" /* SearchNewPage */]),
            ],
        })
    ], SearchNewPageModule);
    return SearchNewPageModule;
}());

//# sourceMappingURL=search-new.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Pfofile_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_profile_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_trainer_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_dyscypline_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_specificPhoto_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import {ViewprofilPage} from "../viewprofil/viewprofil";
//
/**
 * Generated class for the SearchNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchNewPage = /** @class */ (function () {
    function SearchNewPage(restdyscyp, sanitizer, getphoto, trenersearch, rest, nav, navParams, sea, configServce, provilconfig, service, alertCtrl) {
        this.restdyscyp = restdyscyp;
        this.sanitizer = sanitizer;
        this.getphoto = getphoto;
        this.trenersearch = trenersearch;
        this.rest = rest;
        this.nav = nav;
        this.navParams = navParams;
        this.sea = sea;
        this.configServce = configServce;
        this.provilconfig = provilconfig;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.photoArray = [];
        this.photoArray2 = [];
        this.binaryData = [];
        this.avatarShow = [];
        this.avatarShow2 = [];
        this.Dysciplines = [];
        this.idforms = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormGroup */]({ Town: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormControl */]() });
        this.searchParams = {
            loc: '',
            dysc: ''
        };
        this.showresult = true;
        this.profiles = [];
        this.profilesFiltered = [];
        this.genders = ["kobieta", "meżczyzna"];
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
    SearchNewPage.prototype.getDyscp = function () {
        var _this = this;
        this.restdyscyp.getDyscyplines().subscribe(function (result) {
            Object.assign(_this.Dysciplines, result);
            //  for(var i=0;i<result.length;++i){
            //    this.Dyscyplines[i]=result[i].Name;
            // }
            console.log("wczytane profils w wyszukiwaniu :");
            console.log("list of dysc =", _this.Dysciplines);
        });
    };
    SearchNewPage.prototype.change_rating = function (x) {
        this.rating = x;
    };
    SearchNewPage.prototype.logRatingChange = function (rating) {
        console.log("changed rating: ", rating);
        // do your stuff
        this.rating = rating;
    };
    SearchNewPage.prototype.getSearch = function (miasto, dyscyplina) {
        var _this = this;
        this.trenersearch.getTrainers(dyscyplina, miasto).subscribe(function (result) {
            console.log(_this.sciezka);
            if (result != undefined) {
                Object.assign(_this.profiles, result);
                console.log("avatar2", result[0].avatar);
                console.log("wczytane profils w wyszukiwaniu :");
                console.log(_this.profiles);
                _this.loadPhoto();
            }
            else {
                console.log("error showserach");
                _this.showresult = false;
            }
        });
    };
    SearchNewPage.prototype.getSearch2 = function () {
        var _this = this;
        this.rest.getProfile(1).subscribe(function (result) {
            console.log(_this.sciezka);
            if (result != undefined) {
                Object.assign(_this.profiles, result);
                console.log("wczytane profils w wyszukiwaniu :");
                console.log(_this.profiles);
            }
            else {
                console.log("error showserach");
                _this.showresult = false;
            }
        });
    };
    SearchNewPage.prototype.showForm = function () {
        this.searchParams = this.sea.getSearchParams();
        if (this.searchParams.dysc === '' && this.searchParams.loc === '') {
            this.showsearch = false;
            console.log('pola sa puste');
        }
        else {
            if (this.searchParams.dysc != '' && this.searchParams.loc != '') {
                this.BASE_URL = 'http://najlepszytrener.com.pl/api/';
                // this.GET_PROFILE = this.BASE_URL + 'profiles/';
                this.URl = this.BASE_URL + this.searchParams.dysc + '/' + this.searchParams.loc;
                this.sciezka = encodeURI(this.URl);
                this.getSearch(this.searchParams.loc, this.searchParams.dysc);
                this.showsearch = true;
            }
        }
    };
    SearchNewPage.prototype.profilsite = function (profil) {
        // this.service.addItem_object(id);
        this.provilconfig.addprofilParams(profil);
        console.log("id333==", profil.id);
        this.provilconfig.addProfilById(profil.id);
        console.log("w srodku servisu");
        this.nav.push('ProfilViewMenuPage');
    };
    SearchNewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Search2Page');
    };
    SearchNewPage.prototype.showRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present();
    };
    SearchNewPage.prototype.getAgeStr = function (dateString) {
        var myDate = new Date(dateString), now = new Date(), month_of_birth = myDate.getMonth(), day_of_birht = myDate.getDay(), year_of_birth = myDate.getFullYear(), now_month = now.getMonth(), now_day = now.getDay(), now_year = now.getFullYear(), age = now_year - year_of_birth;
        if (now_month < month_of_birth) {
            age--;
        }
        else if ((now_month == month_of_birth) && (now_day < day_of_birht)) {
            age--;
            if (age < 0) {
                age = 0;
            }
        }
        return age;
    };
    SearchNewPage.prototype.Idform = function () {
        var plecSearch = false;
        var townSearch;
        var priceSearch;
        var ageSearch = false;
        var dyscSearch = true;
        for (var i = 0; i < this.profiles.length; i++) {
            var age = this.getAgeStr(this.profiles[i].bdate);
            console.log("age", age);
            if (age >= this.structure.lower && age <= this.structure.upper)
                ageSearch = true;
            else
                ageSearch = false;
            console.log("struture", this.structure);
            console.log("structure2", this.structure2);
            console.log("profiles", this.profiles[i]);
            // Object.assign(this.profiltest, this.profiles[i]);
            // console.log("trroffer",this.profiltest.trOff);
            var offers = this.profiles[i].tr_tr;
            for (var j = 0; j < offers.length; j++) {
                if (offers[j].place == this.Town)
                    townSearch = true;
                else
                    townSearch = false;
                console.log("dys==name", offers[j].name);
                console.log("dysc name list ===", this.dyscyplina.name);
                if (offers[j].name == this.dyscyplina.name)
                    dyscSearch = true;
                else
                    dyscSearch = false;
                if (offers[j].price >= this.structure2.lower && offers[j].price <= this.structure2.upper)
                    priceSearch = true;
                else
                    priceSearch = false;
                if (this.profiles[i].gender == this.testRadioResult)
                    plecSearch = true;
                else
                    plecSearch = false;
                console.log("agesearch", ageSearch);
                console.log("dyscysearch", dyscSearch);
                console.log("plecsearch", plecSearch);
                console.log("pricesearch", priceSearch);
                console.log("townsearch", townSearch);
                if ((ageSearch && dyscSearch && plecSearch && priceSearch && townSearch) == true) {
                    console.log("splice ====== true");
                    this.profilesFiltered.push(this.profiles[i]);
                    // this.profiles.splice(i+1,1);
                }
                console.log(this.profilesFiltered);
            }
        }
        if (this.profilesFiltered.length > 0) {
            this.showFilters = true;
        }
        else
            this.showFilters = false;
    };
    SearchNewPage.prototype.loadPhoto = function () {
        var _this = this;
        for (var i = 0; i < this.profiles.length; i++) {
            var index;
            var j = void 0;
            console.log("this profiles ", this.profiles[0]);
            console.log("avatar", this.profiles[i].avatar);
            // console.log("data=",data);
            index = JSON.parse(this.profiles[i].avatar);
            if (index == undefined) {
                this.photoArray.push(null);
                this.avatarShow.push(null);
            }
            else {
                this.singlephoto = this.getphoto.photoServiceGetPhoto(index).subscribe(function (result) {
                    _this.createImageFromBlob(result);
                    _this.avatarShow.push("good");
                });
            }
            // let binaryData = [];
            // binaryData.push(this.singlephoto);
            //
            // this.photoArray.push(this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob(binaryData, {type: "application/png"}))));
            // debugger;
        }
    };
    SearchNewPage.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.photoArray.push(_this.sanitizer.bypassSecurityTrustUrl(reader.result));
        }, false);
        if (image) {
            var binaryData = [];
            binaryData.push(image);
            // this.photoArray.push(image);
            //
            // this.photoArray.push(this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob(binaryData, {type: "application/png"}))));
            reader.readAsDataURL(new Blob(binaryData, { type: "image/png" }));
            // this.photoArray.push(reader);
        }
    };
    SearchNewPage.prototype.loadPhoto2 = function () {
        var _this = this;
        for (var i = 0; i < this.profilesFiltered.length; i++) {
            var index;
            var j = void 0;
            console.log("this profiles ", this.profiles[0]);
            console.log("avatar", this.profiles[i].avatar);
            // console.log("data=",data);
            index = JSON.parse(this.profilesFiltered[i].avatar);
            if (index == undefined) {
                this.photoArray2.push(null);
                this.avatarShow2.push(null);
            }
            else {
                this.singlephoto = this.getphoto.photoServiceGetPhoto(index).subscribe(function (result) {
                    _this.createImageFromBlob2(result);
                    _this.avatarShow2.push("good");
                });
            }
            // let binaryData = [];
            // binaryData.push(this.singlephoto);
            //
            // this.photoArray.push(this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob(binaryData, {type: "application/png"}))));
            // debugger;
        }
    };
    SearchNewPage.prototype.createImageFromBlob2 = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.photoArray2.push(_this.sanitizer.bypassSecurityTrustUrl(reader.result));
        }, false);
        if (image) {
            var binaryData = [];
            binaryData.push(image);
            // this.photoArray.push(image);
            //
            // this.photoArray.push(this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob(binaryData, {type: "application/png"}))));
            reader.readAsDataURL(new Blob(binaryData, { type: "image/png" }));
            // this.photoArray.push(reader);
        }
    };
    SearchNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-new',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\search-new\search-new.html"*/'<!--\n  Generated template for the SearchNewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <button ion-button >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-12>\n\n\n\n\n\n    <!--<ion-col col-8>-->\n    <!--</ion-col>-->\n\n\n        <ion-card>\n\n\n\n        <p>Wyniki wyszukiwania dla : {{searchParams.dysc}}</p>\n        <p>Miejscowość : {{searchParams.loc}} </p>\n        <div class="ilosc">\n          <p>\n            ({{profiles.length}} wyszukiwan.)\n          </p>\n\n        </div>\n        </ion-card>\n    </ion-col>\n\n      </ion-row>\n\n\n\n\n\n      <ion-row >\n\n\n      </ion-row>\n\n      <ion-row>\n\n\n        <!--<ion-item  >-->\n        <!--<ion-label>Płeć</ion-label>-->\n        <!--<ion-select [(ngModel)]="gender" >-->\n        <!--<ion-option *ngFor="let gender   of genders" [value]="gender"></ion-option>-->\n        <!--</ion-select>-->\n        <!--</ion-item>-->\n\n        <button ion-button color="buutonlight" full (click)=showRadio()  ><h2>Płec</h2></button>\n\n      </ion-row>\n      <ion-row>\n        <p></p>\n      </ion-row>\n\n      <ion-row >\n        <ion-item>\n          <ion-label><h1>Wiek</h1> </ion-label>\n          <ion-range dualKnobs="true" [(ngModel)]="structure" min="0" max="100" step="1" snaps="true" pin="true">\n            <ion-icon range-left  name="md-square"></ion-icon>\n            <ion-icon range-right name="md-square"></ion-icon>\n          </ion-range>\n\n        </ion-item>\n      </ion-row>\n\n\n\n\n\n    <ion-row>\n        <ion-item>\n          <ion-label><h1>Cena</h1> </ion-label>\n          <ion-range dualKnobs="true" [(ngModel)]="structure2" min="0" max="300" step="10" snaps="true" pin="true">\n            <ion-icon range-left  name="md-square"></ion-icon>\n            <ion-icon range-right name="md-square"></ion-icon>\n          </ion-range>\n\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n        <p></p>\n      </ion-row>\n      <ion-row text-right>\n        <ion-col col-12>\n          <ion-row>\n\n            <ion-item  >\n              <ion-label>Dyscypliny</ion-label>\n              <ion-select [(ngModel)]=" dyscyplina"  [ngModelOptions]="{standalone: true}" >\n                <ion-option *ngFor="let  dyscyplina of  Dysciplines" [value]=" dyscyplina" >{{dyscyplina.name}}</ion-option>\n              </ion-select>\n            </ion-item>\n\n          </ion-row>\n          <form [formGroup]="idforms" (ngSubmit)=" Idform()">\n\n            <ion-row >\n              <ion-item>\n                <ion-label fixed>Miejsce</ion-label>\n                <ion-input  type="text" placeholder="Miasto..." [(ngModel)]="Town"\n                            formControlName="Town"   required></ion-input>\n              </ion-item>\n\n\n        <span>\n            <button ion-button large color="filtrWynikow">Filtruj</button> </span>\n            </ion-row>\n          </form>\n        </ion-col>\n</ion-row>\n\n    <!--</ion-col>-->\n      <!--</ion-row>-->\n\n\n\n      <!--</form>-->\n\n<!---->\n    <ion-col col-2>\n\n\n    </ion-col>\n\n\n <ion-card class="backcard">\n\n\n\n   <ion-list>\n     <ion-item-sliding *ngFor="let profil of profiles; let i = index" >\n       <ion-item>\n\n\n\n         <!--<ion-img width="60" height="60" src="./assets/imgs/avatar3.png"></ion-img>-->\n\n\n\n        <ion-card>\n          <div *ngIf="avatarShow[i]!=null">\n\n            <img style="width: 80px; height: 80px; float: left" [src]="photoArray[i]"/>\n\n\n            <div *ngIf="avatarShow[i]==null">\n\n              <ion-img style="width: 80px; height: 80px; float: left" src="./assets/imgs/avatar3.png"></ion-img>\n\n\n            </div>\n\n\n\n\n\n\n          </div>\n\n\n            <div class="avatartext">\n\n             <h1> {{profil.name}} {{profil.surname}}  </h1>\n\n\n            </div>\n<ion-row text-right>\n\n\n\n\n  <ion-col text-end>\n    ({{profil.rating}}/5)\n    <!--<ionic3-star-rating-->\n      <!--activeIcon = "ios-star"-->\n      <!--defaultIcon = "ios-star"-->\n      <!--activeColor = "#3cdaa8"-->\n      <!--defaultColor = "#d4f9ed"-->\n      <!--readonly="true"-->\n      <!--[rating]=profil.rating>-->\n    <!--</ionic3-star-rating>-->\n    <ionic3-star-rating #rating\n                        activeIcon = "ios-star"\n                        defaultIcon = "ios-star-outline"\n                        activeColor = "#488aff"\n                        defaultColor = "#f4f4f4"\n                        readonly="false"\n                        rating="3"\n                        fontSize = "32px"\n                        (ratingChanged)="logRatingChange($event)">\n    </ionic3-star-rating>\n\n\n\n\n\n  </ion-col>\n\n\n\n\n\n</ion-row>\n<ion-row text-right>\n\n  <ion-col text-end>\n\n    (0 opini)\n\n  </ion-col>\n\n\n</ion-row>\n\n\n\n\n\n          <ion-grid>\n\n          <ion-row text-start >\n            <ion-col text-right>\n\n\n              <button ion-button  color="secondary" (click)="profilsite(this.profil)">Wczytaj Profil</button>\n\n\n\n            </ion-col>\n\n          </ion-row>\n          </ion-grid>\n\n\n\n\n\n        </ion-card>\n\n  </ion-item>\n\n  </ion-item-sliding>\n  </ion-list>\n\n\n </ion-card>\n  <ion-col col-2>\n\n\n  </ion-col>\n\n\n  <ion-card class="backcard">\n<ion-card>\n<ion-row>\n\n\n\n  <h5>  <p>Wyniki Filtorwania</p>\n\n</h5>\n</ion-row>\n</ion-card>\n  <ion-card *ngIf="showFilters==false">\n\n    <ion-row>\n\n      <h5>Brak wyników Filtrowania</h5>\n    </ion-row>\n\n\n  </ion-card>\n\n\n\n\n    <ion-list *ngIf="showFilters==true">\n      <ion-item-sliding *ngFor="let profil of profilesFiltered; let i = index" >\n        <ion-item>\n\n\n\n          <!--<ion-img width="60" height="60" src="./assets/imgs/avatar3.png"></ion-img>-->\n\n\n\n          <ion-card>\n            <div>\n\n\n\n            </div>\n            <div *ngIf="avatarShow2!=null">\n\n                  <img style="width: 80px; height: 80px; float: left" [src]="photoArray[i]"/>\n\n\n                <div *ngIf="avatarShow2==null">\n\n                  <ion-img style="width: 80px; height: 80px; float: left" src="./assets/imgs/avatar3.png"></ion-img>\n\n\n                </div>\n\n\n\n\n\n\n            </div>\n            <!--<img style="width: 80px; height: 80px; float: left" [src]="photoArray[i]"/>-->\n\n            <div class="avatartext">\n\n              <h1> {{profil.name}} {{profil.surname}}  </h1>\n\n\n            </div>\n            <ion-row text-right>\n\n\n\n\n              <ion-col text-end>\n                ({{profil.rating}}/5)\n                <!--<ionic3-star-rating-->\n                <!--activeIcon = "ios-star"-->\n                <!--defaultIcon = "ios-star"-->\n                <!--activeColor = "#3cdaa8"-->\n                <!--defaultColor = "#d4f9ed"-->\n                <!--readonly="true"-->\n                <!--[rating]=profil.rating>-->\n                <!--</ionic3-star-rating>-->\n                <ionic3-star-rating #rating\n                                    activeIcon = "ios-star"\n                                    defaultIcon = "ios-star-outline"\n                                    activeColor = "#488aff"\n                                    defaultColor = "#f4f4f4"\n                                    readonly="false"\n                                    rating="3"\n                                    fontSize = "32px"\n                                    (ratingChanged)="logRatingChange($event)">\n                </ionic3-star-rating>\n\n\n\n\n\n              </ion-col>\n\n\n\n\n\n            </ion-row>\n            <ion-row text-right>\n\n              <ion-col text-end>\n\n                (0 opini)\n\n              </ion-col>\n\n\n            </ion-row>\n\n\n\n\n\n            <ion-grid>\n\n              <ion-row text-start >\n                <ion-col text-right>\n\n\n                  <button ion-button  color="secondary" (click)="profilsite(this.profil)">Wczytaj Profil</button>\n\n\n\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n\n\n\n\n\n          </ion-card>\n\n        </ion-item>\n\n      </ion-item-sliding>\n    </ion-list>\n\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\search-new\search-new.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__api_dyscypline_service__["a" /* DyscyplineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__api_dyscypline_service__["a" /* DyscyplineService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__api_specificPhoto_service__["a" /* SpecificPhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__api_specificPhoto_service__["a" /* SpecificPhotoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__api_trainer_service__["a" /* TrainerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__api_trainer_service__["a" /* TrainerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__api_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_profile_service__["a" /* ProfileService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServce */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServce */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__services_Pfofile_list__["a" /* ProfileListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_Pfofile_list__["a" /* ProfileListService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _m || Object])
    ], SearchNewPage);
    return SearchNewPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=search-new.js.map

/***/ })

});
//# sourceMappingURL=5.js.map