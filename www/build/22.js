webpackJsonp([22],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventPageModule", function() { return AddEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_event__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddEventPageModule = /** @class */ (function () {
    function AddEventPageModule() {
    }
    AddEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_event__["a" /* AddEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_event__["a" /* AddEventPage */]),
            ],
        })
    ], AddEventPageModule);
    return AddEventPageModule;
}());

//# sourceMappingURL=add-event.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_profile_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_trainingrezerwation_service__ = __webpack_require__(214);
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
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEventPage = /** @class */ (function () {
    function AddEventPage(setTR, navCtrl, navParams, provilconfig, ProfillRest) {
        this.setTR = setTR;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provilconfig = provilconfig;
        this.ProfillRest = ProfillRest;
        this.item = {};
        this.tr = {};
        this.treningRezerwation = {};
        this.setTrening = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            namess: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            surnamess: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            phoness: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            emailss: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            commentss: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
        });
        this.id = this.provilconfig.getId2();
        this.trId = this.provilconfig.getTRId();
        this.treningInitalize();
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
    };
    AddEventPage.prototype.getUsers = function (id) {
        var _this = this;
        this.ProfillRest.getProfile(id).subscribe(function (result) {
            Object.assign(_this.item, result);
        });
    };
    AddEventPage.prototype.treningInitalize = function () {
        this.setTrening = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            namess: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            surnamess: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            phoness: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            emailss: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            commentss: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
        });
    };
    ;
    AddEventPage.prototype.setTreningNew = function () {
        var _this = this;
        this.treningRezerwation.email = this.tr.email;
        this.treningRezerwation.name = this.tr.name;
        this.treningRezerwation.surname = this.tr.surname;
        this.treningRezerwation.phone = this.tr.phone;
        this.treningRezerwation.comment = this.tr.comment;
        this.treningRezerwation.id = this.trId;
        this.treningRezerwation.trainer_id = this.id;
        this.setTR.orderTraining(this.treningRezerwation).subscribe(function (result) {
            console.log("result", result);
            _this.exitCode = result;
        });
        console.log("exitcode", this.exitCode);
        this.setTrening.reset();
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\add-event\add-event.html"*/'<!--\n  Generated template for the AddEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <button ion-button>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row\n      justify-content-center>\n      <ion-col col-12 text-center style="border: 1px solid;border-radius: 5px">\n        <!--<button ion-button (click)="backtoprofiles" ></button>-->\n        <!--<ion-icon ios="ios-undo" md="md-undo"></ion-icon>-->\n        <ion-row justify-content-center>\n          <ion-col col-6="">\n            <img style="width: 200px; height: 200px;" src="./assets/imgs/silacz.jpg"/>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-book" md="md-book"></ion-icon>\n              Zapisz sie na trening.\n            </ion-card-header>\n          </ion-card>\n          <form [formGroup]="setTrening" (ngSubmit)="setTreningNew()" padding>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked>Imie :</ion-label>\n                  <ion-input type="text" placeholder="" [(ngModel)]="tr.name" formControlName="namess"\n                             required>\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked>Nazwisko</ion-label>\n                  <ion-input type="text" placeholder="" [(ngModel)]="tr.surname" formControlName="surnamess"\n                             required>\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked>Email:</ion-label>\n                  <ion-input type="text" placeholder="" [(ngModel)]="tr.email"\n                             formControlName="emailss"\n                             required>\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked>Phone:</ion-label>\n                  <ion-input type="text" placeholder="" [(ngModel)]="tr.phone"\n                             formControlName="phoness"\n                             required>\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-item>\n              <ion-label stacked>Opinia Urzytkownika</ion-label>\n              <ion-textarea placeholder="" [(ngModel)]="tr.comment"\n                            formControlName="commentss"\n                            required></ion-textarea>\n            </ion-item>\n            <ion-row>\n              <ion-col text-right>\n                <button ion-button color="secondary" color="light" type="submit" [disabled]="!setTrening.valid">Zapisz\n                  sie na trening\n                </button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__api_trainingrezerwation_service__["a" /* TrainingrezerwationService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__api_profile_service__["a" /* ProfileService */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ })

});
//# sourceMappingURL=22.js.map