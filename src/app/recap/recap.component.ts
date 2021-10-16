import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  constructor() { }

  nom : string = "";
  prenom : string = "";
  adresse : string = "";
  ville : string = "";
  CP : string = "";
  tel : string = "";
  civi: string = "";
  pays : string = "";
  email : string = "";
  login : string = "";
  mdp : string = "";
  confirm_mdp : string = "";

  afficher: boolean = false;

  ngOnInit(): void {
  }

  @Input() 
  set donnees(donnees: any) {
    if (donnees) {
      this.afficher = true;
      this.nom = donnees['nom'];
      this.prenom = donnees['prenom'];
      this.adresse = donnees['adresse'];
      this.ville = donnees['ville'];
      this.CP = donnees['CP'];
      this.civi = donnees['civi'];
      this.tel = donnees['tel'];
      this.pays = donnees['pays'];
      this.email = donnees['email'];
      this.login = donnees['login'];
    }
  }
}
