import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MonsuperproviderProvider } from '../../providers/monsuperprovider/monsuperprovider';
import { Produit } from '../../model/Produit';


@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  produit: Produit
  newProduct: {}


  constructor(public navCtrl: NavController, public navParams: NavParams, public monSuperProvider: MonsuperproviderProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

  addProduct(produit) {
   console.log('product to create : ' + JSON.stringify(produit))
   this.monSuperProvider
     .addProduct(produit)
     .subscribe(
       (newProduct) => {
         this.produit = newProduct;
         this.navCtrl.pop();
       }
     );
 }

}
