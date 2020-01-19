webpackJsonp([3],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSearchPageModule", function() { return ShowSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_search__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowSearchPageModule = /** @class */ (function () {
    function ShowSearchPageModule() {
    }
    ShowSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_search__["a" /* ShowSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_search__["a" /* ShowSearchPage */]),
            ],
        })
    ], ShowSearchPageModule);
    return ShowSearchPageModule;
}());

//# sourceMappingURL=show-search.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(107);
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


// import {DyscyplinePage} from "../dyscypline/dyscypline";



// import {HomePage} from "../home/home";


/**
 * Generated class for the ShowSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowSearchPage = /** @class */ (function () {
    function ShowSearchPage(rest, nav, auth, navParams, configServce, restProvider, sea) {
        this.rest = rest;
        this.nav = nav;
        this.auth = auth;
        this.navParams = navParams;
        this.configServce = configServce;
        this.restProvider = restProvider;
        this.sea = sea;
        this.searchParams = {
            loc: '',
            dysc: ''
        };
        this.showresult = true;
        this.profiles = [];
        this.BASE_URL = 'http://najlepszytrener.com.pl/api/';
        this.GET_PROFILE = this.BASE_URL + 'profiles/';
        this.URl = this.GET_PROFILE + this.searchParams.dysc + '/' + this.searchParams.loc;
    }
    ShowSearchPage.prototype.getSearch = function () {
        var _this = this;
        this.rest.getProfile(1).subscribe(function (result) {
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
    ShowSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowSearchPage');
    };
    ShowSearchPage.prototype.showForm = function () {
        this.searchParams = this.sea.getSearchParams();
        if (this.searchParams.dysc === '' && this.searchParams.loc === '') {
            this.showsearch = false;
            this.nav.push('DyscyplinePage');
        }
        else {
            if (this.searchParams.dysc != '' && this.searchParams.loc != '') {
                this.getSearch();
                this.showsearch = true;
            }
        }
    };
    ShowSearchPage.prototype.changeSchow = function () {
        this.searchParams.loc = '';
        this.searchParams.dysc = '';
        this.showsearch = false;
        this.showresult = true;
    };
    ShowSearchPage.prototype.backToHome = function () {
        this.nav.push('HomePage');
    };
    ShowSearchPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    ShowSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-search',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\show-search\show-search.html"*/'<!--\n  Generated template for the ShowSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Wyszukaj Profil\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    Miasto  :  {{searchParams.loc}}\n    Dyscyplina  :  {{searchParams.dysc}}\n  </ion-item>\n\n  <form (ngSubmit)="showForm()">\n    <ion-list>\n\n\n\n      <ion-item>\n        <button ion-button color="secondary" type="submit">Wyszukaj profil</button>\n      </ion-item>\n      <ion-item>\n        <button ion-button class="register-btn" block clear (click)="changeSchow()">Zmien dane wyszukiwania</button>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button class="register-btn" block clear (click)="backToHome()">Wróc do strony głownej</button>\n      </ion-item>\n    </ion-list>\n\n  </form>\n\n\n  <form>\n\n    <ion-list>\n      <ion-item *ngIf="showsearch === true" #slidingItem>\n\n      <ion-item *ngFor="let item of profiles; let i = index" (click)="onCheckItem(i)">\n        <p>Trener Personalny </p>\n        <p>Imie: {{item.name}}</p>\n        <p>Nazwisko: {{item.surname}}</p>\n        <p>Płeć: {{item.gender}}</p>\n        <p>Numer telefonu:{{item.phone}}</p>\n        <p>Email:{{item.email}}</p>\n        <p>Opis: {{item.description}}</p>\n        <p>Data rejestracji:{{item.registerDate}}</p>\n        <p>Dyscypliny:{{item.tr_disc}}</p>\n\n        <ion-item *ngFor="let cert of item.tr_cert let i = index2" (click)="onCheckItem(i)">\n          <p> Certyfikat: </p>\n          <p>Zdobyte certyfikaty</p>\n          <p>Nazwa kursu: {{cert.name}} </p>\n          <p>Data rozpoczecia:{{cert.beginDate}} </p>\n          <p>Data zakonczenia: {{cert.endDate}}</p>\n\n        </ion-item>\n\n        <ion-item *ngFor="let uni of item.tr_uni let i = index0" (click)="onCheckItem(i)">\n          <p>Zdobyte wykształcenie</p>\n          <p>Uniwersytet : {{uni.name}}</p>\n          <p>Kierunek: {{uni.course}}</p>\n          <p>Tytuł: {{uni.degree}}</p>\n          <p>Data rozpoczecia: {{uni.beginDate}}</p>\n          <p>Data zakonczenia:{{uni.endDate}}</p>\n          <!--<p>Data utworzenia:{{uni.created_at}}</p>-->\n          <!--<p>Data modyfikacji: {{uni.updated_at}}</p>-->\n        </ion-item>\n\n        <ion-item *ngFor="let loc of item.tr_loc let i = index3" (click)="onCheckItem(i)">\n          <p>Lokalizacja</p>\n          <P>Miasto : {{loc.  place}}</P>\n\n          <P>Ostatnia data: {{loc.beginTime}}</P>\n          <P>Data utworzenie {{loc.date}}</P>\n        </ion-item>\n\n        <ion-item *ngFor="let loc of item.tr_pl let i = index4" (click)="onCheckItem(i)">\n          <p>Lokalizacja:{{loc.city}}</p>\n          <p></p>\n        </ion-item>\n\n        <ion-item *ngFor="let off of item.tr_off let i = index5" (click)="onCheckItem(i)">\n          <p>Oferta</p>\n          <p>Usługa: {{off.name}}</p>\n          <p>Cena: {{off.price}}</p>\n          <p>Maksymalna liczba klientów:{{off.maxNofClients}}</p>\n          <!--<p>Data utworzenie:{{off.created_at}}</p>-->\n          <!--<p>Data modyfikacji : {{off.updated_at}}</p>-->\n          <p></p>\n        </ion-item>\n        <ion-item *ngFor="let opp of item.tr_op let i = index6" (click)="onCheckItem(i)">\n          <p>Opinia: {{opp.description}}</p>\n          <p></p>\n          <p>Opiniodawca: {{opp.name}}</p>\n\n        </ion-item>\n      </ion-item>\n    </ion-item>\n\n\n    </ion-list>\n\n\n\n\n  </form>\n  <ion-list>\n    <ion-item *ngIf="showresult === false" #slidingItem>\n\n      <h5 ion-text color="danger">Brak wyszukiwań spełniających wybrane kryteria.</h5>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\show-search\show-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServce */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__["a" /* SearchServiceProvider */]])
    ], ShowSearchPage);
    return ShowSearchPage;
}());

//# sourceMappingURL=show-search.js.map

/***/ })

});
//# sourceMappingURL=3.js.map