import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ProfileOut} from "../../model/profileOut";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileService} from "../../api/profile.service";
import {SpecificPhotoService} from "../../api/specificPhoto.service";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {BigphotoPage} from "../bigphoto/bigphoto";

/**
 * Generated class for the GalleryProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery-profil',
  templateUrl: 'gallery-profil.html',
})
export class GalleryProfilPage {
  id: number;
  item: ProfileOut = {};
  photoArray = [];
  singlephoto: any;
  jsonData = null;

  constructor(public platform: Platform, public nav: NavController, public getphoto: SpecificPhotoService,
              public navParams: NavParams, private provilconfig: SearchServiceProvider,
              public ProfillRest: ProfileService, public sea: SearchServiceProvider,
              public httpClient: HttpClient, private sanitizer: DomSanitizer) {
    this.id = this.provilconfig.getId2();
    this.getUsers(this.id);
  }

  loadData() {
    this.loadPhoto();
  }

  clearCache(refresher) {
    refresher.complete();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryProfilPage');
  }

  backtoprofiles() {
    this.nav.pop();
  }

  getUsers(id: number) {
    this.ProfillRest.getProfile(id).subscribe(result => {
      Object.assign(this.item, result);
    });
  }

  loadPhoto() {
    for (let i = 0; i < this.item.tr_ph.length; i++) {
      this.singlephoto = this.getphoto.photoServiceGetPhoto(this.item.tr_ph[i].id).subscribe(result => {
        this.createImageFromBlob(result);
      });
    }
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.photoArray.push(this.sanitizer.bypassSecurityTrustUrl(reader.result));
    }, false);
    if (image) {
      let binaryData = [];
      binaryData.push(image);
      reader.readAsDataURL(new Blob(binaryData, {type: "image/png"}));
    }
  }

  getBig(picture) {
    this.sea.senddPhoto(picture);
    this.nav.push('BigphotoPage');
  }
}
