webpackJsonp([2],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreningListPageModule", function() { return TreningListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trening_list__ = __webpack_require__(345);
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreningListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_profile_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__ = __webpack_require__(106);
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
    function TreningListPage(zone, platform, navCtrl, provilconfig, navParams, ProfillRest, events, sea) {
        this.zone = zone;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.provilconfig = provilconfig;
        this.navParams = navParams;
        this.ProfillRest = ProfillRest;
        this.events = events;
        this.sea = sea;
        this.item = {};
        this.treningOffer = {};
        this.id = this.provilconfig.getId2();
        this.getUsers(this.id);
        this.index = 0;
        console.log("wysokosc", this.wysokosc);
    }
    TreningListPage.prototype.ionViewDidLoad = function () {
        console.log("na mapie");
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
            // center: location,
            center: { lat: +lat, lng: +long },
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
        var _this = this;
        if (this.index + 1 == this.item.tr_pl.length)
            this.index = 0;
        else
            this.index = this.index + 1;
        this.localizationTemp = this.item.tr_pl[this.index];
        this.szerokosc = this.localizationTemp.latitude;
        this.wysokosc = this.localizationTemp.longitude;
        // this.provilconfig.setlatitude(this.szerokosc);
        // this.provilconfig.setlongtitude((this.wysokosc));
        console.log("++++", this.item.tr_loc);
        console.log("uppp");
        console.log("szerokosc", this.szerokosc);
        console.log("wysokosc", this.wysokosc);
        console.log("index", this.index);
        this.searchOffer(this.index);
        this.checkLimitClients(this.treningOffer.clientLimit, this.treningOffer.actualClientNumber);
        this.platform.ready().then(function () {
            _this.showmap(_this.szerokosc, _this.wysokosc);
        });
        // this.events.publish('updateScreen');
    };
    TreningListPage.prototype.Down = function () {
        var _this = this;
        if (this.index == 0)
            this.index = this.item.tr_pl.length - 1;
        else
            this.index = this.index - 1;
        this.localizationTemp = this.item.tr_pl[this.index];
        this.szerokosc = this.localizationTemp.latitude;
        this.wysokosc = this.localizationTemp.longitude;
        this.searchOffer(this.index);
        this.checkLimitClients(this.treningOffer.clientLimit, this.treningOffer.actualClientNumber);
        console.log("down");
        this.platform.ready().then(function () {
            _this.showmap(_this.szerokosc, _this.wysokosc);
        });
    };
    TreningListPage.prototype.setItems = function () {
        this.index = 0;
        this.localizationTemp = this.item.tr_pl[this.index];
        this.szerokosc = this.localizationTemp.latitude;
        this.wysokosc = this.localizationTemp.longitude;
    };
    TreningListPage.prototype.searchOffer = function (index) {
        for (var i = 0; i < this.item.tr_pl.length; i++) {
            if (this.item.tr_pl[index].id == this.item.tr_tr[i].id) {
                this.treningOffer = this.item.tr_tr[i];
            }
        }
    };
    TreningListPage.prototype.checkLimitClients = function (limit, clients) {
        if (limit <= clients)
            this.limit = false;
        else
            this.limit = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TreningListPage.prototype, "mapRef", void 0);
    TreningListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trening-list',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\trening-list\trening-list.html"*/'<!--\n  Generated template for the ProfilViewMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n      <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div #map id="my-map">\n\n  </div>\n  <ion-grid>\n\n\n\n\n\n<ion-row>\n\n  <ion-col col-12="">\n<ion-row>\n\n\n      <ion-col col-6="" text-left="">\n\n          <button text-left=""  ion-button color="secondary" [small]="" (click)="Upp()"  >Do góry</button>\n\n\n      </ion-col>\n      <ion-col col-6="" text-right="">\n\n          <button text-right="" ion-button color="secondary" [small]="" (click)="Down()" >W dół</button>\n\n      </ion-col>\n</ion-row>\n    </ion-col>\n\n</ion-row>\n\n\n  <ion-row>\n  <ion-col col-12="">\n\n\n\n\n  <br>\n    Trening:{{treningOffer.name}}\n      <br>\n\n            Data:{{treningOffer.date}}\n          <br>\n\n            Godz:{{treningOffer.beginTime}}:{{treningOffer.endTime}}\n          <br>\n\n            Cena:{{treningOffer.price}}\n          <br>\n\n            Limit klientów:{{treningOffer.clientLimit}}\n          <br>\n\n            Zapisani klienci:{{treningOffer.actualClientNumber}}\n\n\n\n\n    </ion-col>\n  </ion-row>\n<ion-row>\n<ion-row>\n  <div *ngIf="limit==true ">\n<ion-row text-center="">\n\n<ion-col col-12="" text-center="">\n  <button text-center=""  ion-button color="secondary" [small]=""   >Zapisz się na trening</button>\n\n</ion-col>\n\n\n</ion-row>\n  </div>\n  <div *ngIf="limit==false ">\n<ion-item text-center="">\n  <ion-col col-12="" text-center="">\n\n    Brak wolnych miejsc.\n  </ion-col>\n\n\n\n</ion-item>\n\n\n\n  </div>\n</ion-row>\n\n\n</ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\trening-list\trening-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__api_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */]])
    ], TreningListPage);
    return TreningListPage;
}());

//# sourceMappingURL=trening-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map