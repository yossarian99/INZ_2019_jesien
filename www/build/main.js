webpackJsonp([26],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchServiceProvider = /** @class */ (function () {
    function SearchServiceProvider() {
        this.searchParams = {
            loc: '',
            dysc: ''
        };
        this.Profilnew = {};
        this.ProfillViewMenu = {};
    }
    SearchServiceProvider.prototype.addSearchParams = function (dysc, loc) {
        this.searchParams.dysc = dysc;
        this.searchParams.loc = loc;
    };
    SearchServiceProvider.prototype.senddPhoto = function (picture) {
        this.picturePhoto = picture;
    };
    SearchServiceProvider.prototype.getPhoto = function () {
        return this.picturePhoto;
    };
    SearchServiceProvider.prototype.getSearchParams = function () {
        return this.searchParams;
    };
    SearchServiceProvider.prototype.addprofilParams = function (profil) {
        this.Profilnew = profil;
    };
    SearchServiceProvider.prototype.addProfillViewMenu = function (profil) {
        this.ProfillViewMenu = profil;
    };
    SearchServiceProvider.prototype.getProfillViewMenu = function () {
        return this.ProfillViewMenu;
    };
    SearchServiceProvider.prototype.addProfilById = function (id1) {
        this.id = id1;
    };
    SearchServiceProvider.prototype.setId2 = function (id) {
        this.id2 = id;
    };
    SearchServiceProvider.prototype.getId2 = function () {
        return this.id2;
    };
    SearchServiceProvider.prototype.getprofilParms = function () {
        return this.Profilnew;
    };
    SearchServiceProvider.prototype.getProfilById = function () {
        return this.id;
    };
    SearchServiceProvider.prototype.setlatitude = function (lo) {
        this.wysokosc = lo;
    };
    SearchServiceProvider.prototype.setlongtitude = function (lng) {
        this.szerokosc = lng;
    };
    SearchServiceProvider.prototype.getlatitude = function () {
        return this.wysokosc;
    };
    SearchServiceProvider.prototype.getlongtitude = function () {
        return this.szerokosc;
    };
    SearchServiceProvider.prototype.setTrId = function (id) {
        this.tr_id = id;
    };
    SearchServiceProvider.prototype.getTRId = function () {
        return this.tr_id;
    };
    SearchServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SearchServiceProvider);
    return SearchServiceProvider;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {createElementCssSelector} from "@angular/compiler";

var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider() {
        // currentUser: UserProfile;
        // currentUser = { email: '', password: '' };
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]('', '', '', '', '', '');
        this.usersGrid = [];
        this.userOld = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]('', '', '', '', '', '');
        this.UserProfileGrid = [];
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.name === null || credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                // let access = (credentials.UserPassword === "pass" && credentials.UserEmail === "email");
                var access = _this.admitprofile(credentials);
                console.log("accses=", access);
                // let access=true;
                _this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]('Kuba', 'yossarian99@wp.pl', 'aaa', 'aaa', 'aaa', 'aaa');
                // this.currentUser.password='aaa';
                // this.currentUser.email='yossarian99@wp.pl'
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        if (credentials.name === null || credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Prosze podaj dane rejestracji ");
        }
        else {
            this.usersGrid.push(credentials);
            // At this point store the credentials to your backend!
            this.addItem(credentials);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.createAcount = function (credentials, repassword) {
        if (credentials.name === null || credentials.email === null || credentials.password === null || repassword === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Prosze podaj dane urzytkownika");
        }
        else if (this.userOld.password != credentials.password) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Hasła nie są takie same.");
        }
        else {
            var index = void 0;
            index = this.findUser(this.userOld);
            this.removeUser(index);
            credentials.password = repassword;
            this.usersGrid.push(credentials);
            // At this point store the credentials to your backend!
            this.addItem(credentials);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.getUsersGrid = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider.prototype.admitprofile = function (data) {
        var result = false;
        this.usersGrid.forEach(function (f) {
            if ((f.name === data.name) && (f.email === data.email) && (f.password === data.password)) {
                result = true;
                if (result) {
                    console.log("resule =true");
                }
                else {
                    console.log("result=false");
                }
            }
        });
        // if((this.currentUser.email===email)&&(this.currentUser.password===pass)){
        //   result=true;
        // }
        return result;
    };
    AuthServiceProvider.prototype.GetUser = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.addItem = function (userData) {
        this.usersGrid.push(new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */](userData.name, userData.email, userData.password, 'aaa', 'aaa', 'aaa'));
        console.log(this.usersGrid);
    };
    AuthServiceProvider.prototype.addItems = function (items) {
        (_a = this.UserProfileGrid).push.apply(_a, items);
        var _a;
    };
    AuthServiceProvider.prototype.getItems = function () {
        return this.UserProfileGrid.slice();
    };
    AuthServiceProvider.prototype.removeItem = function (index) {
        this.UserProfileGrid.splice(index, 1);
    };
    AuthServiceProvider.prototype.removeUser = function (index) {
        this.usersGrid.splice(index, 1);
    };
    AuthServiceProvider.prototype.findUser = function (dane) {
        for (var i = 0; i < this.usersGrid.length; ++i) {
            if (this.usersGrid[i].name == dane.name && this.usersGrid[1].password === dane.password && this.usersGrid[i].email === dane.email) {
                return i;
            }
        }
    };
    AuthServiceProvider.prototype.setOldUSer = function (user) {
        this.userOld = user;
    };
    AuthServiceProvider.prototype.getOldUser = function () {
        return this.userOld;
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_UserProfile_model__ = __webpack_require__(278);

var ProfileListService = /** @class */ (function () {
    function ProfileListService() {
        this.UserProfileGrid = [];
    }
    ProfileListService.prototype.addOponion = function (text, opiniongiver, email, rating, trName) {
        var index;
        var opinia = {};
        opinia.name = opiniongiver;
        opinia.description = text;
        opinia.email = email;
        opinia.rating = rating;
        for (index = 0; index < this.UserProfileGrid.length; index++) {
            if (this.UserProfileGrid[index].name === trName) {
                console.log("opinia 3 =", opinia);
                debugger;
                this.UserProfileGrid[index].tr_op.push(opinia);
            }
            else {
                console.log("error opinia ");
                console.log("name= ", trName);
                console.log("name p  ", this.UserProfileGrid[index].name);
                console.log("sruname p ", this.UserProfileGrid[index].surname);
            }
        }
    };
    ProfileListService.prototype.addItem = function (id, name, surname, gender, bdate, phone, email, facebook, instagram, page, description, rating, avatar, registerDate, facebook_id, tr_disc, tr_cert, tr_uni, tr_loc, tr_pl, tr_off, tr_op, tr_tr, tr_ph) {
        this.UserProfileGrid.push(new __WEBPACK_IMPORTED_MODULE_0__models_UserProfile_model__["a" /* UserProfile */](id, name, surname, gender, bdate, phone, email, facebook, instagram, description, rating, avatar, registerDate, facebook_id, tr_disc, tr_cert, tr_uni, tr_loc, tr_pl, tr_off, tr_op, tr_tr, tr_ph));
        // [ { "name": "Adam", "surname": "Micniewicz", "gender": "M", "bdate": null, "phone": 457234098, "email": "adammicniewicz@wp.pl", "facebook": null, "instagram": null, "description": "Zapraszam.", "rating": 0, "avatar": null, "registerDate": "2018-05-01 22:03:52", "remember_token": null, "tr_disc": [ { "discipline_name": "Trener personalny" } ], "tr_cert": [ { "name_of_institution": "Akademia Trenerow Personalnych", "name_of_course": "Trener personalnyc", "begin_date": "2015-08-01", "end_date": "2016-03-10", "updated_at": "2018-05-28 23:35:42", "created_at": "2018-05-28 23:35:42" } ], "tr_uni": [], "tr_loc": [ { "city": "Pozna\u0144", "voivodeship": "Wielkopolskie", "updated_at": "-0001-11-30 00:00:00", "created_at": "-0001-11-30 00:00:00" } ], "tr_pl": [ { "place": "Fabryka Formy" }, { "place": "Slodkiewicz Gym" } ], "tr_off": [ { "name": "Trening indywidualny", "price": 50, "max_no_of_clients": 1, "updated_at": "2018-05-29 00:35:20", "created_at": "2018-05-29 00:35:20" }, { "name": "Trening grupowy", "price": 15, "max_no_of_clients": 4, "updated_at": "2018-05-29 00:35:20", "created_at": "2018-05-29 00:35:20" } ], "tr_op": [], "tr_tr": [] } ]
        console.log(this.UserProfileGrid);
    };
    ProfileListService.prototype.addItem_object = function (Obiekt) {
        // let Dane:UserProfile={};
        //
        //  Dane=Obiekt;
        this.UserProfileGrid.push(new __WEBPACK_IMPORTED_MODULE_0__models_UserProfile_model__["a" /* UserProfile */](Obiekt.id, Obiekt.name, Obiekt.surname, Obiekt.gender, Obiekt.bdate, Obiekt.phone, Obiekt.email, Obiekt.facebook, Obiekt.instagram, Obiekt.description, Obiekt.rating, Obiekt.avatar, Obiekt.registerDate, Obiekt.facebook_id, Obiekt.tr_disc, Obiekt.tr_cert, Obiekt.tr_uni, Obiekt.tr_loc, Obiekt.tr_pl, Obiekt.tr_off, Obiekt.tr_op, Obiekt.tr_tr, Obiekt.tr_ph));
        console.log("array user ", this.UserProfileGrid);
    };
    ProfileListService.prototype.addItems = function (items) {
        (_a = this.UserProfileGrid).push.apply(_a, items);
        var _a;
    };
    ProfileListService.prototype.getItems = function (name1, surname1) {
        var tempProfil = {};
        // let tempProfil:any;
        // let tempProfil:UserProfile={};
        // for(var i=0 ; i< this.UserProfileGrid.length;i++){
        //   if(this.UserProfileGrid[i].name===name&&this.UserProfileGrid[i].surname===surname){
        //     console.log("petal jest true");
        //   }
        //   if(this.UserProfileGrid[i].name===name&&this.UserProfileGrid[i].surname===surname){
        //     debugger;
        //     return  this.UserProfileGrid[i];
        //     // Object.assign(tempProfil, this.UserProfileGrid.slice(i));
        //
        //
        //   }else {
        //     tempProfil={};
        //   }
        //  console.log("name1=",name);
        console.log("grid temp", this.UserProfileGrid);
        console.log("grid tempProfil", tempProfil);
        var error;
        for (var _i = 0, _a = this.UserProfileGrid; _i < _a.length; _i++) {
            var temp = _a[_i];
            console.log("temp of =", temp);
            if ((temp.name === name1) && (temp.surname === surname1)) {
                console.log("temp in iterator", temp);
                return temp;
            }
            console.log(" temp after iterator ", temp);
        }
        error = undefined;
        return error;
    };
    ProfileListService.prototype.removeItem = function (index) {
        this.UserProfileGrid.splice(index, 1);
    };
    return ProfileListService;
}());

//# sourceMappingURL=Pfofile-list.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_service_config_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_dyscypline_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ApiModule} from '../..';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = /** @class */ (function () {
    function StartPage(nav, navParams, sea, configServce, restProvider, rest) {
        this.nav = nav;
        this.navParams = navParams;
        this.sea = sea;
        this.configServce = configServce;
        this.restProvider = restProvider;
        this.rest = rest;
        this.Dysciplines = [];
        //idforms: FormGroup;
        this.form_object = {};
        this.idforms = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({ Town: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */]() });
        this.getDyscp();
    }
    StartPage.prototype.ionViewDidLoad = function () {
        this.getDyscp();
    };
    StartPage.prototype.getDyscp = function () {
        var _this = this;
        this.rest.getDyscyplines().subscribe(function (result) {
            Object.assign(_this.Dysciplines, result);
            //  for(var i=0;i<result.length;++i){
            //    this.Dyscyplines[i]=result[i].Name;
            // }
            console.log("wczytane profils w wyszukiwaniu :");
            console.log("list of dysc =", _this.Dysciplines);
        });
    };
    StartPage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.Name === e2.Name : e1 === e2;
    };
    StartPage.prototype.Idform = function () {
        this.sea.addSearchParams(this.dyscyplina.name, this.Town);
        this.nav.push('SearchNewPage');
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\start\start.html"*/'<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar class="nav" >\n    <ion-buttons start>\n      <button ion-button >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title style=" font-size:22px !important" >\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="getstart">\n  <ion-grid>\n\n<ion-row  justify-content-center>\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-col col-12>\n\n<ion-row><P></P><P></P></ion-row>\n\n\n\n\n\n\n      <ion-row  align-items-start class="przesroczyste">\n        <div class="textdiv" text-center><p>Wyszukiwarka trenerów sportu.</p></div>\n      </ion-row >\n\n      <ion-row align-items-end class="przesroczyste" >\n        <div class="textdiv" text-center><p>Znajdz w szybki sposób trenera dysypliny</p></div>\n      </ion-row>\n\n\n\n\n<ion-row>\n  <ion-row>\n  </ion-row>\n\n\n\n\n\n   <ion-item  >\n     <ion-label>Dyscypliny</ion-label>\n     <ion-select [(ngModel)]=" dyscyplina"  [ngModelOptions]="{standalone: true}" >\n       <ion-option *ngFor="let  dyscyplina of  Dysciplines" [value]=" dyscyplina" >{{dyscyplina.name}}</ion-option>\n     </ion-select>\n   </ion-item>\n</ion-row>\n<ion-row class="tło_start2">\n  <p></p>\n</ion-row>\n\n  <form [formGroup]="idforms" (ngSubmit)=" Idform()"  >\n\n    <ion-list>\n<ion-row>\n      <ion-item col-12>\n\n        <ion-input  type="text" placeholder="Miasto..." [(ngModel)]="Town"\n                    formControlName="Town"   required></ion-input>\n\n\n      </ion-item>\n</ion-row>\n      <ion-row class="tło_start2">\n        <p></p>\n      </ion-row>\n<ion-row>\n      <ion-item class="przesroczyste">\n        <button  ion-button color="light" medium block type="submit" >Wczytaj profil</button>\n      </ion-item>\n\n</ion-row>\n    </ion-list>\n\n  </form>\n\n\n</ion-col>\n\n\n</ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\start\start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_search_service_search_service__["a" /* SearchServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_service_config_service__["a" /* ConfigServce */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_6__api_dyscypline_service__["a" /* DyscyplineService */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DyscyplineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(35);
/**
 * Najlepszy-Trener
 * API zapisywania i listowania na treningi sportowe
 *
 * OpenAPI spec version: 1.0.0
 * Contact: najlepszyterner@com.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DyscyplineService = /** @class */ (function () {
    function DyscyplineService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:9090/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    DyscyplineService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    DyscyplineService.prototype.getDyscyplines = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/dyscyplines", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    DyscyplineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
    ], DyscyplineService);
    return DyscyplineService;
}());

