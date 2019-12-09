import { Component,ViewChild,ElementRef } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProfileService} from "../../api/profile.service";
import {SearchServiceProvider} from "../../providers/search-service/search-service";
import {ProfileOut} from "../../model/profileOut";

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
  constructor(public navCtrl: NavController,private provilconfig: SearchServiceProvider, public navParams: NavParams,public ProfillRest:ProfileService,public events: Events,public sea:SearchServiceProvider) {
    this.id = this.provilconfig.getId2();

    this.getUsers(this.id);

  }

  ionViewDidLoad() {
    this.showmap();
  }
  getUsers(id:number) {

    this.ProfillRest.getProfile(id).subscribe(result => {

      Object.assign(this.item, result);

    });
  }
  showmap(){
    const location= new google.maps.LatLng(53.123482,18.008438);
    const options={
      center: location,
      zoom: 10
    };
  this.map= new google.maps.Map(this.mapRef,options);
  const map= new google.maps.Map;
this.addMArker(location,map);

  }
  addMArker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }
}
