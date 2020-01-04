webpackJsonp([16],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryProfilPageModule", function() { return GalleryProfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_profil__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GalleryProfilPageModule = /** @class */ (function () {
    function GalleryProfilPageModule() {
    }
    GalleryProfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery_profil__["a" /* GalleryProfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery_profil__["a" /* GalleryProfilPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            ],
        })
    ], GalleryProfilPageModule);
    return GalleryProfilPageModule;
}());

//# sourceMappingURL=gallery-profil.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_profile_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_specificPhoto_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(28);
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
 * Generated class for the GalleryProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryProfilPage = /** @class */ (function () {
    function GalleryProfilPage(platform, nav, getphoto, navParams, provilconfig, ProfillRest, sea, httpClient, sanitizer) {
        this.platform = platform;
        this.nav = nav;
        this.getphoto = getphoto;
        this.navParams = navParams;
        this.provilconfig = provilconfig;
        this.ProfillRest = ProfillRest;
        this.sea = sea;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.item = {};
        this.photoArray = [];
        this.jsonData = null;
        this.id = this.provilconfig.getId2();
        this.getUsers(this.id);
        // this.loadPhoto();
        // this.events.publish('updateScreen');
    }
    GalleryProfilPage.prototype.loadData = function () {
        this.loadPhoto();
        // if (!this.jsonData) {
        //   this.httpClient.get("http://localhost:9090/api/photo/2").subscribe(res => {
        //     this.photoArray = res['results'];
        //     this.jsonData = res['results'];
        //
        //   });
        //
        // } else {
        //   this.photoArray = [];
        //   setTimeout(() => {
        //     this.photoArray = this.jsonData;
        //   }, 100);
        //
        // }
    };
    GalleryProfilPage.prototype.clearCache = function (refresher) {
        // this.imageLoader.clearCache();
        refresher.complete();
    };
    GalleryProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleryProfilPage');
    };
    GalleryProfilPage.prototype.backtoprofiles = function () {
        this.nav.pop();
    };
    GalleryProfilPage.prototype.getUsers = function (id) {
        var _this = this;
        this.ProfillRest.getProfile(id).subscribe(function (result) {
            Object.assign(_this.item, result);
        });
    };
    GalleryProfilPage.prototype.loadPhoto = function () {
        var _this = this;
        for (var i = 0; i < this.item.tr_ph.length; i++) {
            this.singlephoto = this.getphoto.photoServiceGetPhoto(this.item.tr_ph[i].id).subscribe(function (result) {
                _this.createImageFromBlob(result);
            });
            // let binaryData = [];
            // binaryData.push(this.singlephoto);
            //
            // this.photoArray.push(this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob(binaryData, {type: "application/png"}))));
            // debugger;
        }
    };
    GalleryProfilPage.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.photoArray.push(_this.sanitizer.bypassSecurityTrustUrl(reader.result));
        }, false);
        if (image) {
            var binaryData = [];
            binaryData.push(image);
            //
            // this.photoArray.push(this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(new Blob(binaryData, {type: "application/png"}))));
            debugger;
            reader.readAsDataURL(new Blob(binaryData, { type: "image/png" }));
        }
    };
    GalleryProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery-profil',template:/*ion-inline-start:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\gallery-profil\gallery-profil.html"*/'<!--\n  Generated template for the GalleryProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="nav">\n    <ion-buttons start>\n      <!--<button ion-button>-->\n      <!--<ion-icon name="contact"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Menu\n    </ion-title>\n    <ion-title>\n      Najlepszy trener\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button="" (click)="loadData()">load</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button (click)="backtoprofiles">\n    <ion-icon ios="ios-undo" md="md-undo"></ion-icon>\n\n  </button>\n  <!--<div class="images">-->\n\n\n  <!--<div class="one-image">-->\n  <!--<ion-item *ngFor ="let photo of photoArray">-->\n  <!--<img src="{{photo}}.png">-->\n  <!--</ion-item>-->\n  <!--</div>-->\n  <!--</div>-->\n\n\n  <ion-refresher (ionRefresh)="clearCache($event)">\n    <ion-refresher-content></ion-refresher-content>\n    >\n  </ion-refresher>\n  <div class="images">\n    <div class="one-image">\n      <ion-item *ngFor="let photo of photoArray">\n\n        <!--<img-loader [src]="photo?.large" useImg (load)="onImageLoad($event)"></img-loader>-->\n        <img [src]="photo" />\n      </ion-item>\n\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\INZ_WORK\INZ_Wakacje2019_v3-create2019\INZ_Wakacje2019_v3-create2019\src\pages\gallery-profil\gallery-profil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__api_specificPhoto_service__["a" /* SpecificPhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_specificPhoto_service__["a" /* SpecificPhotoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__api_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_profile_service__["a" /* ProfileService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_search_service_search_service__["a" /* SearchServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _j || Object])
    ], GalleryProfilPage);
    return GalleryProfilPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=gallery-profil.js.map

/***/ })

});
//# sourceMappingURL=16.js.map