import { Component, OnInit } from '@angular/core';
import { Prod } from '../prod';
import { ServicesProd } from '../prod.service';

@Component({
  selector: 'app-listprod',
  templateUrl: './listprod.component.html',
  styleUrls: ['./listprod.component.css']
})
export class ListprodComponent implements OnInit {
  produits : Array<Prod>;
  constructor(private prodService: ServicesProd) { }

  ngOnInit(): void {
    this.prodService.obtenirProds();
    this.prodService.retourProds.subscribe(
      (donnees) => {
        this.produits = donnees;
      }
    );
  }

}
