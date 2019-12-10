import { Component,ViewChild,ElementRef } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProfileService} from "../../api/profile.service";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileOut} from "../../model/profileOut";
import {Place} from "../../model/place";

/**
 * Generated class for the TreningListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-trening-list',
  templateUrl: 'trening-list.html',
})
export class TreningListPage {
  @ViewChild( 'map') mapRef:ElementRef;
  item:ProfileOut={};
  id:number;
  map:any;
  index:number;
  localizationTemp:Place;
  szerokosc:string;
  wysokosc:string;
  constructor(public navCtrl: NavController,private provilconfig: SearchServiceProvider, public navParams: NavParams,public ProfillRest:ProfileService,public events: Events,public sea:SearchServiceProvider) {



    //
  }

  ionViewDidLoad() {
    console.log("na mapie");
    this.id = this.provilconfig.getId2();
    this.getUsers(this.id);
    this.index=0;
     this.setItems();
    this.showmap(this.szerokosc, this.wysokosc);
  }
  getUsers(id:number) {

    this.ProfillRest.getProfile(id).subscribe(result => {

      Object.assign(this.item, result);

    });
  }

  showmap(lat,long){
    const location= new google.maps.LatLng(lat,long);
    const options={
      center: location,
      zoom: 10
    };
    // const map= new google.maps.Map;
  this.map= new google.maps.Map(this.mapRef.nativeElement,options);

 this.addMArker(location,this.map);

  }
  addMArker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }
  Upp(){
    if(this.index+1==this.item.tr_loc.length)this.index=0;
    else this.index=this.index+1;
    this.localizationTemp=this.item.tr_loc[this.index];
    this.szerokosc=this.localizationTemp.latitude;
    this.wysokosc=this.localizationTemp.longitude;
  }
  Down(){
    if(this.index==0)this.index=this.item.tr_loc.length-1;
    else this.index=this.index-1;

    this.localizationTemp=this.item.tr_loc[this.index];
    this.szerokosc=this.localizationTemp.latitude;
    this.wysokosc=this.localizationTemp.longitude;


  }
  setItems(){
    this.index=0;
    this.localizationTemp=this.item.tr_loc[this.index];
    this.szerokosc=this.localizationTemp.latitude;
    this.wysokosc=this.localizationTemp.longitude;
  }
}
