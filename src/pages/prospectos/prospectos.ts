import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,public actionSheetCtrl: ActionSheetController) {
    this.contact = new contact();
    this.contacts = [];
  }

  save(){
    this.storage.set(this.contact.email.toString(),this.contact).then( obj => {this.loadContacts()});
    this.contact = new contact();
    //console.log(this.contacts);
  }

  loadContacts(){
    this.contacts = [];
    this.storage.keys().then( keySet =>{
      // get objects
      keySet.map(key=>{
        this.storage.get(key).then( obj =>{
          this.contacts.push(obj);
        });
      });
  
    });
  }

  openContactActionMenu(con : contact){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Prospecto: ' + con.name,
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          cssClass:'danger',
          handler: () => {
            console.log('Eliminar: ' + con.email);
            this.storage.remove(con.email.toString()).then(obj => this.loadContacts());
          }
        },{
          text: 'Editar',
          handler: () => {
            console.log('Editar:' + con.email);
            this.contact = con;
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  
  }

  ionViewDidLoad() {
    this.loadContacts();
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

