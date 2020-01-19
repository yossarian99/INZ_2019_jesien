import {Injectable} from "@angular/core";

import 'rxjs/add/operator/map';
import {UserProfile} from "../../models/UserProfile-model";
import {ProfileOut} from "../../model/profileOut";
@Injectable()
export class SearchServiceProvider {
  searchParams = {
    loc: '',
    dysc: ''
  };
  Profilnew: ProfileOut = {};
  ProfillViewMenu: ProfileOut = {};
picturePhoto:any;
id:number;
id2:number;
wysokosc:string;
szerokosc:string;
  public addSearchParams(dysc: string, loc: string) {
    this.searchParams.dysc = dysc;
    this.searchParams.loc = loc;
  }
public  senddPhoto(picture:any){
    this.picturePhoto=picture;
}
public getPhoto(){
    return this.picturePhoto;
}
  public getSearchParams() {
    return this.searchParams;
  }

  public addprofilParams(profil: ProfileOut) {
    this.Profilnew=profil;
  }
  public addProfillViewMenu(profil: ProfileOut) {
    this. ProfillViewMenu=profil;
  }
  public getProfillViewMenu() {
    return this.ProfillViewMenu;
  }
public addProfilById(id1:number){
    this.id=id1;
}
public setId2(id:number){
    this.id2=id;
}
public getId2(){
    return this.id2;
}
  public getprofilParms() {
    return this.Profilnew;
  }
  public getProfilById()
  {
    return this.id;
  }
  public setlatitude(lo){
    this.wysokosc=lo;

  }
  public setlongtitude(lng){
    this.szerokosc=lng;
  }
  public getlatitude(){
    return this.wysokosc;
  }
  public getlongtitude(){
    return this.szerokosc;
  }
}
