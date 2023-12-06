import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Professeur } from './models/models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionNote_G5';

  // professeur : Professeur [] = [
  //   {
  //     idProf: 0,
  //     etatProf: 0,
  //     nom: "",
  //     prenom : "",
  //     email : "",
  //     password: "",
  //     telephone : "",
  //     adresse : "",
  //     role : "",
  //     matieres : [{
  //       idMatiere: 0,
  //       nomMatiere: "",
  //       evaluation: [{
  //         idEvaluation : 0,
  //         semestre: "",
  //         date : "",
  //         type : "",
  //         anneeScolaire : "",
  //         etat : "",
  //         classe : {
  //           idClasse: 0,
  //           nomClasse : "",
  //           apprenants : [
  //             {
  //               idApprenant :0,
  //               nom: "",
  //               prenom: "",
  //               email: "",
  //               password: "",
  //               telephone: "",
  //               adresse: "",
  //               role:"",
  //               etatApprenant: 0,
  //               notes: []
  //             }
  //           ]
  //         }
  //       }],
  //     }]
  //   }
  // ]
}
