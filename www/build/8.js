webpackJsonp([8],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */])
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {UserProfile} from "../../models/UserProfile-model";

var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { name: '', email: '', password: '', rememberToken: '', createdUp: '', updatedUp: '' };
        // registerCredentials:  UserProfile={};
        // UserProfilTemplate:UserProfile;
        // UserProfilTemplate:UserProfile={};
        this.genderTemplate = 'f';
    }
    ;
    RegisterPage.prototype.register = function () {
        var _this = this;
        // this.UserProfilTemplate = new UserProfile(this.registerCredentials.UserName,this.registerCredentials.UserSurname,
        //   this.registerCredentials.UserPassword,this.genderTemplate,
        //   this.registerCredentials.UserPhone,this.registerCredentials.UserEmail,this.registerCredentials.UserDescription);
        this.userTemp = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */](this.registerCredentials.name, this.registerCredentials.email, this.registerCredentials.password, '', '', '');
        this.auth.register(this.userTemp).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.updategender = function () {
        this.g = this.genderTemplate;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content getstart" padding>\n  <div class="login-box">\n    <!--<ion-item>-->\n      <!--<ion-label>Gender</ion-label>-->\n      <!--<ion-select [(ngModel)]="genderTemplate"  (ionChange)="updategender()">-->\n        <!--<ion-option value="f">Female</ion-option>-->\n        <!--<ion-option value="m">Male</ion-option>-->\n\n      <!--</ion-select>-->\n    <!--</ion-item>-->\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <!--<ion-item>-->\n              <!--<ion-label fixed>Imię</ion-label>-->\n              <!--<ion-input-->\n                <!--type="text"-->\n                <!--name="UserName"-->\n                <!--placeholder="Imię..."-->\n                <!--[(ngModel)]="registerCredentials.UserName"-->\n                <!--required></ion-input>-->\n            <!--</ion-item>-->\n            <!--<ion-item>-->\n              <!--<ion-label fixed>Nazwisko</ion-label>-->\n              <!--<ion-input-->\n                <!--type="text"-->\n                <!--name="UserSurname"-->\n                <!--placeholder="Nazwisko..."-->\n                <!--[(ngModel)]="registerCredentials.UserSurname"-->\n                <!--required></ion-input>-->\n            <!--</ion-item>-->\n            <!--<ion-item>-->\n              <!--<ion-label fixed>Hasło</ion-label>-->\n              <!--<ion-input-->\n                <!--type="text"-->\n                <!--name="UserPassword"-->\n                <!--placeholder="Hasło..."-->\n                <!--[(ngModel)]="registerCredentials.UserPassword"-->\n                <!--required></ion-input>-->\n            <!--</ion-item>-->\n            <ion-item>\n              <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n\n            <!--<ion-item>-->\n              <!--<ion-label fixed>Telefon</ion-label>-->\n              <!--<ion-input-->\n                <!--type="tel"-->\n                <!--name="UserPhone"-->\n                <!--placeholder="..."-->\n                <!--[(ngModel)]="registerCredentials.UserPhone"-->\n                <!--required></ion-input>-->\n            <!--</ion-item>-->\n\n\n            <!--<ion-item>-->\n              <!--<ion-label fixed>Email</ion-label>-->\n              <!--<ion-input-->\n                <!--type="email"-->\n                <!--name="UserEmail"-->\n                <!--placeholder="..."-->\n                <!--[(ngModel)]="registerCredentials.UserEmail"-->\n                <!--required></ion-input>-->\n            <!--</ion-item>-->\n            <!--<ion-item>-->\n              <!--<ion-label fixed>Opis</ion-label>-->\n              <!--<ion-input-->\n                <!--type="text"-->\n                <!--name="UserDescription"-->\n                <!--placeholder="Dodaj opis..."-->\n                <!--[(ngModel)]="registerCredentials.UserDescription"-->\n                <!--required></ion-input>-->\n            <!--</ion-item>-->\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid" >Register</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=8.js.map