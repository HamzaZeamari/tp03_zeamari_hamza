import { Injectable } from '@angular/core';
import { Prod } from './prod';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesProd {
  public retourProds : Subject<Array<Prod>> = new Subject<Array<Prod>>();
  produits : Array<Prod> = new Array<Prod>();
  toutproduits : Array<Prod> = new Array<Prod>();

  constructor(private httpClient: HttpClient) {}

  public obtenirProds(): Array<Prod> {
    if (this.produits.length === 0) {
      this.httpClient.get<Array<Prod>>(environment.baseUrl).subscribe(
        (response) => {
          this.produits = response;
          this.toutproduits = response;
          this.modifListProd();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    return this.produits;
  }

  public appliquerProds(donneesJSON: any) : void {
    this.produits = this.toutproduits.slice();
    if (donneesJSON["marque"] !== "tout") {
      this.produits = this.produits.filter(produit => produit.marque === donneesJSON["marque"]);
    }
    if (donneesJSON["prix"] === "inf65") {
      this.produits = this.produits.filter(produit => produit.prix <= 65);
    }
    if (donneesJSON["prix"] === "65-125") {
      this.produits = this.produits.filter(produit => produit.prix > 65 && produit.prix < 125);
    }
    if (donneesJSON["prix"] === "sup125") {
      this.produits = this.produits.filter(produit => produit.prix >= 125);
    }
    this.modifListProd();
  }

  private modifListProd() {
    this.retourProds.next(this.produits.slice());
  }
}
