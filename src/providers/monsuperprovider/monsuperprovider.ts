// import { Http } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MonsuperproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MonsuperproviderProvider {
  url = "/monapi"
  apiVersion = "/1.0"
  headers = new Headers

  constructor(public http: Http) {
    console.log('Hello MonsuperproviderProvider Provider');
  }
  getProducts() {
    return this.http.get(this.url + this.apiVersion + '/products', {
      headers: this.headers }).map(response => response.json())
  }
  getProduct(id) {
    return this.http.get(this.url + this.apiVersion + '/product/' + id, {
      headers: this.headers }).map(response => response.json())
  }
  addProduct(produit) {
    return this.http.post(this.url + this.apiVersion + '/addProduct', {
      headers: this.headers }).map(response => response.json())
  }
}
