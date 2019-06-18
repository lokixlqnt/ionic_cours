import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MonsuperproviderProvider } from '../../providers/monsuperprovider/monsuperprovider';
import { Produit } from '../../model/Produit';




/**
 * Generated class for the ProduitdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produitdetail',
  templateUrl: 'produitdetail.html',
})
export class ProduitdetailPage {

  produit: Produit
  id: number


  constructor(public navCtrl: NavController, public navParams: NavParams, public monSuperProvider: MonsuperproviderProvider) {
    this.id = this.navParams.get('id')
    console.log('id récupéré : ' + this.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitdetailPage');
    this.monSuperProvider.getProduct(this.id).subscribe(produit => {
      console.log('produit 1 ' + JSON.stringify(produit));
      this.produit = produit
    });
  }

}
