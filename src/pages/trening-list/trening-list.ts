import { Component,ViewChild,ElementRef } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ProfileService} from "../../api/profile.service";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileOut} from "../../model/profileOut";
import {Place} from "../../model/place";
import { NgZone  } from '@angular/core';
import {Training} from "../../model/training";
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
  treningOffer:Training={};
  limit:boolean;
  constructor(
               private zone: NgZone,public platform: Platform,public navCtrl: NavController,private provilconfig: SearchServiceProvider, public navParams: NavParams,public ProfillRest:ProfileService,public events: Events,public sea:SearchServiceProvider) {


    this.id = this.provilconfig.getId2();
    this.getUsers(this.id);
    this.index=0;

    console.log("wysokosc",this.wysokosc);

  }

  ionViewDidLoad() {
    console.log("na mapie");

  }
  getUsers(id:number) {

    this.ProfillRest.getProfile(id).subscribe(result => {

      Object.assign(this.item, result);

    });
  }

  showmap(lat,long){
    const location= new google.maps.LatLng(lat,long);
    const options={
      // center: location,
      center: {lat: +lat, lng: +long},
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
    if(this.index+1==this.item.tr_pl.length)this.index=0;
    else this.index=this.index+1;
    this.localizationTemp=this.item.tr_pl[this.index];
    this.szerokosc=this.localizationTemp.latitude;
    this.wysokosc=this.localizationTemp.longitude;
    // this.provilconfig.setlatitude(this.szerokosc);
    // this.provilconfig.setlongtitude((this.wysokosc));
    console.log("++++",this.item.tr_loc);
    console.log("uppp");
    console.log("szerokosc",this.szerokosc);
    console.log("wysokosc",this.wysokosc);

    console.log("index",this.index);
    this.searchOffer(this.index);
    this.checkLimitClients(this.treningOffer.clientLimit,this.treningOffer.actualClientNumber);
    this.platform.ready().then(() => {
      this.showmap(this.szerokosc, this.wysokosc);
    });
    // this.events.publish('updateScreen');
  }
  Down(){
    if(this.index==0)this.index=this.item.tr_pl.length-1;
    else this.index=this.index-1;

    this.localizationTemp=this.item.tr_pl[this.index];
    this.szerokosc=this.localizationTemp.latitude;
    this.wysokosc=this.localizationTemp.longitude;

    this.searchOffer(this.index);
    this.checkLimitClients(this.treningOffer.clientLimit,this.treningOffer.actualClientNumber);
console.log("down");
    this.platform.ready().then(() => {
      this.showmap(this.szerokosc, this.wysokosc);

    });

  }
  setItems(){
    this.index=0;
    this.localizationTemp=this.item.tr_pl[this.index];
    this.szerokosc=this.localizationTemp.latitude;
    this.wysokosc=this.localizationTemp.longitude;
  }
  searchOffer(index){

    for(let i=0;i<this.item.tr_pl.length;i++){
      if(this.item.tr_pl[index].id==this.item.tr_tr[i].id){
        this.treningOffer=this.item.tr_tr[i];
      }
    }
  }

  checkLimitClients(limit,clients){

    if(limit<=clients)this.limit=false;
    else this.limit=true;

  }
}
