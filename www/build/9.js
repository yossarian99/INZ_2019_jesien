webpackJsonp([9],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilViewMenuPageModule", function() { return ProfilViewMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil_view_menu__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilViewMenuPageModule = /** @class */ (function () {
    function ProfilViewMenuPageModule() {
    }
    ProfilViewMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profil_view_menu__["a" /* ProfilViewMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profil_view_menu__["a" /* ProfilViewMenuPage */]),
            ],
        })
    ], ProfilViewMenuPageModule);
    return ProfilViewMenuPageModule;
}());

//# sourceMappingURL=profil-view-menu.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilViewMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_Pfofile_list__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_profile_service__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {ArrayID} from "../../models/id-array-ns";





/**
 * Generated class for the ProfilViewMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilViewMenuPage = /** @class */ (function () {
    function ProfilViewMenuPage(ProfillRest, menuCtrl, events, sea, nav, navParams, provilconfig, profilsService, rest) {
        this.ProfillRest = ProfillRest;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.sea = sea;
        this.nav = nav;
        this.navParams = navParams;
        this.provilconfig = provilconfig;
        this.profilsService = profilsService;
        this.rest = rest;
        this.rootPage = ProfilViewMenuPage_1;
        this.searchParams = {
            loc: '',
            dysc: ''
        };
        this.Opinions = {};
        this.item = {};
        this.opinionforms = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({ Opinionss: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), opinionuser: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), ocena: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]() });
        events.subscribe('star-rating:changed', function (starRating) {
            return console.log(starRating);
        });
        this.id = this.provilconfig.getProfilById();
        // Object.assign(this.item, this.item1);
        this.searchParams = this.provilconfig.searchParams;
        this.getUsers(this.id);
        this.rating_option = this.item.rating;
        // this.initializeopinionforms();
    }
    ProfilViewMenuPage_1 = ProfilViewMenuPage;
    // item: UserProfileN0c= new UserProfileN0c();
    // rating=3;
    //   gwiazdki:4;
    ProfilViewMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilViewMenuPage');
    };
    ProfilViewMenuPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    ProfilViewMenuPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    ProfilViewMenuPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ProfilViewMenuPage.prototype.Opinionform = function () {
        this.profilsService.addOponion(this.Opinions.description, this.Opinions.name, this.Opinions.email, this.Opinions.rating, this.item.name);
        console.log("opinion=", this.Opinions.description);
        console.log("opinodawca=", this.Opinions.name);
        this.opinionforms.reset();
    };
    ProfilViewMenuPage.prototype.backtoprofiles = function () {
        this.nav.pop();
    };
    ProfilViewMenuPage.prototype.getUsers = function (id) {
        var _this = this;
        this.id = 1;
        this.ProfillRest.getProfile(this.id).subscribe(function (result) {
            Object.assign(_this.item, result);
        });
    };
    ProfilViewMenuPage.prototype.initializeopinionforms = function () {
        this.opinionforms = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            opinionuser: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            Opinionss: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](), ocena: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    };
    ProfilViewMenuPage.prototype.openPage = function (page) {
        this.sea.addProfillViewMenu(this.item);
        //
        this.nav.push(page);
    };
    ProfilViewMenuPage = ProfilViewMenuPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil-view-menu',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\profil-view-menu\profil-view-menu.html"*/'<!--\n  Generated template for the ProfilViewMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n        <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-menu [content]="mycontent" [persistent]="true" [enabled]="true">\n    <ion-content>\n      <ion-list>\n        <button expand="block" color="success" ion-item (click)="openPage(\'ProfilPage\')">\n          Dane Podstawowe\n        </button>\n        <button expand="block" color="success" ion-item (click)="openPage(\'EducationPorfilPage\')">\n        Wykształcenie\n      </button>\n        <button expand="block" color="success" ion-item (click)="openPage(\'ExperienceProfillPage\')">\n          Doświadczenie\n        </button>\n        <button expand="block"  color="success" ion-item (click)="openPage(\'PlacesProfilPage\')">\n          Miejsca\n        </button>\n        <button expand="block" color="success" ion-item (click)="openPage(\'PriceListProfillPage\')">\n          Cennik\n        </button>\n        <button expand="block" color="success" ion-item (click)="openPage(\'GalleryProfilPage\')">\n          Galeria\n        </button>\n        <button expand="block"  color="success" ion-item (click)="openPage(\'OpinionProfillPage\')">\n          Opinie\n        </button> <button expand="block"  color="success" ion-item (click)="openPage(\'CallendarProfillPage\')">\n        Kalendarz\n      </button>\n\n        <button expand="block"  color="success" ion-item (click)="closeMenu()">\n          Close Menu\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav #mycontent [root]="ProfilViewMenuPage"></ion-nav>\n  <ion-grid>\n\n\n    <ion-row\n      justify-content-center>\n      <ion-col col-12 text-center  style="border: 1px solid;border-radius: 5px">\n        <ion-row>\n          <ion-col text-left="">\n\n            <button ion-button (click)="backtoprofiles" >\n              <ion-icon ios="ios-undo" md="md-undo"></ion-icon>\n\n            </button>\n\n\n          </ion-col>\n\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 text-left>\n            {{item.name}} {{item.surname}}\n\n\n          </ion-col>\n          <ion-col col-12 text-left>\n            <ionic3-star-rating\n              activeIcon = "ios-star"\n              defaultIcon = "ios-star"\n              activeColor = "#3cdaa8"\n              defaultColor = "#d4f9ed"\n              readonly="true"\n              [rating]=item.rating>\n            </ionic3-star-rating>\n\n          </ion-col>\n          <ion-col>\n            <ion-row>\n\n              <ion-col col-12="" text-left>\n                <ion-item *ngFor="let opp of item.trLoc let i = index" (click)="onCheckItem(i)">\n\n                  {{opp.city}}\n\n\n                </ion-item>\n\n              </ion-col>\n              <ion-col col-4 text-right>\n\n                {{item.rating}}/5\n              </ion-col>\n\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-col col-7>\n\n            <img style="width: 200px; height: 200px;" src="./assets/imgs/silacz.jpg"/>\n\n\n          </ion-col>\n\n\n\n        </ion-row>\n        <ion-card-content>\n          <ion-card>\n\n            <ion-col>\n              <ion-row text-left>\n                <ion-icon name="call" style="padding-left: 5px;padding-right: 5px"></ion-icon> Numer Telefonu\n              </ion-row>\n              <ion-row text-left>\n\n                <div style="padding-left: 25px">\n                  {{item.phone}}\n\n                </div>\n\n              </ion-row>\n              <ion-row><p></p></ion-row>\n              <ion-row text-left>\n                <ion-icon name="mail" style="padding-left: 5px;padding-right: 5px"></ion-icon>\n                Email\n\n\n\n              </ion-row>\n              <ion-row text-left>\n\n                <div style="padding-left: 25px">\n                  {{item.email}}\n\n                </div>\n\n              </ion-row>\n\n              <ion-row>\n                <ion-row><p></p></ion-row>\n                <ion-col col-6 text-left="">\n                  <ion-icon ios="logo-facebook" md="logo-facebook" ></ion-icon>\n                  Facebook\n                  <ion-row>\n\n                    <ion-icon ios="logo-instagram" md="logo-instagram" ></ion-icon>\n\n\n\n                    Instagram\n\n                  </ion-row>\n\n\n\n\n\n\n                  <ion-row>\n                    <ion-icon ios="ios-at" md="md-at"></ion-icon> Strona WWW\n\n\n\n                  </ion-row>\n                </ion-col>\n                <ion-row><p></p></ion-row>\n              </ion-row>\n\n\n\n\n\n\n\n\n            </ion-col>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-bookmark" md="md-bookmark"></ion-icon>\n              Doświadczenie i umiejetności.\n            </ion-card-header>\n            <ion-card-content>\n              <!--{{item.tr_cert}}-->\n              <ion-row>\n                <ion-col text-left="">\n                  Umiejetności.\n\n\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-left="">\n                  {{item.description}}\n\n\n\n                  <ion-icon ios="ios-checkbox" md="md-checkbox"></ion-icon> {{searchParams.dysc}}\n\n\n                </ion-col>\n              </ion-row>\n\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-school" md="md-school"></ion-icon> Wykształcenie.\n            </ion-card-header>\n            <ion-item *ngFor="let opp of item.trUni let i = index" (click)="onCheckItem(i)">\n\n              <ion-card-content>\n                <p>Uniwersytet</p>\n                {{opp.university}}\n                <p>Kierunek kształcenia</p>\n                {{opp.course}}\n                <p>Stipien wykształcenia</p>\n                {{opp.degree}}\n              </ion-card-content>\n            </ion-item>\n\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n              Galeria\n            </ion-card-header>\n            <ion-card-content>\n              Tutaj powinna znajdować sie galeria zdjeć.\n            </ion-card-content>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-icon ios="ios-book" md="md-book"></ion-icon>\n              Opinie\n            </ion-card-header>\n            <ion-card-content>\n\n              <ion-item *ngFor="let opp of item.trOp let i = index" (click)="onCheckItem(i)">\n\n                <ion-card>\n                  <ion-card-header>\n                    <h5 ion-text color="danger">Opiniodawca: {{opp.name}}</h5>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <h5 ion-text color="danger">Opinia: {{opp.description}}</h5>\n                  </ion-card-content>\n                </ion-card>\n\n\n\n\n\n\n              </ion-item>\n\n\n\n\n\n\n\n              <form [formGroup]="opinionforms"  (ngSubmit)="Opinionform()" padding>\n\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label stacked>Imie :</ion-label>\n                      <ion-input type="text" placeholder="" [(ngModel)]="Opinions.name" formControlName="opinionuser"\n                                 required>\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label stacked>Email:</ion-label>\n                      <ion-input type="text" placeholder="" [(ngModel)]="Opinions.email" formControlName="email"\n                                 required>\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label stacked>Ocena:</ion-label>\n                      <ion-input type="number" placeholder="" [(ngModel)]="Opinions.rating" formControlName="ocena"\n                                 required>\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n\n                <ion-item>\n                  <ion-label  stacked>Opinia Urzytkownika</ion-label>\n                  <ion-textarea placeholder="" [(ngModel)]="Opinions"\n                                formControlName="Opinionss"\n                                required></ion-textarea>\n\n                </ion-item>\n                <ion-row>\n                  <ion-col text-right>\n\n                    <button ion-button color="secondary"color="light" type="submit"[disabled]="! opinionforms.valid">Dodaj Opinie</button>\n\n\n                  </ion-col>\n\n\n                </ion-row>\n\n\n\n              </form>\n\n\n\n\n\n              The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n            </ion-card-content>\n          </ion-card>\n        </ion-card-content>\n      </ion-col>\n\n\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\profil-view-menu\profil-view-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_search_service_search_service__["a" /* SearchServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__services_Pfofile_list__["a" /* ProfileListService */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]])
    ], ProfilViewMenuPage);
    return ProfilViewMenuPage;
    var ProfilViewMenuPage_1;
}());

//# sourceMappingURL=profil-view-menu.js.map

/***/ })

});
//# sourceMappingURL=9.js.map