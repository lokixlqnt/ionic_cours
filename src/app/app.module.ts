import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MembrePage } from '../pages/membre/membre'
import { ProfilPage } from '../pages/profil/profil'
import { ProspectPage } from '../pages/prospect/prospect';
import { ProduitPage } from '../pages/produit/produit';
import { ProduitdetailPage } from '../pages/produitdetail/produitdetail';
import { AddProductPage } from '../pages/add-product/add-product';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MonsuperproviderProvider } from '../providers/monsuperprovider/monsuperprovider';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MembrePage,
    ProfilPage,
    ProspectPage,
    ProduitPage,
    ProduitdetailPage,
    AddProductPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MembrePage,
    ProfilPage,
    ProspectPage,
    ProduitPage,
    ProduitdetailPage,
    AddProductPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MonsuperproviderProvider
  ]
})
export class AppModule {}
