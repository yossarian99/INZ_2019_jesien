webpackJsonp([4],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNewPageModule", function() { return SearchNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_new__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic3_star_rating__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { StarRatingModule } from 'ionic3-star-rating';


var SearchNewPageModule = /** @class */ (function () {
    function SearchNewPageModule() {
    }
    SearchNewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_new__["a" /* SearchNewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_image_loader__["a" /* IonicImageLoader */],
                // SharedModule,
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_new__["a" /* SearchNewPage */]),
            ],
        })
    ], SearchNewPageModule);
    return SearchNewPageModule;
}());

//# sourceMappingURL=search-new.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Pfofile_list__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_profile_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_trainer_service__ = __webpack_require__(265);
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
    function SearchNewPage(trenersearch, rest, nav, navParams, sea, configServce, provilconfig, service) {
        this.trenersearch = trenersearch;
        this.rest = rest;
        this.nav = nav;
        this.navParams = navParams;
        this.sea = sea;
        this.configServce = configServce;
        this.provilconfig = provilconfig;
        this.service = service;
        this.searchParams = {
            loc: '',
            dysc: ''
        };
        this.showresult = true;
        this.profiles = [];
        this.change_rating(4);
        this.showForm();
    }
    SearchNewPage.prototype.ionViewDidLoad = function () {
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
                console.log("wczytane profils w wyszukiwaniu :");
                console.log(_this.profiles);
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
        console.log("w srodku servisu");
        this.nav.push('ProfilViewMenuPage');
    };
    SearchNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-new',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\search-new\search-new.html"*/'<!--\n  Generated template for the SearchNewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <button ion-button >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-card class="backcard">\n   <p>Wyniki wyszukiwania dla : {{searchParams.dysc}}</p>\n   <p>Miejscowość : {{searchParams.loc}} </p>\n   <div class="ilosc">\n     <p>\n       ({{profiles.length}} wyszukiwan.)\n     </p>\n\n   </div>\n\n\n   <ion-list>\n     <ion-item-sliding *ngFor="let profil of profiles; let i = index" >\n       <ion-item>\n\n\n\n         <!--<ion-img width="60" height="60" src="./assets/imgs/avatar3.png"></ion-img>-->\n\n\n\n        <ion-card>\n\n          <img style="width: 80px; height: 80px; float: left" src="./assets/imgs/avatar2.png"/>\n\n            <div class="avatartext">\n\n             <h1> {{profil.name}} {{profil.surname}}  </h1>\n\n\n            </div>\n<ion-row text-right>\n\n\n\n\n  <ion-col text-end>\n    ({{profil.rating}}/5)\n    <!--<ionic3-star-rating-->\n      <!--activeIcon = "ios-star"-->\n      <!--defaultIcon = "ios-star"-->\n      <!--activeColor = "#3cdaa8"-->\n      <!--defaultColor = "#d4f9ed"-->\n      <!--readonly="true"-->\n      <!--[rating]=profil.rating>-->\n    <!--</ionic3-star-rating>-->\n    <ionic3-star-rating #rating\n                        activeIcon = "ios-star"\n                        defaultIcon = "ios-star-outline"\n                        activeColor = "#488aff"\n                        defaultColor = "#f4f4f4"\n                        readonly="false"\n                        rating="3"\n                        fontSize = "32px"\n                        (ratingChanged)="logRatingChange($event)">\n    </ionic3-star-rating>\n\n\n\n\n\n  </ion-col>\n\n\n\n\n\n</ion-row>\n<ion-row text-right>\n\n  <ion-col text-end>\n\n    (0 opini)\n\n  </ion-col>\n\n\n</ion-row>\n\n\n\n          <ion-card-content>\n\n\n\n\n</ion-card-content>\n\n          <ion-grid>\n\n          <ion-row text-start >\n            <ion-col text-right>\n\n\n              <button ion-button  color="secondary" (click)="profilsite(this.profil)">Wczytaj Profil</button>\n\n\n\n            </ion-col>\n\n          </ion-row>\n          </ion-grid>\n\n\n\n\n\n        </ion-card>\n  </ion-item>\n  </ion-item-sliding>\n  </ion-list>\n </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\search-new\search-new.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__api_trainer_service__["a" /* TrainerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__api_trainer_service__["a" /* TrainerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__api_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__api_profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServce */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServce */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_Pfofile_list__["a" /* ProfileListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_Pfofile_list__["a" /* ProfileListService */]) === "function" && _h || Object])
    ], SearchNewPage);
    return SearchNewPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=search-new.js.map

/***/ })

});
//# sourceMappingURL=4.js.map