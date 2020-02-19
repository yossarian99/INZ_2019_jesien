webpackJsonp([10],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilViewMenuPageModule", function() { return ProfilViewMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_view_menu__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilViewMenuPageModule = /** @class */ (function () {
    function ProfilViewMenuPageModule() {
    }
    ProfilViewMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profil_view_menu__["a" /* ProfilViewMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profil_view_menu__["a" /* ProfilViewMenuPage */]),
            ],
        })
    ], ProfilViewMenuPageModule);
    return ProfilViewMenuPageModule;
}());

//# sourceMappingURL=profil-view-menu.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilViewMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Pfofile_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_profile_service__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ArrayID} from "../../models/id-array-ns";





/**
 * Generated class for the ProfilViewMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilViewMenuPage = /** @class */ (function () {
    function ProfilViewMenuPage(ProfillRest, menuCtrl, events, sea, nav, navParams, provilconfig, profilsService, rest) {
        this.ProfillRest = ProfillRest;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.sea = sea;
        this.nav = nav;
        this.navParams = navParams;
        this.provilconfig = provilconfig;
        this.profilsService = profilsService;
        this.rest = rest;
        this.rootPage = ProfilViewMenuPage_1;
        this.searchParams = {
            loc: '',
            dysc: ''
        };
        this.Opinions = {};
        this.item = {};
        this.opinionforms = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({ Opinionss: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), opinionuser: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), ocena: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]() });
        events.subscribe('star-rating:changed', function (starRating) {
            return console.log(starRating);
        });
        this.id = this.provilconfig.getProfilById();
        console.log("id0000===", this.id);
        // Object.assign(this.item, this.item1);
        this.searchParams = this.provilconfig.searchParams;
        this.getUsers(this.id);
        this.rating_option = this.item.rating;
        // this.initializeopinionforms();
    }
    ProfilViewMenuPage_1 = ProfilViewMenuPage;
    // item: UserProfileN0c= new UserProfileN0c();
    // rating=3;
    //   gwiazdki:4;
    ProfilViewMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilViewMenuPage');
    };
    ProfilViewMenuPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    ProfilViewMenuPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    ProfilViewMenuPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ProfilViewMenuPage.prototype.Opinionform = function () {
        this.profilsService.addOponion(this.Opinions.description, this.Opinions.name, this.Opinions.email, this.Opinions.rating, this.item.name);
        console.log("opinion=", this.Opinions.description);
        console.log("opinodawca=", this.Opinions.name);
        this.opinionforms.reset();
    };
    ProfilViewMenuPage.prototype.backtoprofiles = function () {
        this.nav.pop();
    };
    ProfilViewMenuPage.prototype.getUsers = function (id) {
        var _this = this;
        console.log("id9999==", id);
        this.ProfillRest.getProfile(id).subscribe(function (result) {
            Object.assign(_this.item, result);
        });
    };
    ProfilViewMenuPage.prototype.initializeopinionforms = function () {
        this.opinionforms = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            opinionuser: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            Opinionss: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), ocena: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    };
    ProfilViewMenuPage.prototype.openPage = function (page) {
        // this.sea.addProfillViewMenu(this.item);
        //
        this.provilconfig.setId2(this.id);
        this.nav.push(page);
    };
    ProfilViewMenuPage = ProfilViewMenuPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil-view-menu',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\profil-view-menu\profil-view-menu.html"*/'<!--\n  Generated template for the ProfilViewMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n        <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="setPicture">\n  <ion-menu [content]="mycontent" [persistent]="true" [enabled]="true">\n    <ion-content>\n      <ion-list>\n        <button expand="block" color="success" ion-item (click)="openPage(\'ProfilPage\')">\n          Dane Podstawowe\n        </button>\n        <button expand="block" color="success" ion-item (click)="openPage(\'EducationPorfilPage\')">\n        Wykształcenie\n      </button>\n        <button expand="block" color="success" ion-item (click)="openPage(\'ExperienceProfillPage\')">\n          Doświadczenie\n        </button>\n\n\n        <button expand="block" color="success" ion-item (click)="openPage(\'GalleryProfilPage\')">\n          Galeria\n        </button>\n        <button expand="block"  color="success" ion-item (click)="openPage(\'OpinionProfillPage\')">\n          Opinie\n        </button> <button expand="block"  color="success" ion-item (click)="openPage(\'TreningListPage\')">\n        Zapisy na treningi\n      </button>\n\n        <button expand="block"  color="success" ion-item (click)="closeMenu()">\n          Close Menu\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav #mycontent [root]="ProfilViewMenuPage"></ion-nav>\n  <ion-grid>\n\n  </ion-grid>\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\profil-view-menu\profil-view-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__services_Pfofile_list__["a" /* ProfileListService */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]])
    ], ProfilViewMenuPage);
    return ProfilViewMenuPage;
    var ProfilViewMenuPage_1;
}());

//# sourceMappingURL=profil-view-menu.js.map

/***/ })

});
//# sourceMappingURL=10.js.map