//# sourceMappingURL=dyscypline.service.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-event/add-event.module": [
		300,
		22
	],
	"../pages/bigphoto/bigphoto.module": [
		302,
		21
	],
	"../pages/cal-details/cal-details.module": [
		301,
		20
	],
	"../pages/callendar-profill/callendar-profill.module": [
		303,
		25
	],
	"../pages/dyscypline/dyscypline.module": [
		304,
		19
	],
	"../pages/edit-primary-info/edit-primary-info.module": [
		305,
		0
	],
	"../pages/education-porfil/education-porfil.module": [
		306,
		18
	],
	"../pages/experience-profill/experience-profill.module": [
		310,
		17
	],
	"../pages/gallery-profil/gallery-profil.module": [
		307,
		16
	],
	"../pages/home/home.module": [
		308,
		24
	],
	"../pages/location/location.module": [
		309,
		15
	],
	"../pages/login/login.module": [
		311,
		14
	],
	"../pages/opinion-profill/opinion-profill.module": [
		312,
		13
	],
	"../pages/places-profil/places-profil.module": [
		313,
		12
	],
	"../pages/price-list-profill/price-list-profill.module": [
		314,
		11
	],
	"../pages/profil-view-menu/profil-view-menu.module": [
		315,
		10
	],
	"../pages/profil/profil.module": [
		316,
		9
	],
	"../pages/register/register.module": [
		317,
		8
	],
	"../pages/relogin/relogin.module": [
		318,
		7
	],
	"../pages/reregister/reregister.module": [
		319,
		6
	],
	"../pages/search-new/search-new.module": [
		325,
		5
	],
	"../pages/search2/search2.module": [
		320,
		4
	],
	"../pages/show-search/show-search.module": [
		321,
		3
	],
	"../pages/start/start.module": [
		323,
		23
	],
	"../pages/trening-list/trening-list.module": [
		322,
		2
	],
	"../pages/viewprofil/viewprofil.module": [
		324,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(35);
/**
 * Najlepszy-Trener
 * API zapisywania i listowania na treningi sportowe
 *
 * OpenAPI spec version: 1.0.0
 * Contact: najlepszyterner@com.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProfileService = /** @class */ (function () {
    function ProfileService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:9090/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ProfileService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ProfileService.prototype.getProfile = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProfile.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/profiles/" + encodeURIComponent(String(id)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
    ], ProfileService);
    return ProfileService;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificPhotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(35);
/**
 * Najlepszy-Trener
 * API zapisywania i listowania na treningi sportowe
 *
 * OpenAPI spec version: 1.0.0
 * Contact: najlepszyterner@com.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SpecificPhotoService = /** @class */ (function () {
    function SpecificPhotoService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:9090/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    SpecificPhotoService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    SpecificPhotoService.prototype.photoServiceGetPhoto = function (photoId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (photoId === null || photoId === undefined) {
            throw new Error('Required parameter photoId was null or undefined when calling photoServiceGetPhoto.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'image/png'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/photo/" + encodeURIComponent(String(photoId)), {
            responseType: "blob",
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    SpecificPhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
    ], SpecificPhotoService);
    return SpecificPhotoService;
}());

//# sourceMappingURL=specificPhoto.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name_data, email_data, password_data, remeberToken, createdUp, updatedUp) {
        this.name = name_data;
        this.email = email_data;
        this.password = password_data;
        this.remeberToken = remeberToken;
        this.createdUp = createdUp;
        this.updatedUp = updatedUp;
    }
    return User;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingrezerwationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(35);
/**
 * Najlepszy-Trener
 * API zapisywania i listowania na treningi sportowe
 *
 * OpenAPI spec version: 1.0.0
 * Contact: najlepszyterner@com.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TrainingrezerwationService = /** @class */ (function () {
    function TrainingrezerwationService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:9090/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TrainingrezerwationService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TrainingrezerwationService.prototype.orderTraining = function (body, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling orderTraining.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/profiles/orderTraining", body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TrainingrezerwationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
    ], TrainingrezerwationService);
    return TrainingrezerwationService;
}());

