import { Apprenant, Classe } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-apprenant',
  templateUrl: './gestion-apprenant.component.html',
  styleUrls: ['./gestion-apprenant.component.css']
})
export class GestionApprenantComponent implements OnInit {
  // classes: Classe [] = [
  //   {
  //     idClasse: 1,
  //     nomClasse: "",
  //     apprenants: [] = [
  //       {
  //         idApprenant: 1,
  //         etatApprenant: 1,
  //         nom: "",
  //         prenom : "",
  //         email : "",
  //         password: "",
  //         telephone : "",
  //         adresse : "",
  //         role :"",
  //         niveau: "",
  //         image: "",
  //         notes: []=[],
  //         createAt: "",
  //         createBy: "",
  //         updateAt: "",
  //         updateBy: ""
  //       },
  //     ],
  //     prof: "",
  //     effectif: 1,
  //     createAt: "",
  //     createBy: "",
  //     updateAt: "",
  //     updateBy: ""
  //   },
  // ];

  // apprenants: Apprenant [] = [];
      // apprenants: Apprenant [
      //   {
      //     idApprenant: 1,
      //     etatApprenant: 1,
      //     nom: "",
      //     prenom : "",
      //     email : "",
      //     password: "",
      //     telephone : "",
      //     adresse : "",
      //     role :"",
      //     niveau: "",
      //     notes: []=[],
      //     createAt: "",
      //     createBy: "",
      //     updateAt: "",
      //     updateBy: ""
      //   },
      // ]


    // variable du tableau d'apprenant
    // apprenants: Apprenant[] = [
    //   idApprenant: 0,
    //   etatApprenant: 0,
    //   nom: "",
    //   prenom "",
    //   email : "",
    //   password: "",
    //   telephone: "",
    //   adresse : "",
    //   role :"",
    //   niveau: "",
    //   notes: []=[],
    //   createAt: "",
    //   createBy: "",
    //   updateAt: "",
    //   updateBy:,
    // ];

    // Attribut qui stock l'apprenant qui s'est connecté
    apprenantConnect:any;
    apprenantTrouve:any;

    // declaration des variables
    idLastClasse: number = 0;
    nomClasse: string = "";
    effectif: string = "";
    createAt: string = "";
    createBy: string = "";
    updateAt: string = "";
    updateBy: string = "";

    // Pour les apprenant
    // Déclaration des variables
  nom: string = "";
  prenom: string  = "";
  email: string = "";
  password: string = "passer123&";
  telephone: string = "";
  adresse: string = "";
  imageUrl: string= "";
  etat: number = 0;
  niveau: string = "";
  classe: any ;
  //  apprenants: Apprenant[] = [
  //    // les variable du Apprenant
  //   // {
  //   // idApprenant: 1,
  //   // etatApprenant: 1,
  //   // nom: "HAMADY MARIGO",
  //   // prenom : "Dieynaba",
  //   // email : "dieba@gmail.com",
  //   // password: "passer123&",
  //   // telephone :"776543210",
  //   // adresse :"Pikine",
  //   // role : "apprenant",
  //   // niveau:"",
  //   // notes: []=[],
  //   // image: "",
  //   // createAt: "",
  //   // createBy: "",
  //   // updateAt: "",
  //   // updateBy: ""
  //   // },

  //  ];

  // L'annee scolaire courent: 
  anneeScolaireActu: any;

    //le tableau du localStorage pour la classe
    tabClasses:any;
    tabApprenants: any;
    tabApprenant: any;

    //
    classeTrouvee:any;
    // selectedClasse:any;

    //Pour faire la recherche
    filterValue = '';

  // L'administrateur qui s'est connecté
  adminConnect: any;

    //les element trouver
    filteredClasse:any;
    filteredApprenants:any;
    tabClasseActif: any;

    apprenantActif: number = 0;
    apprenantInactif: number = 0;
    classeActif: number = 0;
    classeInactif: number = 0;


        // Definition du constructure
  constructor(private route: ActivatedRoute) {}

