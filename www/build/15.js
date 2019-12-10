webpackJsonp([15],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location__["a" /* LocationPage */]),
            ],
        })
    ], LocationPageModule);
    return LocationPageModule;
}());

//# sourceMappingURL=location.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ShowSearchPage} from "../show-search/show-search";
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = /** @class */ (function () {
    function LocationPage(nav, navParams, sea) {
        this.nav = nav;
        this.navParams = navParams;
        this.sea = sea;
        this.dyscypline = this.navParams.data;
        this.towns = [
            'Warszawa',
            'Kraków',
            'Łódź',
            'Wrocław',
            'Poznań',
            'Gdańsk',
            'Szczecin',
            'Bydgoszcz',
            'Lublin',
            'Białystok',
            'Zielona Góra',
            'Dąbrowa Górnicza'
        ];
    }
    LocationPage.prototype.chanegeToUtf = function (town) {
        switch (town) {
            case 'Warszawa': return 'Warszawa';
            case 'Kraków': return 'Krak%c3%b3w';
            case 'Łódź': return 'Ł%c3%b3d%c5%ba';
            case 'Wrocław': return 'Wroc%c5%82aw';
            case 'Poznań': return 'Pozna%c5%84';
            case 'Gdańsk': return 'Gda%c5%84sk';
            case 'Szczecin': return 'Szczecin';
            case 'Bydgoszcz': return 'Bydgoszcz';
            case 'Lublin': return 'Lublin';
            case 'Białystok': return 'Bia%c5%82ystok';
            case 'Zielona Góra': return 'Zielona%20 G%c3%b3ra';
            case 'Dąbrowa Górnicza': return 'D$c4$85browa%20 G%c3%b3rnicza';
            default: return '';
        }
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.remebertown = function (town) {
        this.sea.addSearchParams(this.dyscypline, this.chanegeToUtf(town));
        this.nav.push('ShowSearchPage');
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\location\location.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Member Area\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let town of towns" (click)="remebertown(town)">\n\n      <ion-item>\n        {{town}}\n      </ion-item>\n\n      <ion-item-options>\n        <button ion-button full>\n          <ion-icon name="dyscyplin"></ion-icon>\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ })

});
//# sourceMappingURL=15.js.map