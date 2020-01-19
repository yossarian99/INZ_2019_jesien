webpackJsonp([19],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DyscyplinePageModule", function() { return DyscyplinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dyscypline__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DyscyplinePageModule = /** @class */ (function () {
    function DyscyplinePageModule() {
    }
    DyscyplinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dyscypline__["a" /* DyscyplinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dyscypline__["a" /* DyscyplinePage */]),
            ],
        })
    ], DyscyplinePageModule);
    return DyscyplinePageModule;
}());

//# sourceMappingURL=dyscypline.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DyscyplinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {LocationPage} from "../location/location";
// import {ShowSearchPage} from "../show-search/show-search";



/**
 * Generated class for the DyscyplinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DyscyplinePage = /** @class */ (function () {
    function DyscyplinePage(nav, navParams, sea, configServce, restProvider) {
        this.nav = nav;
        this.navParams = navParams;
        this.sea = sea;
        this.configServce = configServce;
        this.restProvider = restProvider;
        this.Dysciplines = [];
        this.searchParams = {
            loc: '',
            dysc: ''
        };
        this.getDyscp();
        this.searchParams = this.sea.getSearchParams();
        if (this.searchParams.dysc != '' && this.searchParams.loc != '') {
            this.nav.pop();
        }
    }
    DyscyplinePage.prototype.getDyscp = function () {
        var _this = this;
        this.configServce.getDyspyplins().subscribe(function (result) {
            Object.assign(_this.Dysciplines, result.Dysciplines);
            //  for(var i=0;i<result.length;++i){
            //    this.Dyscyplines[i]=result[i].Name;
            // }
            console.log("wczytane profils w wyszukiwaniu :");
            console.log("list of dysc =", _this.Dysciplines);
        });
    };
    DyscyplinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DyscyplinePage');
    };
    DyscyplinePage.prototype.remeberDysc = function (dysc) {
        this.nav.push('LocationPage', dysc);
    };
    DyscyplinePage.prototype.popView = function () {
        this.nav.pop();
    };
    DyscyplinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dyscypline',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\dyscypline\dyscypline.html"*/'\n\n<!--<ion-header>-->\n  <!--<ion-navbar color="dark">-->\n    <!--<ion-title>-->\n      <!--Member Area-->\n    <!--</ion-title>-->\n    <!--<ion-buttons end>-->\n      <!--<button ion-button (click)="logout()">-->\n        <!--<ion-icon name="log-out"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  <!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n\n\n\n<ion-list>\n\n  <ion-item-sliding *ngFor="let dyscyplin of Dysciplines" (click)="remeberDysc(dyscyplin.Name)">\n\n    <ion-item>\n      {{dyscyplin.Name}}\n    </ion-item>\n\n    <ion-item-options>\n      <button ion-button full>\n        <ion-icon name="dyscyplin"></ion-icon>\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n</ion-list>\n  <!--<button ion-button icon-only (click)="backToShow()" light>-->\n    <!--<ion-icon name="dyscyplin"></ion-icon>-->\n  <!--</button>-->\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\dyscypline\dyscypline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServce */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], DyscyplinePage);
    return DyscyplinePage;
}());

//# sourceMappingURL=dyscypline.js.map

/***/ })

});
//# sourceMappingURL=19.js.map