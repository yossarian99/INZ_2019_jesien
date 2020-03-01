webpackJsonp([9],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function() { return ProfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilPageModule = /** @class */ (function () {
    function ProfilPageModule() {
    }
    ProfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profil__["a" /* ProfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profil__["a" /* ProfilPage */]),
            ],
        })
    ], ProfilPageModule);
    return ProfilPageModule;
}());

//# sourceMappingURL=profil.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
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
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(ProfillRest, navCtrl, provilconfig, navParams, events, nav, sea) {
        this.ProfillRest = ProfillRest;
        this.navCtrl = navCtrl;
        this.provilconfig = provilconfig;
        this.navParams = navParams;
        this.events = events;
        this.nav = nav;
        this.sea = sea;
        this.item = {};
        this.searchParams = {
            loc: '',
            dysc: ''
        };
        events.subscribe('star-rating:changed', function (starRating) {
            return console.log(starRating);
        });
        this.id = this.provilconfig.getId2();
        this.getUsers(this.id);
        this.rating_option = this.item.rating;
        // this.searchParams = this.provilconfig.searchParams;
        // this.dyscyumbers=this.getsycyplinsNumberDiv2();
        console.log("tr_dysc==", this.item.tr_disc);
        console.log("item==", this.item);
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage.prototype.backtoprofiles = function () {
        this.nav.pop();
    };
    ProfilPage.prototype.getUsers = function (id) {
        var _this = this;
        this.ProfillRest.getProfile(id).subscribe(function (result) {
            Object.assign(_this.item, result);
            console.log("dyscyplines22222==", _this.item.tr_disc);
            _this.dyscyumbers = Math.floor(_this.item.tr_disc.length / 2);
            console.log("dysnumbers==", _this.dyscyumbers);
        });
    };
    ProfilPage.prototype.getsycyplinsNumberDiv2 = function () {
        return Math.floor(this.item.tr_disc.length / 2);
    };
    ProfilPage.prototype.onCheckItem = function () { };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\profil\profil.html"*/'<!--\n  Generated template for the ProfilViewMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n      <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-menu [content]="mycontent" [persistent]="true" [enabled]="true">\n\n\n\n  </ion-menu>\n\n  <ion-nav #mycontent [root]="ProfilPage"></ion-nav>\n  <ion-grid>\n\n\n    <ion-row>\n      justify-content-center>\n      <ion-col col-12 text-center  style="border: 1px solid;border-radius: 5px">\n        <ion-item>\n\n\n        <ion-row>\n          <ion-col text-left="">\n\n            <button ion-button (click)="backtoprofiles" >\n              <ion-icon ios="ios-undo" md="md-undo"></ion-icon>\n\n            </button>\n\n\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 text-left>\n            {{item.name}} {{item.surname}}\n\n\n          </ion-col>\n          <ion-col col-12 text-left>\n            <ionic3-star-rating\n              activeIcon = "ios-star"\n              defaultIcon = "ios-star"\n              activeColor = "#3cdaa8"\n              defaultColor = "#d4f9ed"\n              readonly="true"\n              [rating]=item.rating>\n            </ionic3-star-rating>\n\n          </ion-col>\n          <ion-col>\n            <ion-row>\n\n              <ion-col col-12="" text-left>\n                <!--<ion-item *ngFor="let opp of item.tr_loc let i = index" (click)="onCheckItem(i)">-->\n\n                  <!--{{opp.city}}-->\n\n\n                <!--</ion-item>-->\n\n              </ion-col>\n              <ion-col col-4 text-right>\n\n                {{item.rating}}/5\n              </ion-col>\n\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-col col-6="" >\n\n            <img style="width: 200px; height: 200px;" src="./assets/imgs/silacz.jpg"/>\n\n\n          </ion-col>\n\n\n\n        </ion-row>\n        <ion-card-content>\n          <ion-card>\n\n            <ion-col>\n              <ion-row text-left>\n                <ion-icon name="call" style="padding-left: 5px;padding-right: 5px"></ion-icon> Numer Telefonu\n              </ion-row>\n              <ion-row text-left>\n\n                <div style="padding-left: 25px">\n                  {{item.phone}}\n\n                </div>\n\n              </ion-row>\n              <ion-row><p></p></ion-row>\n              <ion-row text-left>\n                <ion-icon name="mail" style="padding-left: 5px;padding-right: 5px"></ion-icon>\n                Email\n              </ion-row>\n\n\n\n\n\n              <ion-row text-left>\n\n                <div style="padding-left: 25px">\n                  {{item.email}}\n\n                </div>\n\n              </ion-row>\n              <ion-row>\n\n\n                <p></p></ion-row>\n                <ion-row text-left="">\n                  <ion-icon style="padding-left: 5px;padding-right: 5px" ios="logo-facebook" md="logo-facebook" ></ion-icon>\n                  Facebook:\n                </ion-row>\n                  <ion-row text-left>\n\n                    <div style="padding-left: 25px">\n                      {{item.facebook}}\n\n                    </div>\n\n                  </ion-row>\n\n\n                    <ion-row text-left="">\n\n\n                    <ion-icon style="padding-left: 5px;padding-right: 5px" ios="logo-instagram" md="logo-instagram" ></ion-icon>\n                      Instagram:\n                    </ion-row>\n\n                    <ion-row text-left>\n\n                      <div style="padding-left: 25px">\n                        {{item.instagram}}\n\n                      </div>\n                    </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n                  <ion-row text-left="">\n                    <ion-icon style="padding-left: 5px;padding-right: 5px" ios="ios-at" md="md-at"></ion-icon>\n                    Strona WWW:\n                  </ion-row>\n              <ion-row text-left="">\n                    <div style="padding-left: 25px">\n                     {{item.page}}\n\n                    </div>\n                  </ion-row>\n\n\n\n\n\n\n\n                </ion-col>\n                <ion-row><p></p></ion-row>\n\n\n\n          </ion-card>\n        </ion-card-content>\n          </ion-item>\n      </ion-col>\n\n\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]])
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ })

});
//# sourceMappingURL=9.js.map