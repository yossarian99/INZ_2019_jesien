webpackJsonp([2],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreningListPageModule", function() { return TreningListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trening_list__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreningListPageModule = /** @class */ (function () {
    function TreningListPageModule() {
    }
    TreningListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trening_list__["a" /* TreningListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trening_list__["a" /* TreningListPage */]),
            ],
        })
    ], TreningListPageModule);
    return TreningListPageModule;
}());

//# sourceMappingURL=trening-list.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreningListPage; });
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




var TreningListPage = /** @class */ (function () {
    function TreningListPage(navCtrl, provilconfig, navParams, ProfillRest, events, sea) {
        this.navCtrl = navCtrl;
        this.provilconfig = provilconfig;
        this.navParams = navParams;
        this.ProfillRest = ProfillRest;
        this.events = events;
        this.sea = sea;
        this.item = {};
        //
    }
    TreningListPage.prototype.ionViewDidLoad = function () {
        console.log("na mapie");
        this.id = this.provilconfig.getId2();
        this.getUsers(this.id);
        this.index = 0;
        this.setItems();
        this.showmap(this.szerokosc, this.wysokosc);
    };
    TreningListPage.prototype.getUsers = function (id) {
        var _this = this;
        this.ProfillRest.getProfile(id).subscribe(function (result) {
            Object.assign(_this.item, result);
        });
    };
    TreningListPage.prototype.showmap = function (lat, long) {
        var location = new google.maps.LatLng(lat, long);
        var options = {
            center: location,
            zoom: 10
        };
        // const map= new google.maps.Map;
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMArker(location, this.map);
    };
    TreningListPage.prototype.addMArker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    TreningListPage.prototype.Upp = function () {
        if (this.index + 1 == this.item.tr_loc.length)
            this.index = 0;
        else
            this.index = this.index + 1;
        this.localizationTemp = this.item.tr_loc[this.index];
        this.szerokosc = this.localizationTemp.latitude;
        this.wysokosc = this.localizationTemp.longitude;
    };
    TreningListPage.prototype.Down = function () {
        if (this.index == 0)
            this.index = this.item.tr_loc.length - 1;
        else
            this.index = this.index - 1;
        this.localizationTemp = this.item.tr_loc[this.index];
        this.szerokosc = this.localizationTemp.latitude;
        this.wysokosc = this.localizationTemp.longitude;
    };
    TreningListPage.prototype.setItems = function () {
        this.index = 0;
        this.localizationTemp = this.item.tr_loc[this.index];
        this.szerokosc = this.localizationTemp.latitude;
        this.wysokosc = this.localizationTemp.longitude;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], TreningListPage.prototype, "mapRef", void 0);
    TreningListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trening-list',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\trening-list\trening-list.html"*/'<!--\n  Generated template for the ProfilViewMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n      <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map id="my-map">\n\n  </div>\n  <ion-row>\n    <ion-col>\n      <button  ion-button color="secondary" [small]="" (click)="Upp()"  >Do góry</button>\n    </ion-col>\n    <ion-col>\n      <button  ion-button color="secondary" [small]="" (click)="Down()" >W dół</button>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\trening-list\trening-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__api_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_profile_service__["a" /* ProfileService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _g || Object])
    ], TreningListPage);
    return TreningListPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=trening-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map