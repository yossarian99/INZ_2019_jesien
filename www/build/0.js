webpackJsonp([0],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPrimaryInfoPageModule", function() { return EditPrimaryInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_primary_info__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPrimaryInfoPageModule = /** @class */ (function () {
    function EditPrimaryInfoPageModule() {
    }
    EditPrimaryInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_primary_info__["a" /* EditPrimaryInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_primary_info__["a" /* EditPrimaryInfoPage */]),
            ],
        })
    ], EditPrimaryInfoPageModule);
    return EditPrimaryInfoPageModule;
}());

//# sourceMappingURL=edit-primary-info.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPrimaryInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Gender__ = __webpack_require__(452);
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
 * Generated class for the EditPrimaryInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPrimaryInfoPage = /** @class */ (function () {
    function EditPrimaryInfoPage(navCtrl, navParams, alertCtrl, rest, rest2) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.rest = rest;
        this.rest2 = rest2;
        this.formEditPrimaryInfo = {};
        this.m = new __WEBPACK_IMPORTED_MODULE_5__models_Gender__["a" /* plec2 */]('m', 'Meżczyzna');
        this.k = new __WEBPACK_IMPORTED_MODULE_5__models_Gender__["a" /* plec2 */]('k', 'Kobieta');
        this.genders = [this.m, this.k];
        this.initializeformEditPrimaryInfo();
    }
    EditPrimaryInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPrimaryInfoPage');
    };
    EditPrimaryInfoPage.prototype.initializeformEditPrimaryInfo = function () {
        this.primaryinfo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            imie: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), nazwisko: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), dataurodzenia: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            plec: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), miasto: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), telefon: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), instagram: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            facebook: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), stronaWWW: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), gender: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
        });
    };
    EditPrimaryInfoPage.prototype.showRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Płeć');
        alert.addInput({
            type: 'radio',
            label: 'kobieta',
            value: 'k',
            checked: true,
        });
        alert.addInput({
            type: 'radio',
            label: 'Meżczyzna',
            value: 'm'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
                _this.formEditPrimaryInfo.plec = _this.testRadioResult;
            }
        });
        alert.present();
    };
    EditPrimaryInfoPage.prototype.primaryinfoON = function () {
        this.idTrainer = 4;
        var data = {
            "name": this.formEditPrimaryInfo.imie,
            "surname": this.formEditPrimaryInfo.nazwisko,
            "gender": this.gender,
            "bdatel": this.formEditPrimaryInfo.dataurodzenia,
            "phone": this.formEditPrimaryInfo.telefon,
            "facebook": this.formEditPrimaryInfo.facebook,
            "instagram": this.formEditPrimaryInfo.instagram,
            "page": this.formEditPrimaryInfo.stronaWWW,
            "trainer_id": this.idTrainer,
        };
        this.token2 = this.getToken();
        console.log(data);
        this.rest2.editPrimaryInfo(data);
        this.primaryinfo.reset();
    };
    EditPrimaryInfoPage.prototype.getToken = function () {
        var token = document.querySelector('meta[property="csrf-token"]')['content'];
        return token;
    };
    EditPrimaryInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-primary-info',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\edit-primary-info\edit-primary-info.html"*/'<!--\n  Generated template for the EditPrimaryInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <button ion-button >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title  >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-12="" text-center  style="border: 1px solid;border-radius: 5px">\n        <ion-row justify-content-start="">\n          Edycja Profilu\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n\n\n<form [formGroup]=" primaryinfo"  (ngSubmit)="primaryinfoON()" >\n          <ion-list>\n            <!--<ion-list>-->\n\n\n            <!--<ion-radio-group>-->\n              <!--<ion-list-header>-->\n                <!--<ion-label>Płeć</ion-label>-->\n              <!--</ion-list-header>-->\n\n              <!--<ion-item>-->\n                <!--<ion-label>kobieta</ion-label>-->\n                <!--<ion-radio slot="start" value="k" checked></ion-radio>-->\n              <!--</ion-item>-->\n\n              <!--<ion-item>-->\n                <!--<ion-label>Mezczyzna</ion-label>-->\n                <!--<ion-radio slot="start" value="m"></ion-radio>-->\n              <!--</ion-item>-->\n\n            <!--</ion-radio-group>  </ion-list>-->\n\n            <!--<ion-item>-->\n\n              <!--<button ion-button color="buutonlight" full (click)=showRadio()  ><h2>Płec</h2></button>-->\n            <!--</ion-item>-->\n            <!--<ion-list radio-group formControlName="gender" name="radio" >-->\n              <!--<ion-list-header>Płeć</ion-list-header>-->\n              <!--<ion-item  *ngFor="let item of genders">-->\n                <!--<ion-label >{{item.value}}</ion-label>-->\n                <!--<ion-radio (ionSelect)="select(item.key)" ></ion-radio>-->\n              <!--</ion-item>-->\n            <!--<ion-item  >-->\n              <!--<ion-label>Płeć</ion-label>-->\n              <!--<ion-select [(ngModel)]="gender" >-->\n                <!--<ion-option *ngFor="let item   of genders" value="{{item.key}}">{{item.value}} </ion-option>-->\n              <!--</ion-select>-->\n            <!--</ion-item>-->\n            <!--<ion-item  >-->\n              <!--<ion-list radio-group [(ngModel)]="gender" formControlName="gender">-->\n                <!--<ion-label>Płeć</ion-label>-->\n                <!--<ion-item *ngFor="let item of genders">-->\n                  <!--<ion-label>{{item.value}}</ion-label>-->\n                  <!--<ion-radio [value]=item.key></ion-radio>-->\n                <!--</ion-item>-->\n              <!--</ion-list>-->\n            <!--</ion-item>-->\n\n            <ion-list radio-group [(ngModel)]="gender" [ngModelOptions]="{standalone: true}">\n\n              <ion-list-header>\n                Podaj płeć\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Meżczyzna</ion-label>\n                <ion-radio value="m"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Kobieta</ion-label>\n                <ion-radio value="k"></ion-radio>\n              </ion-item>\n            </ion-list>\n              <ion-item>\n              <ion-input type="text" placeholder="Imię:" [(ngModel)]="formEditPrimaryInfo.imie"\n                         formControlName="imie"   required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Nazwisko:" [(ngModel)]="formEditPrimaryInfo.nazwisko"\n                         formControlName="nazwisko"   required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Data urodzenia" [(ngModel)]="formEditPrimaryInfo.dataurodzenia"\n                         formControlName="dataurodzenia"   required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Miasto" [(ngModel)]="formEditPrimaryInfo.miasto"\n                         formControlName="miasto"   required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Telefon" [(ngModel)]="formEditPrimaryInfo.telefon"\n                         formControlName="telefon"   required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Instagram" [(ngModel)]="formEditPrimaryInfo.instagram"\n                         formControlName="instagram"   required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Facebook" [(ngModel)]="formEditPrimaryInfo.facebook"\n                         formControlName="facebook"   required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Strona WWW" [(ngModel)]="formEditPrimaryInfo.stronaWWW"\n                         formControlName="stronaWWW"   required></ion-input>\n            </ion-item>\n            <ion-item>\n              <button ion-button color="secondary" type="submit" [disabled]="!primaryinfo.valid">Zapisz</button>\n            </ion-item>\n\n\n          </ion-list>\n       </form>\n      </ion-col>\n    </ion-row>\n\n\n</ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\edit-primary-info\edit-primary-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_config_service_config_service__["a" /* ConfigServce */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], EditPrimaryInfoPage);
    return EditPrimaryInfoPage;
}());

//# sourceMappingURL=edit-primary-info.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return plec2; });
var plec2 = /** @class */ (function () {
    function plec2(plec, nazwa) {
        this.key = plec;
        this.value = nazwa;
    }
    return plec2;
}());

//# sourceMappingURL=Gender.js.map

/***/ })

});
//# sourceMappingURL=0.js.map