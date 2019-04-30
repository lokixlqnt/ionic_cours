import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Inscri } from '../../model/inscri'


/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  donnees: undefined
  detailInscri: Inscri

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.detailInscri = this.navParams.get('donnees')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
