import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'telPipe'
})
export class TelPipe implements PipeTransform{
    transform(val: string, pays: string){
        let ajout : string = "";
        switch (pays) {
        case "France":
        ajout = "+33 ";
        break;
        case "Royaume-Uni":
        ajout = "+44 ";
        break;
        case "Algerie":
        ajout = "+213 ";
        break;
        case "Belgique":
        ajout = "+32 ";
        break;
        case "Espagne":
        ajout = "+34 ";
        break;
        case "Italie":
        ajout = "+39 ";
        break;
        case "Portugal":
        ajout = "+351 ";
        break;
        case "Luxembourg":
        ajout = "+352 ";
        break;
        case "Suisse":
        ajout = "+41 ";
        break;           
        default:
        ajout = "";
        break;
        }
        return ajout + val;
    }
}