webpackJsonp([17],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceProfillPageModule", function() { return ExperienceProfillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experience_profill__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExperienceProfillPageModule = /** @class */ (function () {
    function ExperienceProfillPageModule() {
    }
    ExperienceProfillPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__experience_profill__["a" /* ExperienceProfillPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__experience_profill__["a" /* ExperienceProfillPage */]),
            ],
        })
    ], ExperienceProfillPageModule);
    return ExperienceProfillPageModule;
}());

//# sourceMappingURL=experience-profill.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceProfillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_profile_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__ = __webpack_require__(133);
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
 * Generated class for the ExperienceProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExperienceProfillPage = /** @class */ (function () {
    function ExperienceProfillPage(nav, sea, navParams, ProfillRest, provilconfig) {
        this.nav = nav;
        this.sea = sea;
        this.navParams = navParams;
        this.ProfillRest = ProfillRest;
        this.provilconfig = provilconfig;
        this.item = {};
        this.id = this.provilconfig.getId2();
        this.getUsers(this.id);
    }
    ExperienceProfillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExperienceProfillPage');
    };
    ExperienceProfillPage.prototype.backtoprofiles = function () {
        this.nav.pop();
    };
    ExperienceProfillPage.prototype.getUsers = function (id) {
        var _this = this;
        this.ProfillRest.getProfile(id).subscribe(function (result) {
            Object.assign(_this.item, result);
        });
    };
    ExperienceProfillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-experience-profill',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\experience-profill\experience-profill.html"*/'<!--\n  Generated template for the ExperienceProfillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n      <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <!--<button ion-button menuToggle>-->\n      <!--<ion-icon name="menu"></ion-icon>-->\n    <!--</button>-->\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--<button ion-button (click)="backtoprofiles" ></button>-->\n    <!--<ion-icon ios="ios-undo" md="md-undo"></ion-icon>-->\n    <ion-row justify-content-center>\n      <ion-col col-6="" >\n\n        <img style="width: 200px; height: 200px;" src="./assets/imgs/silacz.jpg"/>\n\n\n      </ion-col>\n\n\n\n    </ion-row>\n  <ion-row>\n    <ion-card>\n\n      <ion-card-header>\n        <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n        Doświadczenie i umiejetności.\n      </ion-card-header>\n      <ion-card-content>\n        <!--{{item.tr_cert}}-->\n        <ion-row>\n          <ion-col text-left="">\n            Umiejetności.\n\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n\n\n\n          <ion-col col-12="">\n\n\n\n            <ion-item *ngFor="let dyscc of item.tr_disc let i= index">\n\n\n\n\n\n\n              <ion-icon  ios="ios-checkbox" md="md-checkbox"></ion-icon> {{dyscc.disciplineName}}\n\n\n\n\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\experience-profill\experience-profill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__api_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */]])
    ], ExperienceProfillPage);
    return ExperienceProfillPage;
}());

//# sourceMappingURL=experience-profill.js.map

/***/ })

});
//# sourceMappingURL=17.js.map