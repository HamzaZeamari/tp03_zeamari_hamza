import { Component, OnInit } from '@angular/core';
import { ServicesProd } from '../prod.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private prodService: ServicesProd) { }
  prix: string = "tout";
  marque: string = "tout";
  ngOnInit(): void {}
  confirmer() : void{

    var donneesJSON = {
      "marque": this.marque,
      "prix" : this.prix
    }
    this.prodService.appliquerProds(donneesJSON);
  }

}
