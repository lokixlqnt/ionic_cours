import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { MonsuperproviderProvider } from '../../providers/monsuperprovider/monsuperprovider';
import { ProduitdetailPage } from '../produitdetail/produitdetail';
import { Produit } from '../../model/Produit';
import { AddProductPage } from '../add-product/add-product';

/**
 * Generated class for the ProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html',
})
export class ProduitPage {

  produits: Produit
  produit: Produit
  id: number

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public monSuperProvider: MonsuperproviderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitPage');


    this.monSuperProvider.getProducts().subscribe(produits => {
      console.log('produits ' + JSON.stringify(produits));
      this.produits = produits

    }, error => {
      console.log(error)
    });
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
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

  getProduct(id) {

    this.navCtrl.push(ProduitdetailPage, {
      id: id,

    })
    console.log('id envoyé : ' + id)
    // this.monSuperProvider.getProduct(id).subscribe(produit => {
    //   this.produit = produit
    //   this.navCtrl.setRoot(ProduitdetailPage), {
    //     produit: this.produit
    //   }
    // });

  }

  goToAddProduct() {
    this.navCtrl.push(AddProductPage, {

    })
  }
}

// return this.http.get(this.url + this.apiVersion + '/product/{id}', {
  // headers: this.headers }).map(response => response.json())
