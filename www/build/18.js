webpackJsonp([18],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPorfilPageModule", function() { return EducationPorfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__education_porfil__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EducationPorfilPageModule = /** @class */ (function () {
    function EducationPorfilPageModule() {
    }
    EducationPorfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__education_porfil__["a" /* EducationPorfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__education_porfil__["a" /* EducationPorfilPage */]),
            ],
        })
    ], EducationPorfilPageModule);
    return EducationPorfilPageModule;
}());

//# sourceMappingURL=education-porfil.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationPorfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_profile_service__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EducationPorfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EducationPorfilPage = /** @class */ (function () {
    function EducationPorfilPage(nav, provilconfig, navParams, sea, ProfillRest) {
        this.nav = nav;
        this.provilconfig = provilconfig;
        this.navParams = navParams;
        this.sea = sea;
        this.ProfillRest = ProfillRest;
        this.item = {};
        this.id = this.provilconfig.getId2();
        this.getUsers(this.id);
    }
    EducationPorfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EducationPorfilPage');
    };
    EducationPorfilPage.prototype.backtoprofiles = function () {
        this.nav.pop();
    };
    EducationPorfilPage.prototype.getUsers = function (id) {
        var _this = this;
        this.ProfillRest.getProfile(id).subscribe(function (result) {
            Object.assign(_this.item, result);
        });
    };
    EducationPorfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-education-porfil',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\education-porfil\education-porfil.html"*/'<!--\n  Generated template for the ExperienceProfillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n      <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <!--<button ion-button menuToggle>-->\n    <!--<ion-icon name="menu"></ion-icon>-->\n    <!--</button>-->\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title>\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!--<button ion-button (click)="backtoprofiles" ></button>-->\n  <!--<ion-icon ios="ios-undo" md="md-undo"></ion-icon>-->\n  <ion-row justify-content-center>\n    <ion-col col-6="">\n      <img style="width: 200px; height: 200px;" src="./assets/imgs/silacz.jpg"/>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-card>\n      <ion-card-header>\n        <ion-icon ios="ios-school" md="md-school"></ion-icon>\n        Wykształcenie.\n      </ion-card-header>\n      <ion-item *ngFor="let opp of item.tr_uni let i = index" (click)="onCheckItem(i)">\n        <ion-card-content>\n          <p>Uniwersytet</p>\n          {{opp.university}}\n          <p>Kierunek kształcenia</p>\n          {{opp.course}}\n          <p>Stipien wykształcenia</p>\n          {{opp.degree}}\n        </ion-card-content>\n      </ion-item>\n    </ion-card>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\education-porfil\education-porfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__api_profile_service__["a" /* ProfileService */]])
    ], EducationPorfilPage);
    return EducationPorfilPage;
}());

//# sourceMappingURL=education-porfil.js.map

/***/ })

});
//# sourceMappingURL=18.js.map