  // Récupération de l'identifiant de celui qui s'est connecté
  idClasseConnect = this.route.snapshot.params['id'];



ngOnInit(): void {
  // Récupération de l'annescolaire courent 
  this.anneeScolaireActu = JSON.parse(localStorage.getItem("anneeScolaireCourent") || "");
    
      // Insertion du tableau d'utilisateur dans le localstorage
    // console.log(this.apprenants);
    // if(!localStorage.getItem("classes")){
    //   localStorage.setItem("classes", JSON.stringify(this.classes));
    // }
    // On récupère le tableau d'objets dans le localstorage
    this.tabClasses = JSON.parse(localStorage.getItem("classes") || "[]");
    // this.tabApprenant = this.tabClasses[0].apprenants
    console.log(this.tabClasses);

    // On récupère l'admin qui s'est connecté
    this.adminConnect = JSON.parse(localStorage.getItem("adminConnect") || "[]");

    // Pour les apprenants
    // if(!localStorage.getItem("apprenants")){
    //   localStorage.setItem("apprenants", JSON.stringify(this.apprenants));
    // }
    // Renvoie un tableau de apprenants
    this.tabApprenants = JSON.parse(localStorage.getItem("apprenants") || "[]");

    console.log(this.tabApprenants);
    // console.log(this.apprenants);
    this.filteredClasse = this.tabClasses;
    // this.tabClasseActif = this.tabClasses;
    this.tabClasseActif = this.tabClasses.filter(
      (elt:any) => (elt?.etatClasse==1)
    );
    this.filteredApprenants = this.tabApprenants;


    // Nombre d'apprenants actifs et inactifs
    this.tabApprenants.forEach((element:any) => {
      if(element.etatApprenant == 1){
        this.apprenantActif += 1;
      }
      else {
        this.apprenantInactif +=1;
      }
    });

    // Nombre de classe actifs et inactifs
    this.tabClasses.forEach((element:any) => {
      if(element.etatClasse == 1){
        this.classeActif += 1;
      }
      else {
        this.classeInactif +=1;
      }
    });

  //  this.apprenants = this.tabClasses.find((element:any) => element.idClasse == this.apprenants);
}

  onSearch(){
    // Recherche se fait selon le nom ou le prenom
    this.filteredClasse = this.tabClasses.filter(
      (elt:any) => (elt?.nomClasse.toLowerCase().includes(this.filterValue.toLowerCase()))
    );
    // this.filteredApprenants = this.tabApprenants.filter(
    //   (elt:any) => (elt?.nom.toLowerCase().includes(this.filterValue.toLowerCase()))
    // );
  }

  // Methode de recherche automatique pour un apprenant
  onSearchApprenant(){
    // Recherche se fait selon le nom ou le prenom 
    this.filteredApprenants = this.tabApprenants.filter(
      (elt:any) => (elt?.nom.toLowerCase().includes(this.filterValue.toLowerCase())) || elt?.prenom.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

   // Méthode pour afficher un sweetalert2 apres vérification
  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });

  }

  // methode pour ajouter classe
  ajouterClasse(){
    if(this.tabClasses.length){
      this.idLastClasse = this.tabClasses[this.tabClasses.length -1].idClasse;
    }

    let classe = {
      idClasse: this.idLastClasse + 1,
      nomClasse: this.nomClasse,
      effectif: this.effectif,
      etatClasse:1,
      apprenants: [],
      createAt: new Date (),
      createBy:this.adminConnect.email,
      updateAt: "",
      updateBy: "",
    }

    if(this.nomClasse == "" || this.effectif == "" ){
      this.verifierChamps("Erreur!", "Veuillez renseigner le nom du classe", "error");
    }
    else{
      let existClasse = this.tabClasses.find((element:any)=>element.nomClasse.toLowerCase() == this.nomClasse.toLowerCase());
      if (existClasse){
      this.verifierChamps("Erreur!", "La classe existe déja", "error");
      }
      else{
        this.tabClasses.push(classe);
        this.verifierChamps("Felicitation", "Classe ajoutée", "success");
        localStorage.setItem("classes", JSON.stringify(this.tabClasses));
      }
    }
    console.log(this.nomClasse);
    console.log(this.effectif);

  }

  // this.apprenantTrouve = selectedMatiere;
  // console.log('Matiere Found:', this.matiereFound);

  // methode pour recuperer matiere et evalautions
  openModal(selectedClasse: Classe) {
    // Utilisez la matière sélectionnée (tabMatieresProf) plutôt que l'ensemble du tableau
      this.classeTrouvee = selectedClasse;
      console.log(this.classeTrouvee.idClasse);
      console.log('classe Trouve:', this.classeTrouvee);
      this.apprenantTrouve = this.classeTrouvee.apprenants;
      console.log('Apprenant Found:', this.apprenantTrouve);
      // this.filteredElement = this.evaFound;
      //  console.log(this.filteredElement)

  }


  // methode pour vider le champs
  viderChampsClasse(){
    this.nomClasse="";
    this.effectif="";
  }

  // la variable pour modifier
  modifClasse : any;
  // methode pour modiffiier
  changerInfoClasse(paramClasse:any){
    this.modifClasse = paramClasse;
    this.nomClasse = paramClasse.nomClasse;
    this.effectif = paramClasse.effectif;

  }
  modificationClasse(){
    this.modifClasse.nomClasse = this.nomClasse;
    this.modifClasse.effectif = this.effectif;
    this.modifClasse.updateAt = new Date ();
    this.modifClasse.updateBy = this.adminConnect.email;
    localStorage.setItem("classes", JSON.stringify(this.tabClasses));
  }

  // Supprimer une classe 
  supprimerClasse(paramClasse:any){
    // Methode pour annuler l'inscription
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez supprimer la classe",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BE3144",
      cancelButtonColor: "#F05941",
      confirmButtonText: "Oui, je supprime!"
    }).then((result) => {
      if (result.isConfirmed) {
        // this.classeActif();
        this.classeActif -= 1;
        this.classeInactif += 1;
         // alert(paramContact.etatContact);
        paramClasse.etatClasse = 0;
        // On met à jour le tableau qui est stocké dans le localStorage
        localStorage.setItem("classes", JSON.stringify(this.tabClasses));
        this.verifierChamps("Classe supprimée!", "", "success");
      }
    });
  }

  // Restaurer une classe 
  restaurerClasse(paramClasse:any){
    // Methode pour annuler l'inscription
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez restaurer la classe",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BE3144",
      cancelButtonColor: "#F05941",
      confirmButtonText: "Oui, je restaure!"
    }).then((result) => {
      if (result.isConfirmed) {
        // this.classeActif();
        // this.tabClasseActif.length += 1;
        
        this.classeActif += 1;
        this.classeInactif -= 1;
         // alert(paramContact.etatContact);
        paramClasse.etatClasse = 1;
        // On met à jour le tableau qui est stocké dans le localStorage
        localStorage.setItem("classes", JSON.stringify(this.tabClasses));
        this.verifierChamps("Classe supprimée!", "", "success");
      }
    });
  }

