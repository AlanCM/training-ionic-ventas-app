import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProspectosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prospectos',
  templateUrl: 'prospectos.html',
})
export class ProspectosPage {
contact:contact;
contacts : contact[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contact = new contact();
    this.contacts = [];
  }

  save(){
    this.contacts.push(this.contact);
    this.contact = new contact();
    console.log(this.contacts);
  }

  ionViewDidLoad() {
    console.log('Cargando');
  }

}

class contact{
  
  name    : String;
  email   : String;
  empresa : String;
  
  constructor(){
    this.name     = "";
    this.email    = "";
    this.empresa  = "";
  }

}

