import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MembrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-membre',
  templateUrl: 'membre.html',
})
export class MembrePage {

  p: undefined

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.p = this.navParams.get('nom')
    console.log('this.p = ' + this.p)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembrePage');
  }


}