choiceListe : boolean = true;
viewClasse: boolean = true;

// Methode pour voir la corbeille 
viewCorbeille(){
  this.viewClasse = !this.viewClasse;
  this.choiceListe = true;
}

// Methode pour voir les apprenants d'une classe 
listeChoiceFunction(){
  this.choiceListe = !this.choiceListe;
  this.viewClasse = true;
}

tabApprenantClasse: any;
nbreApprenantClasse: number = 0;

detailClasse(paramClasse:any){
  console.log(paramClasse);
  this.nbreApprenantClasse = 0;
  this.nomClasse = paramClasse.nomClasse;
  this.effectif = paramClasse.effectif;
  this.updateAt = paramClasse.updateAt;
  this.updateBy = paramClasse.updateBy;
  this.tabApprenantClasse = paramClasse.apprenants;
  console.log(this.tabApprenantClasse);

  // On récupere le nombre d'apprenant de la classe
  if(this.tabApprenantClasse.length){
    this.nbreApprenantClasse = this.tabApprenantClasse.length;
  }
  console.log("Nombre d'apprenant de la classe");
  console.log(this.nbreApprenantClasse);
}

// detailApprenant(paramApprenant:any){
//   // this.nomClasse == paramApprenant;
//   // this.filteredApprenants = paramApprenant.idClasse
//   console.log(paramApprenant);
// }

  // activer un apprenant
  activerApprenant(user:any){
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez activer ce contact le contact",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BE3144",
      cancelButtonColor: "#F05941",
      confirmButtonText: "Oui, j'active!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.apprenantActif += 1;
        this.apprenantInactif -= 1;

        user.etatApprenant = 1;
        user.updateAt = new Date();
        // On met à jour le tableau qui est stocké dans le localStorage
        localStorage.setItem("apprenants", JSON.stringify(this.tabApprenant))
        this.verifierChamps("Compte activé!", "", "success");
      }
    });
  }

  // desactiver un prof
  desactiverApprenant(user:any){
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez desactiver ce contact",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BE3144",
      cancelButtonColor: "#F05941",
      confirmButtonText: "Oui, je désactive!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.apprenantActif -= 1;
        this.apprenantInactif += 1;
        user.etatApprenant = 0;
        user.updateAt = new Date();
        // On met à jour le tableau qui est stocké dans le localStorage
        localStorage.setItem("apprenants", JSON.stringify(this.tabApprenant))
        this.verifierChamps("Compte désactivé!", "", "success");
      }
    });

    //
    console.log(user);
    console.log(this.tabApprenant);
  }

detailApprenant(user:any){
  // let classeFound = this.tabClasses.find((elemnt:any)=> elemnt.idClasse == this.apprenantFound.niveau)
  this.imageUrl = user.image;
  this.nom = user.nom;
  this.prenom = user.prenom;
  this.email = user.email;
  this.adresse = user.adresse;
  this.telephone = user.telephone;
  this.createAt = user.createAt;
  this.createBy = user.createBy;
  this.updateAt = user.updateAt;
  this.updateBy = user.updateBy;
  this.etat = user.etatApprenant;
  // this.classeApprenant = classeFound.nomClasse;
}

viderChampsDetailApprenant(){
  this.imageUrl = "";
  this.nom = "";
  this.prenom = "";
  this.email = "";
  this.adresse = "";
  this.telephone ="";
  this.createAt = "";
  this.createBy = "";
  this.updateAt = "";
  this.updateBy = "";
}

}