//# sourceMappingURL=trainingrezerwation.service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallendarProfillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar_ngx__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {TimeHour} from "../../models/TimeHour";

/**
 * Generated class for the CallendarProfillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CallendarProfillPage = /** @class */ (function () {
    function CallendarProfillPage(navCtrl, navParams, calendar, plt) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.plt = plt;
        this.calendars = [];
        this.Time = [];
        this.counter = 0;
        this.nextDay = new Date();
        this.plt.ready().then(function () {
            _this.calendar.listCalendars().then(function (data) {
                _this.calendars = data;
            });
        });
    }
    CallendarProfillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallendarProfillPage');
    };
    CallendarProfillPage.prototype.addEvent = function (cal) {
        var date = new Date();
        var options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15 };
        this.calendar.createEventInteractivelyWithOptions('My new Event', 'Münster', 'Special Notes', date, date, options).then(function (res) {
        }, function (err) {
            console.log('err: ', err);
        });
    };
    CallendarProfillPage.prototype.openCal = function (cal) {
        this.navCtrl.push('CalDetailsPage', { name: cal.name });
    };
    CallendarProfillPage.prototype.SetForwardTime = function (h) {
        console.log(this.counter);
        this.ForwardDate();
    };
    CallendarProfillPage.prototype.SetBackTime = function (h) {
        console.log(this.counter);
        this.BackDate();
    };
    CallendarProfillPage.prototype.ForwardDate = function () {
        var i = 0;
        this.nextDay.setDate(this.nextDay.getDate() + 1);
        if (this.Time.length == 34) {
            for (i = 34; i >= 0; i--) {
                this.Time.pop();
            }
        }
        for (i = 6; i <= 23; i++) {
            this.nextDay.setHours(i, 0, 0); // 5.30 pm
            if (i == 6 || i == 23) {
                this.Time.push(this.nextDay.getHours());
            }
            else {
                this.Time.push(this.nextDay.getHours());
                this.Time.push(this.nextDay.getHours());
            }
        }
        console.log(this.Time);
    };
    CallendarProfillPage.prototype.BackDate = function () {
        var i = 0;
        this.nextDay.setDate(this.nextDay.getDate() - 1);
        if (this.Time.length == 34) {
            for (i = this.Time.length; i >= 0; i--) {
                this.Time.pop();
            }
        }
        for (i = 6; i <= 23; i++) {
            this.nextDay.setHours(i, 0, 0); // 5.30 pm
            if (i == 6 || i == 23) {
                this.Time.push(this.nextDay.getHours());
                console.log(this.nextDay);
            }
            else {
                console.log(this.nextDay);
                this.Time.push(this.nextDay.getHours());
                this.Time.push(this.nextDay.getHours());
            }
        }
        console.log(this.Time);
    };
    CallendarProfillPage.prototype.setDate = function () {
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        var day = new Date('Apr 30, 2000');
        console.log(day); // Apr 30 2000
        var nextDay = new Date(day);
        nextDay.setDate(day.getDate() + 1);
        console.log(nextDay); // May 01 2000
    };
    CallendarProfillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-callendar-profill',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\callendar-profill\callendar-profill.html"*/'<!--\n  Generated template for the CallendarProfillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Kalendarz</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="setTime()" >\n    <ion-icon ios="ios-undo" md="md-undo"></ion-icon>\n  </button>\\n  <button ion-button (click)="SetForwardTime(true)" >\n    <ion-icon ios="ios-undo" md="md-undo"></ion-icon>\n  </button>\\n  <button ion-button (click)="SetBackTime(false)" >\n    <ion-icon ios="ios-undo" md="md-undo"></ion-icon>\n  </button>\\n  <ion-row\n    justify-content-center>\n    <ion-col col-12 text-center  style="border: 1px solid;border-radius: 5px">\n      <ion-card-content>\n        <ion-card>\n          kalendarz\n        </ion-card>\n      </ion-card-content>\n\n\n\n\n\n\n    </ion-col></ion-row>\n\n  <ion-list>\n    <ion-item *ngFor="let cal of calendars" tappable>\n      <button ion-button icon-only item-start clear (click)="addEvent(cal)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      {{ cal.name }}\n      <p>{{ cal.type }}</p>\n      <button ion-button icon-only item-end clear (click)="openCal(cal)">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\callendar-profill\callendar-profill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar_ngx__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], CallendarProfillPage);
    return CallendarProfillPage;
}());

