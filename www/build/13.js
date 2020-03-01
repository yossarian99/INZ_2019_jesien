webpackJsonp([13],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionProfillPageModule", function() { return OpinionProfillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opinion_profill__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpinionProfillPageModule = /** @class */ (function () {
    function OpinionProfillPageModule() {
    }
    OpinionProfillPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opinion_profill__["a" /* OpinionProfillPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__opinion_profill__["a" /* OpinionProfillPage */]),
            ],
        })
    ], OpinionProfillPageModule);
    return OpinionProfillPageModule;
}());

//# sourceMappingURL=opinion-profill.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionProfillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_profile_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_Pfofile_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_addopinion_service__ = __webpack_require__(217);
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
 * Generated class for the OpinionProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpinionProfillPage = /** @class */ (function () {
    function OpinionProfillPage(nav, opinionService, profilsService, navParams, provilconfig, sea, ProfillRest) {
        this.nav = nav;
        this.opinionService = opinionService;
        this.profilsService = profilsService;
        this.navParams = navParams;
        this.provilconfig = provilconfig;
        this.sea = sea;
        this.ProfillRest = ProfillRest;
        this.item = {};
        this.Opinions = {};
        this.opinionSend = {};
        this.opinionforms = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            Opinionss: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            opinionuser: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            ocena: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
        });
        this.id = this.provilconfig.getId2();
        this.getUsers(this.id);
        this.initializeopinionforms();
    }
    OpinionProfillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpinionProfillPage');
    };
    OpinionProfillPage.prototype.backtoprofiles = function () {
        this.nav.pop();
    };
    OpinionProfillPage.prototype.getUsers = function (id) {
        var _this = this;
        this.ProfillRest.getProfile(id).subscribe(function (result) {
            Object.assign(_this.item, result);
            console.log("item", _this.item);
        });
    };
    OpinionProfillPage.prototype.initializeopinionforms = function () {
        this.opinionforms = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            opinionuser: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            Opinionss: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](), ocena: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]()
        });
    };
    OpinionProfillPage.prototype.Opinionform = function () {
        var _this = this;
        this.opinionSend.email = this.Opinions.email;
        this.opinionSend.name = this.Opinions.name;
        this.opinionSend.rating = this.Opinions.rating;
        this.opinionSend.trainer_id = this.id;
        this.opinionSend.description = this.Opinions.description;
        console.log("opinionsend", this.opinionSend);
        this.opinionService.addOpinion(this.opinionSend).subscribe(function (result) {
            console.log("result", result);
            _this.exitCode = result;
        });
        console.log("exitcode", this.exitCode);
        // console.log("opinodawca=", this.Opinions.name);
        this.opinionforms.reset();
    };
    OpinionProfillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opinion-profill',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\opinion-profill\opinion-profill.html"*/'<!--\n  Generated template for the ExperienceProfillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n      <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <!--<button ion-button menuToggle>-->\n    <!--<ion-icon name="menu"></ion-icon>-->\n    <!--</button>-->\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n\n\n    <ion-row\n      justify-content-center>\n      <ion-col col-12 text-center  style="border: 1px solid;border-radius: 5px">\n  <!--<button ion-button (click)="backtoprofiles" ></button>-->\n  <!--<ion-icon ios="ios-undo" md="md-undo"></ion-icon>-->\n  <ion-row justify-content-center>\n    <ion-col col-6="" >\n\n      <img style="width: 200px; height: 200px;" src="./assets/imgs/silacz.jpg"/>\n\n\n    </ion-col>\n\n\n\n  </ion-row>\n  <ion-row>\n    <ion-card>\n      <ion-card-header>\n        <ion-icon ios="ios-book" md="md-book"></ion-icon>\n        Opinie na temat trenera\n      </ion-card-header>\n      <ion-card-content>\n\n        <ion-item *ngFor="let opp of this.item.tr_op; let i = index">\n\n          <ion-card>\n            <ion-card-header>\n              <h5 ion-text color="danger">Opiniodawca: {{opp.name}}</h5>\n            </ion-card-header>\n            <ion-card-content>\n              <h5 ion-text color="danger">Opinia: {{opp.description}}</h5>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n\n    <form [formGroup]="opinionforms" (ngSubmit)="Opinionform()" padding>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>Imie :</ion-label>\n            <ion-input type="text" placeholder="" [(ngModel)]="Opinions.name" formControlName="opinionuser"\n                       required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>Email:</ion-label>\n            <ion-input type="text" placeholder="" [(ngModel)]="Opinions.email" formControlName="email"\n                       required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>Ocena:</ion-label>\n            <ion-input type="number" clearInput=true min="1" max="5" placeholder="" [(ngModel)]="Opinions.rating"\n                       formControlName="ocena"\n                       required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-item>\n        <ion-label stacked>Opinia Urzytkownika</ion-label>\n        <ion-textarea placeholder="" [(ngModel)]="Opinions.description"\n\n                      formControlName="Opinionss"\n                      required></ion-textarea>\n\n      </ion-item>\n      <ion-row>\n        <ion-col text-right>\n\n          <button ion-button color="secondary" color="light" type="submit" [disabled]="! opinionforms.valid">Dodaj\n            Opinie\n          </button>\n\n\n        </ion-col>\n\n\n      </ion-row>\n\n\n    </form>\n\n  </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\opinion-profill\opinion-profill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__api_addopinion_service__["a" /* AddopinionService */], __WEBPACK_IMPORTED_MODULE_5__services_Pfofile_list__["a" /* ProfileListService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__api_profile_service__["a" /* ProfileService */]])
    ], OpinionProfillPage);
    return OpinionProfillPage;
}());

//# sourceMappingURL=opinion-profill.js.map

/***/ })

});
//# sourceMappingURL=13.js.map