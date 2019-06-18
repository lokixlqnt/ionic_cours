import { Component } from '@angular/core';
import { NavController, AlertController, Button } from 'ionic-angular';
import { MembrePage } from '../membre/membre';
import { ProfilPage } from '../profil/profil';
import { Inscri } from '../../model/inscri';
import { ProduitPage } from '../produit/produit';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public donnees = []
  public membre: Inscri

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  goToMembre(randParam) {
    this.navCtrl.push(MembrePage, {
      nom: randParam
    })
  }
  goToProspect() {
    this.navCtrl.push(MembrePage, {
    })
  }
  goToProduit() {
    this.navCtrl.push(ProduitPage, {
    })
  }

  alertInscri() {

    const alert = this.alertCtrl.create({
      title: 'Inscription',
      inputs: [{
        type: 'text',
        placeholder: 'Nom',
        name: 'nom'
      },
      {
        type: 'text',
        placeholder: 'Prénom',
        name: 'prenom'
      },
      {
        type: 'number',
        placeholder: 'Téléphone',
        name: 'tel'
      }],

      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'secondary',
      },
      {
        text: 'Valider',
        handler: data => {
          this.membre = {
            name: data.nom,
            firstname: data.prenom,
            phone: data.tel
          }
          this.navCtrl.push(ProfilPage, {
            donnees: this.membre
          })

        }
      }]
    })


alert.present();
  }

}