//# sourceMappingURL=callendar-profill.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_Pfofile_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_UserProfile_model_no_constructor__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {ProfileListService} from "../../services/Pfofile-list";



// import {ReregisterPage} from "../reregister/reregister";
// import {IdModel} from "../../models/id-model";
// import {IdModelArray} from "../../models/id-array-model";
// import {ShowSearchPage} from "../show-search/show-search";
var HomePage = /** @class */ (function () {
    function HomePage(nav, auth, configServce, restProvider, profilsService) {
        this.nav = nav;
        this.auth = auth;
        this.configServce = configServce;
        this.restProvider = restProvider;
        this.profilsService = profilsService;
        this.userProfil_temp = new __WEBPACK_IMPORTED_MODULE_7__models_UserProfile_model_no_constructor__["a" /* UserProfileN0c */]();
        // userProfil_temp:UserProfile={};
        this.username = '';
        this.email = '';
        this.profil_temp = {};
        this.profil = {};
        this.form_object = {};
        this.Opinions = {};
        this.item = {};
        // public IdArray: Array<ArrayID>=[] ;
        this.IdArray = [];
        this.checkshow = false;
        // let info = this.auth.getUserInfo();
        // this.Profil.UserName = info['UserName'];
        // this.Profil.UserSurname = info['UserSurname'];
        // this.Profil.UserPassword = info['UserPassword'];
        // this.Profil.Gender = info['Gender'];
        // this.Profil.UserPhone = info['UserPhone'];
        // this.Profil.UserEmail = info['UserEmail'];
        // this.Profil.UserDescription = info['UserDescription'];
        // this.email = info['email'];
        // this.profil_id='1';
        // this.profil_temp = this.getUserProfile();
        // // this.getUsers();
        this.showprofil = false;
        this.initializeIdform();
        this.initializeopinionforms();
    }
    HomePage.prototype.recreateAccount = function () {
        this.nav.push('ReregisterPage');
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    HomePage.prototype.onCheckItem = function (index) {
        this.auth.removeItem(index);
    };
    HomePage.prototype.getUserProfile = function () {
        var _this = this;
        this.configServce.getUserProfileService(this.profil_id).subscribe(function (result) {
            Object.assign(_this.userProfil_temp, result[0]);
            // this.profilsService.addItem(this.profil_temp.name,this.profil_temp.surname,this.profil_temp.gender,this.profil_temp.bdate,this.profil_temp.phone
            //   ,this.profil_temp.email,this.profil_temp.facebook,this.profil_temp.instagram,this.profil_temp.description,this.profil_temp.rating,this.profil_temp.avatar
            //   ,this.profil_temp.registerDate,this.profil_temp.remember_token, this.profil_temp.tr_disc,this.profil_temp.tr_cert,this.profil_temp.tr_uni,this.profil_temp.tr_loc
            //   ,this.profil_temp.tr_pl,this.profil_temp.tr_off,this.profil_temp.tr_op,this.profil_temp.tr_tr);
            console.log("result", _this.userProfil_temp);
            if (_this.checkshow === true) {
                _this.profilsService.addItem_object(_this.userProfil_temp);
                var TempID = {};
                TempID.id = _this.profil_id;
                TempID.namearray = _this.userProfil_temp.name;
                TempID.surnamearray = _this.userProfil_temp.surname;
                _this.IdArray.push(TempID);
                console.log("this show profil ", _this.schowProfil(_this.profil_id));
                _this.item = _this.userProfil_temp;
            }
            _this.showprofil = true;
        });
    };
    HomePage.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    HomePage.prototype.addId = function () {
        console.log(this.profil_id);
        this.restProvider.setId(this.profil_id);
        // console.log(this.users);
    };
    HomePage.prototype.Idform = function () {
        this.profil_id = this.form_object.ID.valueOf();
        this.addId();
        // this.pp = Object.assign({},this.getUserProfile());
        this.getUserProfile();
        if (this.schowProfil(this.profil_id) != undefined) {
            var tempArrayID = {};
            tempArrayID = this.schowProfil(this.profil_id);
            console.log("temparray1=", tempArrayID);
            this.item = this.profilsService.getItems(tempArrayID.namearray, tempArrayID.surnamearray);
            console.log("item2=", this.item);
            this.checkshow = false;
        }
        else {
            if (this.schowProfil(this.profil_id) === undefined) {
                // this.profilsService.addItem_object(this.userProfil_temp);
                // this.IdArray.push(TempID);
                // this.item = this.profilsService.getItems(this.userProfil_temp.name,this.userProfil_temp.surname);
                //
                this.checkshow = true;
                console.log("item=", this.item);
            }
        }
        // console.log(this.profil_temp[0].name);
        // this.profilsService.addItem(this.profil_temp.name,this.profil_temp.surname,this.profil_temp.gender,this.profil_temp.bdate,this.profil_temp.phone
        // ,this.profil_temp.email,this.profil_temp.facebook,this.profil_temp.instagram,this.profil_temp.description,this.profil_temp.rating,this.profil_temp.avatar
        // ,this.profil_temp.registerDate,this.profil_temp.remember_token, this.profil_temp.tr_disc,this.profil_temp.tr_cert,this.profil_temp.tr_uni,this.profil_temp.tr_loc
        // ,this.profil_temp.tr_pl,this.profil_temp.tr_off,this.profil_temp.tr_op,this.profil_temp.tr_tr);
        // this.profilsService.addItem_object(this.profil_temp);
        // this.Profils = this.profilsService.getItems();
        this.idforms.reset();
    };
    ;
    HomePage.prototype.Opinionform = function () {
        if (this.showprofil === true) {
            this.Opinions.rating = 4;
            this.Opinions.name = "yossarian99@wp.pl";
            this.profilsService.addOponion(this.Opinions.description, this.Opinions.name, this.Opinions.email, this.Opinions.rating, this.userProfil_temp.name);
        }
        console.log("opinion=", this.Opinions.description);
        console.log("opinodawca=", this.Opinions.name);
        this.opinionforms.reset();
    };
    HomePage.prototype.resetform = function () {
        this.showprofil = false;
    };
    HomePage.prototype.schowProfil = function (id) {
        var temp = undefined;
        // for(var i=0;i<this.IdArray.length;i++){
        //   debugger;
        //   if(this.IdArray[i].id===id){
        //
        //     return this.IdArray[i];
        //   }
        //
        // }
        for (var _i = 0, _a = this.IdArray; _i < _a.length; _i++) {
            var A = _a[_i];
            if (A.id === id) {
                return A;
            }
        }
        return temp;
    };
    HomePage.prototype.goToSearch = function () {
        this.nav.push('ShowSearchPage');
    };
    HomePage.prototype.initializeIdform = function () {
        this.idforms = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]()
        });
    };
    HomePage.prototype.initializeopinionforms = function () {
        this.opinionforms = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({ opinionuser: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            Opinionss: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](), ocena: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]()
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Member Area\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home getstart" padding>\n  <form [formGroup]="idforms"  (ngSubmit)="Idform()" >\n    <ion-list>\n      <ion-item>\n\n        <ion-input type="text" placeholder="Podaj id profilu..." [(ngModel)]="form_object.ID"\n                   formControlName="id"   required></ion-input>\n\n\n      </ion-item>\n\n\n      <ion-item>\n        <button ion-button color="secondary" type="submit" [disabled]="!idforms.valid">Wczytaj profil</button>\n      </ion-item>\n\n\n    </ion-list>\n\n  </form>\n  <form>\n    <ion-item>\n      <button ion-button class="register-btn" block clear (click)="goToSearch()">Skorzystaj z wyszukiwarki</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button class="register-btn" block clear (click)="recreateAccount()">Zmien dane urzytkownika</button>\n    </ion-item>\n  </form>\n  <form>\n\n    <ion-item *ngIf="showprofil === true" #slidingItem>\n    <ion-item>\n      <p>Trener Personalny </p>\n      <p>Imie: {{item.name}}</p>\n      <p>Nazwisko: {{item.surname}}</p>\n      <p>Płeć: {{item.gender}}</p>\n      <p>Numer telefonu:{{item.phone}}</p>\n      <p>Email:{{item.email}}</p>\n      <p>Opis: {{item.description}}</p>\n      <p>Data rejestracji:{{item.registerDate}}</p>\n      <p>Dyscypliny:{{item.tr_disc}}</p>\n\n      <ion-item *ngFor="let cert of item.tr_cert let i = index2" (click)="onCheckItem(i)">\n        <p> Certyfikat: </p>\n        <p>Zdobyte certyfikaty</p>\n        <p>Nazwa kursu: {{cert.name_of_institution}} </p>\n        <p>Umiejetnosci:{{cert. name_of_course}} </p>\n        <p>Data rozpoczecia:{{cert.begin_date}} </p>\n        <p>Data zakonczenia: {{cert.end_date}}</p>\n\n\n      </ion-item>\n      <ion-item *ngFor="let uni of item.tr_uni let i = index0" (click)="onCheckItem(i)">\n        <p>Zdobyte wykształcenie</p>\n        <p>Uniwersytet : {{uni.university}}</p>\n        <p>Kierunek: {{uni.course}}</p>\n        <p>Tytuł: {{uni.degree}}</p>\n        <p>Data rozpoczecia: {{uni.begin_date}}</p>\n        <p>Data zakonczenia:{{uni.end_date}}</p>\n        <p>Data utworzenia:{{uni.created_at}}</p>\n        <p>Data modyfikacji: {{uni.updated_at}}</p>\n      </ion-item>\n\n\n\n\n\n\n\n\n      <ion-item *ngFor="let loc of item.tr_loc let i = index3" (click)="onCheckItem(i)">\n        <p>Lokalizacja</p>\n        <P>Miasto : {{loc. city}}</P>\n        <P>Województwo: {{loc.voivodeship}}</P>\n        <P>Ostatnia data: {{loc.updated_at}}</P>\n        <P>Data utworzenie {{loc.created_at}}</P>\n      </ion-item>\n\n      <ion-item *ngFor="let loc of item.tr_pl let i = index4" (click)="onCheckItem(i)">\n        <p>Lokalizacja:{{loc.place}}</p>\n        <p></p>\n      </ion-item>\n\n      <ion-item *ngFor="let off of item.tr_off let i = index5" (click)="onCheckItem(i)">\n        <p>Oferta</p>\n        <p>Usługa: {{off.name}}</p>\n        <p>Cena: {{off.price}}</p>\n        <p>Maksymalna liczba klientów:{{off.max_no_of_clients}}</p>\n        <p>Data utworzenie:{{off.created_at}}</p>\n        <p>Data modyfikacji : {{off.updated_at}}</p>\n        <p></p>\n      </ion-item>\n      <ion-item *ngFor="let opp of item.tr_op let i = index6" (click)="onCheckItem(i)">\n\n        <div class="coment-box">\n          <h5 ion-text color="danger">Opinia: {{opp.opinion}}</h5>\n\n        <h5 ion-text color="danger">Opiniodawca: {{opp.opinionGiver}}</h5>\n\n\n        </div>\n      </ion-item>\n    </ion-item>\n\n  <!--<ion-item>-->\n    <!--<button ion-button color="secondary" type="submit">Resetuj profil</button>-->\n  <!--</ion-item>-->\n    <ion-item>\n      <button (click)=" resetform()"><ion-icon name="thrash"></ion-icon>Resetuj profil</button>\n\n    </ion-item>  </ion-item>\n\n  </form>\n\n\n\n\n  <form [formGroup]="opinionforms"  (ngSubmit)="Opinionform()" padding>\n    <ion-item>\n\n\n      <ion-label color="primary" stacked>Urzytkownik</ion-label>\n      <ion-input type="text" placeholder="Name..." [(ngModel)]="Opinions.opinionGiver" formControlName="opinionuser"\n                 required>\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" stacked>Email</ion-label>\n      <ion-textarea placeholder="Enter a description" [(ngModel)]="Opinions.giveremail"\n                    formControlName="email"\n                    required></ion-textarea>\n\n    </ion-item>\n<ion-item>\n  <ion-label color="primary" stacked>Opinia Urzytkownika</ion-label>\n  <ion-textarea placeholder="Enter a description" [(ngModel)]="Opinions.opinion"\n                formControlName="Opinionss"\n                required></ion-textarea>\n\n</ion-item>\n\n    <ion-item>\n      <button ion-button color="secondary" type="submit"[disabled]="! opinionforms.valid">Dodaj Opinie</button>\n    </ion-item>\n\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_config_service_config_service__["a" /* ConfigServce */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_Pfofile_list__["a" /* ProfileListService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddopinionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(35);
/**
 * Najlepszy-Trener
 * API zapisywania i listowania na treningi sportowe
 *
 * OpenAPI spec version: 1.0.0
 * Contact: najlepszyterner@com.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddopinionService = /** @class */ (function () {
    function AddopinionService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:9090/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    AddopinionService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    AddopinionService.prototype.addOpinion = function (body, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addOpinion.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/profiles/addOpinion", body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    AddopinionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
    ], AddopinionService);
    return AddopinionService;
}());

//# sourceMappingURL=addopinion.service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__(35);
/**
 * Najlepszy-Trener
 * API zapisywania i listowania na treningi sportowe
 *
 * OpenAPI spec version: 1.0.0
 * Contact: najlepszyterner@com.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TrainerService = /** @class */ (function () {
    function TrainerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:9090/api';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    TrainerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    TrainerService.prototype.getTrainers = function (dyscyplina, miejscowo, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (dyscyplina === null || dyscyplina === undefined) {
            throw new Error('Required parameter dyscyplina was null or undefined when calling getTrainers.');
        }
        if (miejscowo === null || miejscowo === undefined) {
            throw new Error('Required parameter miejscowo was null or undefined when calling getTrainers.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/" + encodeURIComponent(String(dyscyplina)) + "/" + encodeURIComponent(String(miejscowo)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TrainerService.prototype.updateTrainer = function (body, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateTrainer.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/editPrimaryInfo", body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    TrainerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String, __WEBPACK_IMPORTED_MODULE_3__configuration__["a" /* Configuration */]])
    ], TrainerService);
    return TrainerService;
}());

//# sourceMappingURL=trainer.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config_service_config_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_Pfofile_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic3_star_rating__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__api_profile_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_calendar_ngx__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_callendar_profill_callendar_profill__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_start_start__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__api_dyscypline_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__api_trainer_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__api_specificPhoto_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__api_addopinion_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__api_trainingrezerwation_service__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { IonicPageModule } from 'ionic-angular';









// import { ApiModule } from '../.';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                // ProfilViewMenuPage,
                __WEBPACK_IMPORTED_MODULE_18__pages_callendar_profill_callendar_profill__["a" /* CallendarProfillPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_start_start__["a" /* StartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cal-details/cal-details.module#CalDetailsPageModule', name: 'CalDetailsPage', segment: 'cal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bigphoto/bigphoto.module#BigphotoPageModule', name: 'BigphotoPage', segment: 'bigphoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/callendar-profill/callendar-profill.module#CallendarProfillPageModule', name: 'CallendarProfillPage', segment: 'callendar-profill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dyscypline/dyscypline.module#DyscyplinePageModule', name: 'DyscyplinePage', segment: 'dyscypline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-primary-info/edit-primary-info.module#EditPrimaryInfoPageModule', name: 'EditPrimaryInfoPage', segment: 'edit-primary-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/education-porfil/education-porfil.module#EducationPorfilPageModule', name: 'EducationPorfilPage', segment: 'education-porfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery-profil/gallery-profil.module#GalleryProfilPageModule', name: 'GalleryProfilPage', segment: 'gallery-profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/experience-profill/experience-profill.module#ExperienceProfillPageModule', name: 'ExperienceProfillPage', segment: 'experience-profill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opinion-profill/opinion-profill.module#OpinionProfillPageModule', name: 'OpinionProfillPage', segment: 'opinion-profill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/places-profil/places-profil.module#PlacesProfilPageModule', name: 'PlacesProfilPage', segment: 'places-profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/price-list-profill/price-list-profill.module#PriceListProfillPageModule', name: 'PriceListProfillPage', segment: 'price-list-profill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil-view-menu/profil-view-menu.module#ProfilViewMenuPageModule', name: 'ProfilViewMenuPage', segment: 'profil-view-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/relogin/relogin.module#ReloginPageModule', name: 'ReloginPage', segment: 'relogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reregister/reregister.module#ReregisterPageModule', name: 'ReregisterPage', segment: 'reregister', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search2/search2.module#Search2PageModule', name: 'Search2Page', segment: 'search2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-search/show-search.module#ShowSearchPageModule', name: 'ShowSearchPage', segment: 'show-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trening-list/trening-list.module#TreningListPageModule', name: 'TreningListPage', segment: 'trening-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewprofil/viewprofil.module#ViewprofilPageModule', name: 'ViewprofilPage', segment: 'viewprofil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-new/search-new.module#SearchNewPageModule', name: 'SearchNewPage', segment: 'search-new', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["f" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                // ProfilViewMenuPage,
                __WEBPACK_IMPORTED_MODULE_18__pages_callendar_profill_callendar_profill__["a" /* CallendarProfillPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_start_start__["a" /* StartPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__api_addopinion_service__["a" /* AddopinionService */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_config_service_config_service__["a" /* ConfigServce */],
                __WEBPACK_IMPORTED_MODULE_11__services_Pfofile_list__["a" /* ProfileListService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_search_service_search_service__["a" /* SearchServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__api_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_calendar_ngx__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_20__api_dyscypline_service__["a" /* DyscyplineService */],
                __WEBPACK_IMPORTED_MODULE_21__api_trainer_service__["a" /* TrainerService */],
                __WEBPACK_IMPORTED_MODULE_22__api_specificPhoto_service__["a" /* SpecificPhotoService */],
                __WEBPACK_IMPORTED_MODULE_24__api_trainingrezerwation_service__["a" /* TrainingrezerwationService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
var UserProfile = /** @class */ (function () {
    function UserProfile(id, name, surname, gender, bdate, phone, email, facebook, instagram, description, rating, avatar, registerDate, facebook_id, tr_disc, tr_cert, tr_uni, tr_loc, tr_pl, tr_off, tr_op, tr_tr, tr_ph) {
        this.tr_disc = [];
        this.tr_cert = [];
        this.tr_uni = [];
        this.tr_loc = [];
        this.tr_pl = [];
        this.tr_off = [];
        this.tr_op = [];
        this.tr_tr = [];
        this.tr_ph = [];
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.bdate = bdate;
        this.phone = phone;
        this.email = email;
        this.facebook = facebook;
        this.instagram = instagram;
        this.description = description;
        this.rating = rating;
        this.avatar = avatar;
        this.registerDate = registerDate;
        this.facebook_id = facebook_id;
        this.tr_disc = tr_disc;
        this.tr_cert = tr_cert;
        this.tr_uni = tr_uni;
        this.tr_loc = tr_loc;
        this.tr_pl = tr_pl;
        this.tr_off = tr_off;
        this.tr_op = tr_op;
        this.tr_tr = tr_tr;
        this.tr_ph = tr_ph;
    }
    return UserProfile;
}());

//# sourceMappingURL=UserProfile-model.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileN0c; });
var UserProfileN0c = /** @class */ (function () {
    function UserProfileN0c() {
        this.tr_disc = [];
        this.tr_cert = [];
        this.tr_uni = [];
        this.tr_loc = [];
        this.tr_pl = [];
        this.tr_off = [];
        this.tr_op = [];
        this.tr_tr = [];
        this.tr_ph = [];
    }
    ;
    UserProfileN0c.prototype.getname = function () {
        return name;
    };
    return UserProfileN0c;
}());

//# sourceMappingURL=UserProfile-model-no-constructor.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_start_start__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_start_start__["a" /* StartPage */];
        platform.ready().then(function () {
            // imageLoaderConfig.enableDebugMode();
            // imageLoaderConfig.enableFallbackAsPlaceholder(true);
            // imageLoaderConfig.setFallbackUrl('./assets/imgs/avatar.png');
            // imageLoaderConfig.setMaximumCacheAge(2*60*60*1000);
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
/* unused harmony export COLLECTION_FORMATS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var BASE_PATH = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderContentType = function (contentTypes) {
        var _this = this;
        if (contentTypes.length == 0) {
            return undefined;
        }
        var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    };
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderAccept = function (accepts) {
        var _this = this;
        if (accepts.length == 0) {
            return undefined;
        }
        var type = accepts.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    };
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    Configuration.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    return Configuration;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'https://najlepszytrener.com.pl/api/profiles/';
        this.apiserachURL = 'https://najlepszytrener.com.pl/api/';
        this.dysyplineURL = "https://najlepszytrener.com.pl/api/dyscyplines.json'";
        this.editprimaryinfoURL = 'https://najlepszytrener.com.pl/';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + _this.id.toString()).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.addUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/users', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.editPrimaryInfo = function (data) {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                // 'Access-Control-Allow-Origin' : 'https://najlepszytrener.com.pl:443',
                //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Accept': 'application/json',
                //      'content-type':'application/json',
                'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
                'content-type': 'application/x-www-form-urlencoded',
                // let options = new RequestOptions({ headers:headers,withCredentials: true});
                'X-CSRF-TOKEN': this.getToken()
            }),
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.editprimaryinfoURL + 'editPrimaryInfo', data, httpOptions)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(" Error..");
            });
        });
    };
    RestProvider.prototype.getSearch = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiserachURL + _this.dysc + '/' + _this.loc).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getDysypline = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.dysyplineURL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.setId = function (i) {
        this.id = i;
    };
    RestProvider.prototype.getToken = function () {
        var token = document.querySelector('meta[property="csrf-token"]')['content'];
        return token;
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigServce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>

// import {HttpClient, HttpHeaders} from '@angular/common/http';

// import {Dysyplina} from "../../models/dysycplins-model";
var ConfigServce = /** @class */ (function () {
    function ConfigServce(http) {
        this.http = http;
        this.BASE_URL = 'http://najlepszytrener.com.pl/api/';
        this.configUrl = 'assets/config.json';
        this.GET_PROFILE = this.BASE_URL + 'profiles/';
        // private GET_SEARCH=this.BASE_URL;
        this.GET_DYSC = this.BASE_URL + 'dyscyplines.json';
        console.log('Hello ConfigServiceProvider Provider');
    }
    ConfigServce.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    ConfigServce.prototype.getUserProfileService = function (id) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Access-Control-Allow-Origin': 'https://najlepszytrener.com.pl:443',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
            }),
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('program_id', '5b84cbd4')
        };
        return this.http.get(this.GET_PROFILE + id, httpOptions)
            .pipe().map(function (res) { return res; });
    };
    ConfigServce.prototype.sendPrimaryInfo = function (data) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Access-Control-Allow-Origin': 'https://najlepszytrener.com.pl:443',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
            }),
        };
        return this.http.post("https://najlepszytrener.com.pl/api/editPrimaryInfo", JSON.stringify(data), httpOptions).subscribe(function (res) {
            // console.log('success');
            console.log(res);
        }, function (err) {
            console.log(" Error..");
        });
    };
    ConfigServce.prototype.sendPrimaryInfo3 = function (data) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Access-Control-Allow-Origin': 'https://najlepszytrener.com.pl:443',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
            }),
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('program_id', '5b84cbd4')
        };
        return this.http.post("https://najlepszytrener.com.pl/api/editPrimaryInfo", data, httpOptions).subscribe(function (res) {
            // console.log('success');
            console.log(res);
        }, function (err) {
            console.log(" Error..");
        });
    };
    // errorHandler(error: any): void {
    //   console.log(error)
    // }
    // getUserProfileService(userProfile: UserProfile): Observable<UserProfile> {
    //   let httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     })
    //   };
    //   return this.http.post<UserProfile>(this.GET_PROFILE, userProfile, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     ).map(res => res.json());
    // }
    ConfigServce.prototype.getSearchPeofile = function (lokalizacja) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
            }),
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('program_id', '5b84cbd4')
        };
        console.log(lokalizacja);
        return this.http.get(lokalizacja, httpOptions)
            .pipe().map(function (res) { return res; });
    };
    ConfigServce.prototype.getDyspyplins = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'multipart/form-data; application/json; charset=UTF-8',
            }),
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('program_id', '5b84cbd4')
        };
        return this.http.get(this.GET_DYSC, httpOptions)
            .pipe().map(function (res) { return res; });
    };
    ConfigServce = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConfigServce);
    return ConfigServce;
}());

//# sourceMappingURL=config-service.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map