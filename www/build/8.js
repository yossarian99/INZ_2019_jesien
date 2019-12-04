webpackJsonp([8],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function() { return ProfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(259);
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

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
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



/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilPage = /** @class */ (function () {
    function ProfilPage(navCtrl, provilconfig, navParams, events, nav, sea) {
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
        this.item = sea.getProfillViewMenu();
        this.rating_option = this.item.rating;
        this.searchParams = this.provilconfig.searchParams;
    }
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    ProfilPage.prototype.backtoprofiles = function () {
        this.nav.pop();
    };
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\profil\profil.html"*/'<!--\n  Generated template for the ProfilViewMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n      <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-menu [content]="mycontent" [persistent]="true" [enabled]="true">\n\n\n\n  </ion-menu>\n\n  <ion-nav #mycontent [root]="ProfilPage"></ion-nav>\n  <ion-grid>\n\n\n    <ion-row\n      justify-content-center>\n      <ion-col col-12 text-center  style="border: 1px solid;border-radius: 5px">\n        <ion-row>\n          <ion-col text-left="">\n\n            <button ion-button (click)="backtoprofiles" >\n              <ion-icon ios="ios-undo" md="md-undo"></ion-icon>\n\n            </button>\n\n\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 text-left>\n            {{item.name}} {{item.surname}}\n\n\n          </ion-col>\n          <ion-col col-12 text-left>\n            <ionic3-star-rating\n              activeIcon = "ios-star"\n              defaultIcon = "ios-star"\n              activeColor = "#3cdaa8"\n              defaultColor = "#d4f9ed"\n              readonly="true"\n              [rating]=item.rating>\n            </ionic3-star-rating>\n\n          </ion-col>\n          <ion-col>\n            <ion-row>\n\n              <ion-col col-12="" text-left>\n                <ion-item *ngFor="let opp of item.tr_loc let i = index" (click)="onCheckItem(i)">\n\n                  {{opp.city}}\n\n\n                </ion-item>\n\n              </ion-col>\n              <ion-col col-4 text-right>\n\n                {{item.rating}}/5\n              </ion-col>\n\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-col col-7>\n\n            <img style="width: 200px; height: 200px;" src="./assets/imgs/silacz.jpg"/>\n\n\n          </ion-col>\n\n\n\n        </ion-row>\n        <ion-card-content>\n          <ion-card>\n\n            <ion-col>\n              <ion-row text-left>\n                <ion-icon name="call" style="padding-left: 5px;padding-right: 5px"></ion-icon> Numer Telefonu\n              </ion-row>\n              <ion-row text-left>\n\n                <div style="padding-left: 25px">\n                  {{item.phone}}\n\n                </div>\n\n              </ion-row>\n              <ion-row><p></p></ion-row>\n              <ion-row text-left>\n                <ion-icon name="mail" style="padding-left: 5px;padding-right: 5px"></ion-icon>\n                Email\n\n\n\n              </ion-row>\n              <ion-row text-left>\n\n                <div style="padding-left: 25px">\n                  {{item.email}}\n\n                </div>\n\n              </ion-row>\n\n              <ion-row>\n                <ion-row><p></p></ion-row>\n                <ion-col col-6 text-left="">\n                  <ion-icon ios="logo-facebook" md="logo-facebook" ></ion-icon>\n                  Facebook\n                  <ion-row>\n\n                    <ion-icon ios="logo-instagram" md="logo-instagram" ></ion-icon>\n\n\n\n                    Instagram\n\n                  </ion-row>\n\n\n\n\n\n\n                  <ion-row>\n                    <ion-icon ios="ios-at" md="md-at"></ion-icon> Strona WWW\n\n\n\n                  </ion-row>\n                </ion-col>\n                <ion-row><p></p></ion-row>\n              </ion-row>\n\n\n\n\n\n\n\n\n            </ion-col>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n              Doświadczenie i umiejetności.\n            </ion-card-header>\n            <ion-card-content>\n              <!--{{item.tr_cert}}-->\n              <ion-row>\n                <ion-col text-left="">\n                  Umiejetności.\n\n\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-left="">\n                  {{item.description}}\n\n\n\n                  <ion-icon ios="ios-checkbox" md="md-checkbox"></ion-icon> {{searchParams.dysc}}\n\n\n                </ion-col>\n              </ion-row>\n\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-school" md="md-school"></ion-icon> Wykształcenie.\n            </ion-card-header>\n            <ion-item *ngFor="let opp of item.trUni let i = index" (click)="onCheckItem(i)">\n\n              <ion-card-content>\n                <p>Uniwersytet</p>\n                {{opp.university}}\n                <p>Kierunek kształcenia</p>\n                {{opp.course}}\n                <p>Stipien wykształcenia</p>\n                {{opp.degree}}\n              </ion-card-content>\n            </ion-item>\n\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n              Galeria\n            </ion-card-header>\n            <ion-card-content>\n              Tutaj powinna znajdować sie galeria zdjeć.\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-book" md="md-book"></ion-icon>\n              Opinie\n            </ion-card-header>\n            <ion-card-content>\n\n              <ion-item *ngFor="let opp of item.tr_op let i = index" (click)="onCheckItem(i)">\n\n                <ion-card>\n                  <ion-card-header>\n                    <h5 ion-text color="danger">Opiniodawca: {{opp.name}}</h5>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <h5 ion-text color="danger">Opinia: {{opp.description}}</h5>\n                  </ion-card-content>\n                </ion-card>\n\n\n\n\n\n\n              </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n              The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n            </ion-card-content>\n          </ion-card>\n        </ion-card-content>\n      </ion-col>\n\n\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _f || Object])
    ], ProfilPage);
    return ProfilPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=profil.js.map

/***/ })

});
//# sourceMappingURL=8.js.map