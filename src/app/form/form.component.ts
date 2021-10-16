import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

const email_regex : RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  @Output() redirection:EventEmitter<Event> = new EventEmitter();


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

  nom_error : boolean = false;
  prenom_error : boolean = false;
  adresse_error : boolean = false;
  ville_error : boolean = false;
  CP_error : boolean = false;
  tel_error : boolean = false;
  civi_error: boolean = false;
  pays_error : boolean = false;
  email_error : boolean = false;
  login_error : boolean = false;
  mdp_error : boolean = false;
  confirm_mdp_error : boolean = false;

  form : boolean = false;
  isOn : boolean = true;
  donnees: any = {};

  onSubmit() : void {
    this.nom_error = this.nom.trim() === "";
    this.prenom_error = this.prenom.trim() === "";
    this.adresse_error = this.adresse.trim() === "";
    this.ville_error = this.ville.trim() === "";
    this.CP_error = this.CP.trim() === "" || parseInt(this.CP) === NaN;
    this.civi_error = this.civi.trim() === "";
    this.tel_error = this.tel.trim() === "" || parseInt(this.tel) === NaN || this.tel.length !== 10;
    this.pays_error = this.pays.trim() === "";
    this.email_error = !email_regex.test(this.email);
    this.login_error = this.login.trim() === "";
    this.mdp_error = this.mdp.trim() === "" || 
      this.mdp !== this.confirm_mdp || this.confirm_mdp.trim() === "";

      console.log(this.nom_error);
      console.log(this.prenom_error);
      console.log(this.adresse_error);
      console.log(this.ville_error);
      console.log(this.civi_error);
      console.log(this.CP_error);
      console.log(this.tel_error);
      console.log(this.login_error);
      console.log(this.email_error);
      console.log(this.mdp_error);

    this.form = !this.rechercheErreur();
    if (!this.rechercheErreur()) {
      this.donnees = {
        nom: this.nom,
        prenom: this.prenom,
        adresse: this.adresse,
        ville: this.ville,
        CP: this.CP,
        tel: this.tel,
        civi: this.civi,
        pays: this.pays,
        email: this.email,
        login: this.login
      }
      this.redirection.emit(this.donnees);
      console.log(this.donnees);
    }
  }

  private rechercheErreur() : boolean {
    return this.nom_error ||
      this.prenom_error ||
      this.adresse_error ||
      this.ville_error ||
      this.CP_error ||
      this.civi_error || 
      this.tel_error ||
      this.pays_error ||
      this.email_error ||
      this.login_error ||
      this.mdp_error;
  }


}
