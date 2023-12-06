import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Apprenant, Professeur, Classe, Matiere } from '../models/models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // Déclarations des variables
  // le tableau user qui contient la liste des utilisateurs avec leur role
  users : User[] = [
    {
      idUser: 1,
      etat: 1,
      nom: "Seck",
      prenom :  "Djiby",
      email :  "djibyseck@gmail.com",
      password: "passer123&",
      telephone :  "777777777",
      adresse :  "Ouakam",
      role :  "admin"
    },
  ]

  // Initialiation des matieres avec des données 
  matieres: Matiere[] =  [
    {
      idMatiere: 1,
      nomMatiere: "SVT",
      description: "Science de la vie et de la terre",
      evaluation: [],
      createAt: "2023-11-18T01:08:59.632Z",
      createBy: "djibyseck@gmail.com",
      updateAt: "",
      updateBy: ""
    },
  ]

  // Initialisation des profs avec des données 
  professeurs: Professeur[] = [
    {
      idProf: 1,
      etatProf: 1,
      nom: "Diouf",
      prenom: "Germaine",
      email: "ggbelle@gmail.com",
      password: "passer123&",
      telephone: "77788877",
      adresse: "Kahone",
      role: "prof",
      image: "https://img.freepik.com/free-photo/talking-audience_1098-14094.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph",
      matieres: [
        {
          idMatiere: 1,
          nomMatiere: "SVT",
          description: "Science de la vie et de la terre",
          evaluation: [
            {
              idEvaluation: 1,
              semestre: "Semestre 1",
              date: new Date(),
              type: "Devoir",
              etat: "En cours",
              isNoted: "non",
              anneeScolaire: "2023/2024",
            },
            {
              idEvaluation: 2,
              semestre: "Semestre 1",
              date: new Date(),
              type: "Examen",
              etat: "faite",
              isNoted: "oui",
              anneeScolaire: "2023/2024",
            },
            {
              idEvaluation: 3,
              semestre: "Semestre 1",
              date: new Date(),
              type: "Devoir",
              etat: "reportee",
              isNoted: "non",
              anneeScolaire: "2023/2024",
            },
          ],
          createAt: "2023-11-18T01:08:59.632Z",
          createBy: "djibyseck@gmail.com",
          updateAt: "",
          updateBy: ""
        },
      ],
      idClasse: 3,
      createAt: "2023-11-18T09:06:07.356Z",
      createBy: "djibyseck@gmail.com",
      updateAt: "",
      updateBy: ""
    },
    {
      idProf: 2,
      etatProf: 1,
      nom: "Sow",
      prenom: "Ndeye Awa",
      email: "ndeya@gmail.com",
      password: "passer123&",
      telephone: "77788877",
      adresse: "Dakar",
      role: "prof",
      image: "https://img.freepik.com/free-photo/talking-audience_1098-14094.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph",
      matieres: [
        {
          idMatiere: 1,
          nomMatiere: "SVT",
          description: "Science de la vie et de la terre",
          evaluation: [],
          createAt: "2023-11-18T01:08:59.632Z",
          createBy: "djibyseck@gmail.com",
          updateAt: "",
          updateBy: ""
        },
      ],
      idClasse: 2,
      createAt: "2023-11-18T09:06:07.356Z",
      createBy: "djibyseck@gmail.com",
      updateAt: "",
      updateBy: ""
    }
  ];

  // Initialisation des apprenants avec des donnees 
  apprenants: Apprenant[] = [
    {
      idApprenant: 1,
      etatApprenant: 1,
      nom: "Faye",
      prenom: "Helene",
      email: "helene@gmail.com",
      password: "passer123&",
      telephone: "77788877",
      adresse: "Ouakam",
      role: "apprenant",
      notes: [
        {note: 12, idEvaluation: 2, idMatiere: 1, idProf: 1}
      ],
      note:"",
      niveau: "3",
      image: "https://img.freepik.com/free-photo/portrait-young-woman-with-laptop-hands-outside-school_641386-1029.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph",
      createAt: "2023-11-18T11:29:05.398Z",
      createBy: "djibyseck@gmail.com",
      updateAt: "",
      updateBy: ""
    },
    {
      idApprenant: 2,
      etatApprenant: 1,
      nom: "Fall",
      prenom: "Marie",
      email: "marie@gmail.com",
      password: "passer123&",
      telephone: "77788877",
      adresse: "Ouakam",
      role: "apprenant",
      notes: [
        {note: 18, idEvaluation: 2, idMatiere: 1, idProf: 1}
      ],
      note:"",
      niveau: "3",
      image: "https://img.freepik.com/premium-photo/portrait-female-teacher-school-class-smiling-middle-aged-woman-wearing-glasses-with-folded-hands-looking-camera-classroom-with-teenage-students-desk-background_116407-14432.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph",
      createAt: "2023-11-18T11:29:05.398Z",
      createBy: "djibyseck@gmail.com",
      updateAt: "",
      updateBy: ""
    },
    {
      idApprenant: 3,
      etatApprenant: 1,
      nom: "Gueye",
      prenom: "Marie",
      email: "mariegueye@gmail.com",
      password: "passer123&",
      telephone: "77788877",
      adresse: "Ouakam",
      role: "apprenant",
      notes: [
        {note: 15, idEvaluation: 2, idMatiere: 1, idProf: 1}
      ],
      note:"",
      niveau: "3",
      image: "https://img.freepik.com/free-photo/african-american-woman-wearing-student-backpack-holding-books-smiling-happy-pointing-with-hand-finger-side_839833-34702.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph",
      createAt: "2023-11-18T11:29:05.398Z",
      createBy: "djibyseck@gmail.com",
      updateAt: "",
      updateBy: ""
    },
  ];

  // Initialisation des classes avec des donnees 
  classes: Classe[] = [
    {
      idClasse: 1,
      etatClasse: 1,
      nomClasse: "Licence 1",
      effectif: 2,
      apprenants: [],
      prof: "",
      createAt: "",
      createBy: "",
      updateAt:"",
      updateBy: ""
    },
    {
      idClasse: 2,
      etatClasse: 1,
      nomClasse: "Licence 2",
      effectif: 20,
      apprenants: [],
      prof: "ndeya@gmail.com",
      createAt: "",
      createBy: "",
      updateAt:"",
      updateBy: ""
    },
    {
      idClasse: 3,
      etatClasse: 1,
      nomClasse: "Licence 3",
      effectif: 30,
      apprenants: [
        {
          idApprenant: 1,
          etatApprenant: 1,
          nom: "Faye",
          prenom: "Helene",
          email: "helene@gmail.com",
          password: "passer123&",
          telephone: "77788877",
          adresse: "Ouakam",
          role: "apprenant",
          notes: [
            {note: 12, idEvaluation: 2, idMatiere: 1, idProf: 1}
          ],
          note:"",
          niveau: "3",
          image: "https://img.freepik.com/free-photo/portrait-young-woman-with-laptop-hands-outside-school_641386-1029.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph",
          createAt: "2023-11-18T11:29:05.398Z",
          createBy: "djibyseck@gmail.com",
          updateAt: "",
          updateBy: ""
        },
        {
          idApprenant: 2,
          etatApprenant: 1,
          nom: "Fall",
          prenom: "Marie",
          email: "marie@gmail.com",
          password: "passer123&",
          telephone: "77788877",
          adresse: "Ouakam",
          role: "apprenant",
          notes: [
            {note: 18, idEvaluation: 2, idMatiere: 1, idProf: 1}
          ],
          note:"",
          niveau: "3",
          image: "https://img.freepik.com/premium-photo/portrait-female-teacher-school-class-smiling-middle-aged-woman-wearing-glasses-with-folded-hands-looking-camera-classroom-with-teenage-students-desk-background_116407-14432.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph",
          createAt: "2023-11-18T11:29:05.398Z",
          createBy: "djibyseck@gmail.com",
          updateAt: "",
          updateBy: ""
        },
        {
          idApprenant: 3,
          etatApprenant: 1,
          nom: "Gueye",
          prenom: "Marie",
          email: "mariegueye@gmail.com",
          password: "passer123&",
          telephone: "77788877",
          adresse: "Ouakam",
          role: "apprenant",
          note:"",
          notes: [
            {note: 15, idEvaluation: 2, idMatiere: 1, idProf: 1}
          ],
          niveau: "3",
          image: "https://img.freepik.com/free-photo/african-american-woman-wearing-student-backpack-holding-books-smiling-happy-pointing-with-hand-finger-side_839833-34702.jpg?size=626&ext=jpg&ga=GA1.1.59389668.1692912989&semt=sph",
          createAt: "2023-11-18T11:29:05.398Z",
          createBy: "djibyseck@gmail.com",
          updateAt: "",
          updateBy: ""
        },
      ],
      prof: "ggbelle@gmail.com",
      createAt: "",
      createBy: "",
      updateAt: "",
      updateBy: ""
    },
  ];


  // Le tableau temporaire qui stocke les utilisateurs du localStorage
  tabUsersTmp: any;

  tabProfs: any;

  tabClasses: any;

  tabApprenants: any;

  tabMatieres: any;

  // L'utilisateur admin trouvée dans le localStorage
  userFound: any;

  // L'utilisateur prof trouvée dans le localStorage
  userProfFound: any;

  // L'utilisateur apprenant trouvée dans le localStorage
  userApprenantFound: any;

  // Variable pour la connexion
  emailCon : String = "";
  passwordCon: String = "";

  // Pour vérifier les champs pour la connexion
  verifEmailCon : String = "";
  verifPasswordCon: String = "";

  // Variables Si les valeurs sont exactes
  exactEmailCon : boolean = false;
  exactPasswordCon : boolean = false;

  // L'annee scolaire
  // L'annee scolaire courent: 
  anneeScolaireCourent: any;
  annee = new Date();
  anneeActu = this.annee.getFullYear();
  // Le premier mois commence par 0 avec la methode getMonth()
  moisActu = this.annee.getMonth(); 

  // Le constructeur
  constructor(private route:Router){}

  // Déclaration des méthodes
  // Methode ngOnInit
  ngOnInit(): void {
    // L'annee scolaire commence en octobre (mois = 9) et se termine en juillet (Mois = 6)
    // Par contre Aout et septembre font partie de l'annee scolaire en cours 
    // si le mois et compris entre 0 et 6 l'annee scolaire= anneeActu -1/anneeActu
    if(this.moisActu >=0 && this.moisActu <= 8){
      this.anneeScolaireCourent = (this.anneeActu -1) + "/" + this.anneeActu;
    }
    else if(this.moisActu >= 9 && this.moisActu <=11){
      this.anneeScolaireCourent = this.anneeActu + "/" + (this.anneeActu + 1);

    }

    // on stocke l'annee scolaire dans le localstogare 
    localStorage.setItem("anneeScolaireCourent", JSON.stringify(this.anneeScolaireCourent));

    // Pour les administrateurs
    // Insertion du tableau d'utilisateur dans le localstorage
    // console.log(this.users);
    if(!localStorage.getItem("utilisateurs")){
      localStorage.setItem("utilisateurs", JSON.stringify(this.users));
    }
    // Renvoie un tableau de pour les administrateurs
    this.tabUsersTmp = JSON.parse(localStorage.getItem("utilisateurs") || "[]");


    // Pour les professeurs
    if(!localStorage.getItem("professeurs")){
      localStorage.setItem("professeurs", JSON.stringify(this.professeurs));
    }
    // Renvoie un tableau de professeurs
    this.tabProfs = JSON.parse(localStorage.getItem("professeurs") || "[]");

    // Pour les apprenants
    if(!localStorage.getItem("apprenants")){
      localStorage.setItem("apprenants", JSON.stringify(this.apprenants));
    }
    // Renvoie un tableau de apprenants
    this.tabApprenants = JSON.parse(localStorage.getItem("apprenants") || "[]");

    // On stocke le tableaux des classes dans le localStorage
    if(!localStorage.getItem("classes")){
      localStorage.setItem("classes", JSON.stringify(this.classes));
    }
    // On récupère et stocke le tableau des classes
    this.tabClasses = JSON.parse(localStorage.getItem("classes") || "[]");

    // On stocke le tableaux des matieres dans le localStorage
    if(!localStorage.getItem("matieres")){
      localStorage.setItem("matieres", JSON.stringify(this.matieres))
    }
    // On récupère et stocke le tableau des matieres
    this.tabMatieres = JSON.parse(localStorage.getItem("matieres") || "[]");
  }


  // Fonction de Verification de l'email pour la fonctionnalité connexion
  verifEmailConFonction(){
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactEmailCon = false;

    if(this.emailCon == ""){
      this.verifEmailCon = "Veuillez renseigner votre email";
    }
    else if (!this.emailCon.match(emailPattern) ){
      this.verifEmailCon = "Veuillez donner un email valide";
    }
    else {
      this.verifEmailCon = "";
      this.exactEmailCon = true;
    }
  }

  // Fonction de Verification de l'email pour la fonctionnalité connexion
  verifPasswordConFonction(){
    this.exactPasswordCon = false;
    if(this.passwordCon == ""){
      this.verifPasswordCon = "Veuillez renseigner votre mot de passe";
    }
    else if (this.passwordCon.length < 5 ){
      this.verifPasswordCon = "Mot de passe doit être supérieur ou égal à 5";
    }
    else{
      this.verifPasswordCon = "";
      this.exactPasswordCon = true;
    }
  }

  // Méthode pour afficher un sweetalert2 apres vérification
  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }


  // Methode pour vider les champs de la connexion
  viderChampsCon(){
    this.emailCon = "";
    this.passwordCon = "";

    this.verifEmailCon = "";
    this.verifPasswordCon = "";

    this.exactEmailCon = false;
    this.exactPasswordCon = false;
  }

  // Methode pour se connecter
  connexion(){
    if (this.exactEmailCon && this.exactPasswordCon){
      this.userFound = this.tabUsersTmp.find((element:any) => element.email == this.emailCon && element.password == this.passwordCon);
      this.userProfFound = this.tabProfs.find((element:any) => element.email == this.emailCon && element.password == this.passwordCon);
      this.userApprenantFound = this.tabApprenants.find((element:any) => element.email == this.emailCon && element.password == this.passwordCon);

      if(this.userFound){
        this.route.navigate(['admin']);
        localStorage.setItem("adminConnect", JSON.stringify(this.userFound));
        this.viderChampsCon();
        this.verifierChamps("Félicitation!", "Authentifié avec succes", "success");

      }

      else if(this.userProfFound){
        if(this.userProfFound.etatProf == 1){
          this.route.navigate(['prof', this.userProfFound.idProf]);
          this.viderChampsCon();
          this.verifierChamps("Félicitation!", "Authentifié avec succes", "success");
        }
        else{
          this.verifierChamps("Erreur!", "Professeur innactif", "error");
        }
      }

      else if(this.userApprenantFound){
        if(this.userApprenantFound.etatApprenant == 1){
          this.viderChampsCon();
          this.verifierChamps("Félicitation!", "Authentifié avec succes", "success");
          this.route.navigate(['apprenant', this.userApprenantFound.idApprenant]);
        }
        else{
          this.verifierChamps("Erreur!", "Apprenant innactif", "error");
        }
      }

      else{
        this.verifierChamps("Erreur!", "Le compte n'existe pas", "error");
      }
    }
  }
}
