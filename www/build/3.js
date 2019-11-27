webpackJsonp([3],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search2PageModule", function() { return Search2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search2__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Search2PageModule = /** @class */ (function () {
    function Search2PageModule() {
    }
    Search2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search2__["a" /* Search2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search2__["a" /* Search2Page */]),
            ],
        })
    ], Search2PageModule);
    return Search2PageModule;
}());

//# sourceMappingURL=search2.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the Search2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Search2Page = /** @class */ (function () {
    function Search2Page(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.genders = ["kobieta", "meszczyzna"];
        this.structure = {
            lower: 30, upper: 60
        };
        this.structure2 = {
            lower: 30, upper: 250
        };
    }
    Search2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Search2Page');
    };
    Search2Page.prototype.showRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Płeć');
        alert.addInput({
            type: 'radio',
            label: 'kobieta',
            value: 'kobieta',
            checked: true,
        });
        alert.addInput({
            type: 'radio',
            label: 'Meżczyzna',
            value: 'Meżczyzna'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present();
    };
    Search2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search2',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\search2\search2.html"*/'<!--\n  Generated template for the Search2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <button ion-button >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="searchbckground">\n\n  <ion-row>\n    <ion-col col-2>\n\n\n\n    </ion-col>\n\n    <ion-col col-8>\n<ion-row>\n  <h1>Wyniki wyszukiwania dla :</h1>\n</ion-row>\n\n\n<ion-row>\n\n\n  <ion-item  >\n    <ion-label>Dyscypliny</ion-label>\n    <ion-select [(ngModel)]="dyscyplina" >\n      <ion-option *ngFor="let   dyscyplina of Dysciplines" [value]="  dyscyplina"></ion-option>\n    </ion-select>\n  </ion-item>\n\n</ion-row>\n      <ion-row>\n        <h1>\n          W miejscowości\n        </h1>\n\n\n\n\n      </ion-row>\n\n      <ion-row >\n\n        <ion-item>\n          <ion-label fixed>Poznań</ion-label>\n\n        </ion-item>\n      </ion-row>\n<ion-row>\n<p></p>\n</ion-row>\n      <ion-row >\n        <ion-item>\n          <ion-label fixed>Miejsce</ion-label>\n          <ion-input type="text" value=""></ion-input>\n        </ion-item>\n\n      </ion-row>\n<ion-row>\n<p></p>\n</ion-row>\n<ion-row>\n\n\n  <!--<ion-item  >-->\n    <!--<ion-label>Płeć</ion-label>-->\n    <!--<ion-select [(ngModel)]="gender" >-->\n      <!--<ion-option *ngFor="let gender   of genders" [value]="gender"></ion-option>-->\n    <!--</ion-select>-->\n  <!--</ion-item>-->\n\n  <button ion-button color="buutonlight" full (click)=showRadio()  ><h2>Płec</h2></button>\n\n</ion-row>\n<ion-row>\n<p></p>\n</ion-row>\n<ion-row >\n  <ion-item>\n    <ion-label><h1>Wiek</h1> </ion-label>\n    <ion-range dualKnobs="true" [(ngModel)]="structure" min="10" max="100" step="1" snaps="true" pin="true">\n      <ion-icon range-left  name="md-square"></ion-icon>\n      <ion-icon range-right name="md-square"></ion-icon>\n    </ion-range>\n\n  </ion-item>\n</ion-row>\n<ion-row>\n  <p></p>\n</ion-row>\n\n\n\n      <ion-row >\n        <ion-item>\n          <ion-label><h1>Cena</h1> </ion-label>\n          <ion-range dualKnobs="true" [(ngModel)]="structure2" min="0" max="300" step="10" snaps="true" pin="true">\n            <ion-icon range-left  name="md-square"></ion-icon>\n            <ion-icon range-right name="md-square"></ion-icon>\n          </ion-range>\n\n        </ion-item>\n      </ion-row>\n\n<ion-row>\n  <p></p>\n</ion-row>\n        <ion-row text-right>\n<ion-col col-12>\n\n\n\n        <span>        <button ion-button clear="true" color="wyczyscbuuton">Wyczyść</button>\n            <button ion-button large color="filtrWynikow">Filtruj</button> </span>\n</ion-col>\n        </ion-row>\n\n\n\n\n    </ion-col>\n\n    <ion-col col-2>\n\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\search2\search2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Search2Page);
    return Search2Page;
}());

//# sourceMappingURL=search2.js.map

/***/ })

});
//# sourceMappingURL=3.js.map