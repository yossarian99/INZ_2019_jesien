import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {UserProfile} from "../../models/UserProfile-model";
import {ConfigServce} from "../../providers/config-service/config-service";
import {FormControl, FormGroup} from "@angular/forms";
import {RestProvider} from '../../providers/rest/rest';
import {form1} from "../../models/ID_form_model";
import {ProfileListService} from "../../services/Pfofile-list";
import {UserProfileN0c} from "../../models/UserProfile-model-no-constructor";
import {Opinie} from "../../models/Opnie-model";
import {ArrayID} from "../../models/id-array-ns";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfil_temp: UserProfileN0c = new UserProfileN0c();
  username = '';
  email = '';
  iii: string;
  Profils: UserProfile[];
  profil_temp: UserProfile = {};
  profil: UserProfile = {};
  profil_id: number;
  users: any;
  iD: number;
  form_object: form1 = {};
  Opinions: Opinie = {};

  nameSearch: string;
  surnameSearch: string;
  showprofil: boolean;
  item: UserProfile = {};
  // public IdArray: Array<ArrayID>=[] ;
  public IdArray = [];
  idforms: FormGroup;
  opinionforms: FormGroup;
  checkshow: boolean = false;

  constructor(private nav: NavController, private auth: AuthServiceProvider, private configServce: ConfigServce,
              public restProvider: RestProvider,
              public profilsService: ProfileListService) {

    this.showprofil = false;
    this.initializeIdform();
    this.initializeopinionforms();
  }

  public recreateAccount() {
    this.nav.push('ReregisterPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  onCheckItem(index: number) {
    this.auth.removeItem(index);
  }

  public getUserProfile() {
    this.configServce.getUserProfileService(this.profil_id).subscribe(result => {
      Object.assign(this.userProfil_temp, result[0]);
      console.log("result", this.userProfil_temp);
      if (this.checkshow === true) {
        this.profilsService.addItem_object(this.userProfil_temp);
        let TempID: ArrayID = {};
        TempID.id = this.profil_id;
        TempID.namearray = this.userProfil_temp.name;
        TempID.surnamearray = this.userProfil_temp.surname;
        this.IdArray.push(TempID);
        console.log("this show profil ", this.schowProfil(this.profil_id));
        this.item = this.userProfil_temp;
      }
      this.showprofil = true;
    });
  }

  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  addId() {
    console.log(this.profil_id);
    this.restProvider.setId(this.profil_id);
  }

  Idform() {
    this.profil_id = this.form_object.ID.valueOf();
    this.addId();
    this.getUserProfile();
    if (this.schowProfil(this.profil_id) != undefined) {
      let tempArrayID: ArrayID = {};
      tempArrayID = this.schowProfil(this.profil_id);
      console.log("temparray1=", tempArrayID);
      this.item = this.profilsService.getItems(tempArrayID.namearray, tempArrayID.surnamearray);
      console.log("item2=", this.item);
      this.checkshow = false;
    } else {
      if (this.schowProfil(this.profil_id) === undefined) {
        this.checkshow = true;
        console.log("item=", this.item);
      }
    }
    this.idforms.reset();
  };

  Opinionform() {
    if (this.showprofil === true) {
      this.Opinions.rating = 4;
      this.Opinions.name = "yossarian99@wp.pl";
      this.profilsService.addOponion(this.Opinions.description, this.Opinions.name, this.Opinions.email, this.Opinions.rating, this.userProfil_temp.name);
    }
    console.log("opinion=", this.Opinions.description);
    console.log("opinodawca=", this.Opinions.name);
    this.opinionforms.reset();
  }

  resetform() {
    this.showprofil = false;
  }

  schowProfil(id: number): ArrayID {
    let temp = undefined;
    for (let A of this.IdArray) {
      if (A.id === id) {
        return A;
      }
    }
    return temp;
  }

  goToSearch() {
    this.nav.push('ShowSearchPage');
  }

  initializeIdform() {
    this.idforms = new FormGroup({
      id: new FormControl()
    })
  }

  initializeopinionforms() {
    this.opinionforms = new FormGroup({
      opinionuser: new FormControl(),
      Opinionss: new FormControl(), email: new FormControl(), ocena: new FormControl()
    })
  }
}
