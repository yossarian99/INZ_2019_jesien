webpackJsonp([22],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventPageModule", function() { return AddEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_event__ = __webpack_require__(325);
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_profile_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
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
    function AddEventPage(navCtrl, navParams, provilconfig, ProfillRest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provilconfig = provilconfig;
        this.ProfillRest = ProfillRest;
        this.item = {};
        this.setTrening = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            //Dane do posta do zapisu osoby na trening
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            surname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            comment: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
        });
        this.id = this.provilconfig.getId2();
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
            //Dane do posta do zapisu osoby na trening
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            surname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            comment: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
        });
    };
    ;
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\add-event\add-event.html"*/'<!--\n  Generated template for the AddEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <button ion-button >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title  >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n\n\n      <ion-row\n        justify-content-center>\n        <ion-col col-12 text-center  style="border: 1px solid;border-radius: 5px">\n          <!--<button ion-button (click)="backtoprofiles" ></button>-->\n          <!--<ion-icon ios="ios-undo" md="md-undo"></ion-icon>-->\n          <ion-row justify-content-center>\n            <ion-col col-6="" >\n\n              <img style="width: 200px; height: 200px;" src="./assets/imgs/silacz.jpg"/>\n\n\n            </ion-col>\n\n\n\n          </ion-row>\n          <ion-row>\n            <ion-card>\n              <ion-card-header>\n                <ion-icon ios="ios-book" md="md-book"></ion-icon>\n                Zapisz sie na trening.\n              </ion-card-header>\n\n            </ion-card>\n\n\n            <form [formGroup]="setTrening" (ngSubmit)="setTreningNew()" padding>\n\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label stacked>Imie :</ion-label>\n                    <ion-input type="text" placeholder="" [(ngModel)]="tr.name" formControlName="name"\n                               required>\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label stacked>Nazwisko</ion-label>\n                    <ion-input type="text" placeholder="" [(ngModel)]="tr.surname" formControlName="surname"\n                               required>\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label stacked>Email:</ion-label>\n                    <ion-input  type="text" placeholder="" [(ngModel)]="tr.email"\n                    formControlName="email"\n                               required>\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label stacked>Phone:</ion-label>\n                    <ion-input  type="text" placeholder="" [(ngModel)]="tr.phone"\n                    formControlName="phone"\n                    required>\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n\n              <ion-item>\n                <ion-label stacked>Telefon</ion-label>\n                <ion-textarea placeholder="" [(ngModel)]="tr.comment"\n\n                              formControlName="comment"\n                              required></ion-textarea>\n\n              </ion-item>\n              <ion-row>\n                <ion-col text-right>\n\n                  <button ion-button color="secondary" color="light" type="submit" [disabled]="! opinionforms.valid">Dodaj\n                    Opinie\n                  </button>\n\n\n                </ion-col>\n\n\n              </ion-row>\n\n\n            </form>\n\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__api_profile_service__["a" /* ProfileService */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ })

});
//# sourceMappingURL=22.js.map