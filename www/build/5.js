webpackJsonp([5],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReregisterPageModule", function() { return ReregisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reregister__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReregisterPageModule = /** @class */ (function () {
    function ReregisterPageModule() {
    }
    ReregisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reregister__["a" /* ReregisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reregister__["a" /* ReregisterPage */]),
            ],
        })
    ], ReregisterPageModule);
    return ReregisterPageModule;
}());

//# sourceMappingURL=reregister.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReregisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';



/**
 * Generated class for the ReregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReregisterPage = /** @class */ (function () {
    function ReregisterPage(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.resetAcount = { name: '', email: '', password: '', rememberToken: '', createdUp: '', updatedUp: '' };
    }
    ReregisterPage.prototype.resetAccount = function () {
        this.nav.push('RegisterPage');
    };
    ReregisterPage.prototype.Reregister = function () {
        var _this = this;
        // this.UserProfilTemplate = new UserProfile(this.registerCredentials.UserName,this.registerCredentials.UserSurname,
        //   this.registerCredentials.UserPassword,this.genderTemplate,
        //   this.registerCredentials.UserPhone,this.registerCredentials.UserEmail,this.registerCredentials.UserDescription);
        this.reuserTemp = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */](this.resetAcount.name, this.resetAcount.email, this.resetAcount.password, '', '', '');
        this.auth.createAcount(this.reuserTemp, this.repeatpassword).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Nowe dane zapisane");
            }
            else {
                _this.showPopup("Error", "Problem z reedycja danych");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    ReregisterPage.prototype.showPopup = function (title, text) {
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
    ReregisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reregister',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\reregister\reregister.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <h5 ion-text color="danger">Zmiana danych urzytkownika</h5>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form (ngSubmit)="Reregister()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Name" name="text" [(ngModel)]=" resetAcount.name" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]=" resetAcount.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color="primary" stacked>Podaj stare hasło</ion-label>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="resetAcount.password" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary" stacked>Podaj nowe hasło</ion-label>\n              <ion-input type="password" placeholder="Password Input" name="password" [(ngModel)]="repeatpassword" required></ion-input>\n            </ion-item>\n            <!--<ion-item>-->\n              <!--<ion-label color="primary" stacked>Nowe hasło.</ion-label>-->\n              <!--<ion-input type="password" placeholder="Password Input" name="password" [(ngModel)]="repeatpassword" required></ion-input>-->\n            <!--</ion-item>-->\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button block type="submit" [disabled]="!registerForm.form.valid">Zmien Dane</button>\n\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\reregister\reregister.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReregisterPage);
    return ReregisterPage;
}());

//# sourceMappingURL=reregister.js.map

/***/ })

});
//# sourceMappingURL=5.js.map