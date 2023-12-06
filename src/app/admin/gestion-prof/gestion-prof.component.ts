import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-prof',
  templateUrl: './gestion-prof.component.html',
  styleUrls: ['./gestion-prof.component.css']
})
export class GestionProfComponent implements OnInit {
  // Déclaration des variables 
  filteredElement: any;
  // Varible pour récupérer les profs enregistré dans le localStorage
  tabProfs: any;

  profFound: any;

  // Variables pour les informations du prof 
  nom: string= "";
  prenom: string= "";
  email: string= "";
  adresse: string= "";
  telephone: string= "";
  imageUrl: string= "";
  etat: number = 0;
  matiere: any;
  createAt: any;
  createBy: any;
  updateAt: any;
  updateBy: any;
  tabMatieresProf: any;
  classe: string = "";
  matiereProfChose: string = "";

  // Pour les apprenants 
  classeApprenant: any;

  // Pour les professeurs
  nbreProfActif: number = 0;
  nbreProfInactif: number = 0;
  matiereProfFound: any;
  idLastMatiereProf: number = 0;

  // Pour les matières:
  tabMatieres: any;
  // idLastMatiere: number = 0;
  nomMatiere: string = "";
  description: string = "";

  // Pour les evaluations:
  nbreEvaluation: number = 0;
  tabEvaluations: any;
  semestre: any;
  anneScolaire: any;
  typeEvaluation: any;
  etatEvaluation: any;
  numEvaluation: any; 
  classeEvalue: any; 
  listeApprenantsEvalues: any;

  // Pour les classe: 
  tabClasses: any;

  // L'administrateur qui s'est connecté 
  adminConnect: any;

  // L'apprenant sélectionné
  apprenantFound: any;

  // La classe choisi lors de l'ajout 
  classeFound: any;

  // L'annee scolaire courent: 
  anneeScolaireActu: any;

  // Recherche 
  // Pour récuperer le champs input 
  filterValue: string= "";
  // professeur
  tabProfsFilter: any;

  // Déclarations des methodes 
  ngOnInit(): void {
    // Récupération de l'annescolaire courent 
    this.anneeScolaireActu = JSON.parse(localStorage.getItem("anneeScolaireCourent") || "");
    
    // Récupérations du tableau 
    this.tabProfs = JSON.parse(localStorage.getItem("professeurs") || "[]");
    // console.log(this.tabProfs);
    this.tabProfsFilter = this.tabProfs;

    // On récupère l'admin qui s'est connecté
    this.adminConnect = JSON.parse(localStorage.getItem("adminConnect") || "[]");

    // On récupère et stocke le tableau des classes 
    this.tabClasses = JSON.parse(localStorage.getItem("classes") || "[]");

    
    // On récupère et stocke le tableau des matieres 
    this.tabMatieres = JSON.parse(localStorage.getItem("matieres") || "[]"); 

    // On récupère initialement le nombre de prof actifs et inactifs
    this.tabProfs.forEach((element:any) => {
      if(element.etatProf == 1){
        this.nbreProfActif += 1;
      }
      else {
        this.nbreProfInactif +=1;
      }
    });
  }

  // Methode de recherche automatique pour professeur
  onSearchProf(){
    // Recherche se fait selon le nom ou le prenom 
    this.tabProfsFilter = this.tabProfs.filter(
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

  // activer un prof 
  activerProf(user:any){
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
        user.etatProf = 1;
        user.updateAt = new Date();
        // On met à jour le tableau qui est stocké dans le localStorage 
        localStorage.setItem("professeurs", JSON.stringify(this.tabProfs))
        this.verifierChamps("Compte activé!", "", "success");     
        
        // Si on active un prof, le nombre de prof actifs augmente et le nombre de prof inactif dimunue
        this.nbreProfActif +=1;
        this.nbreProfInactif -= 1;
      }
    });
  }
  
  // desactiver un prof 
  desactiverProf(user:any){
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
        user.etatProf = 0;
        user.updateAt = new Date();
        // On met à jour le tableau qui est stocké dans le localStorage 
        localStorage.setItem("professeurs", JSON.stringify(this.tabProfs))
        this.verifierChamps("Compte désactivé!", "", "success");     
        
        // Si on désactive un prof, le nombre de prof actifs dimunie et le nombre de prof inactif augmente
        this.nbreProfActif -=1;
        this.nbreProfInactif += 1;
      }
    });
  }

  // ViderChamps
  viderChampsCompte(){
    this.nom = "";
    this.prenom = "";
    this.email = "";
    this.adresse = "";
    this.telephone = "";
  }

  // Modifier un prof
  chargerInfosProf(user:any){
    this.profFound = user;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.email = user.email;
    this.adresse = user.adresse;
    this.telephone = user.telephone;
    this.imageUrl = user.image;
  }

  // Modifier les informations
  modifierProf(){
    if(this.nom!="" && this.prenom!="" && this.email!="" && this.adresse!="" && this.telephone!=""){

      Swal.fire({
        title: "Etes-vous sur???",
        text: "Vous allez mofier ce contact",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#BE3144",
        cancelButtonColor: "#F05941",
        confirmButtonText: "Oui, je modifie!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.profFound.nom = this.nom;
          this.profFound.prenom = this.prenom;
          this.profFound.email = this.email;
          this.profFound.adresse = this.adresse;
          this.profFound.telephone = this.telephone;
          this.profFound.image = this.imageUrl;
          this.profFound.updateAt = new Date();
          this.profFound.updateBy = this.adminConnect.email;
          // On met à jour le tableau qui est stocké dans le localStorage 
          localStorage.setItem("professeurs", JSON.stringify(this.tabProfs))
          this.verifierChamps("Compte modifié!", "", "success");     
        }
      });

    }
  }

  // Détails d'un prof
  // Détails professeur 
  detailProf(prof:any){
    // On stocke le prof trouver dans la variable profound pour une utilisation ultérieure
    this.profFound = prof;
    // On cherche la classe du prof trouvé
    let classeFound = this.tabClasses.find((elemnt:any)=> elemnt.idClasse == prof.idClasse)
    // console.log(classeFound);
    // On récupère les informations du prof trouvé
    this.imageUrl = prof.image;
    this.nom = prof.nom;
    this.prenom = prof.prenom;
    this.email = prof.email;
    this.adresse = prof.adresse;
    this.telephone = prof.telephone;
    this.createAt = prof.createAt;
    this.createBy = prof.createBy;
    this.updateAt = prof.updateAt;
    this.updateBy = prof.updateBy;
    this.etat = prof.etatProf;
    this.tabMatieresProf = prof.matieres;
    this.classe = classeFound.nomClasse;
    // console.log(classeFound);
  }

  // Détails matiere du prof 
  detailsMatiere(matiere:any){
    this.nbreEvaluation = 0;
    this.nomMatiere = matiere.nomMatiere;
    this.description = matiere.description;

    if(matiere.evaluation.length){
      this.nbreEvaluation = matiere.evaluation.length;
      this.tabEvaluations = matiere.evaluation;
      console.log(matiere.evaluation);
    }
  }

  // Détails évaluation du prof
  detailsEvaluation(evaluation:any){
    this.numEvaluation = evaluation.idEvaluation;
    this.semestre = evaluation.semestre;
    this.anneScolaire = evaluation.anneeScolaire;
    this.typeEvaluation = evaluation.type;
    this.etatEvaluation = evaluation.etat;
    console.log(evaluation)
  }

  detailsNoteApprenant(classe:any){
    this.classeEvalue = classe;
    console.log(this.classeEvalue);
    let classeEvalueFound = this.tabClasses.find((element:any) => element.nomClasse == this.classeEvalue);
    console.log(classeEvalueFound);
    this.listeApprenantsEvalues = classeEvalueFound.apprenants;
    console.log(this.listeApprenantsEvalues)
  }

  showNote: boolean = true;
  noteApprenant: any;
  idAppFound: any
  
  // Notes des apprenants de la classe conserné qui ont fait l'évaluation
  noteApprenantFound(note:any, identifiant:any){
    console.log(note);
    console.log(this.numEvaluation)
    this.idAppFound = identifiant;
    console.log(this.idAppFound);
    // console.log(note.note);
    // On trouve la note correspondante à l'evaluation
    let noteFound = note.find((element:any) => element.idEvaluation == this.numEvaluation);
    console.log(noteFound);
    this.noteApprenant = noteFound.note;
    console.log(this.noteApprenant);
  }

  // On clicque pour ne voir que la note 
  showNoteApprenant(){
    this.showNote = !this.showNote;
  }

  // Methode pour affecter à nouveau une matiere au prof 
  affecterMatiere(){
    // Avant d'executer cette methode, on fait appel à la methode détailProf avec l'evenement (click)
    // pour récupérer le prof concerné
    console.log(this.profFound);

    console.log(this.matiereProfChose);
    // On vérifie si une matière a été choisie
    if(this.matiereProfChose){
      // On vérifie si la matiere sélectionnée n'est pas déjà dans le tableau des matières du prof
      let existMatiereProf = this.profFound.matieres.find((matiere:any) => matiere.idMatiere == this.matiereProfChose);
      if(existMatiereProf){
        this.verifierChamps("Matiere déja affecté!", "", "error"); 
      }
      else{
        // On ajoute la matiere dans le tableau des matieres du prof 
        // On s'assure d'abord de répérer le bon objet matiere dans la classe de matiere 
        // avant de l'affecter au prof
        let matiereFound = this.tabMatieres.find((matiere:any) => matiere.idMatiere == this.matiereProfChose);
        console.log(matiereFound);

        Swal.fire({
          title: "Etes-vous sur???",
          text: "Vous allez affecter une autre matiere à ce prof",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#BE3144",
          cancelButtonColor: "#F05941",
          confirmButtonText: "Oui, j'affecte!"
        }).then((result) => {
          if (result.isConfirmed) {
            // On ajoute la matiere dans le tableau des matieres du prof 
            this.profFound.matieres.push(matiereFound);
            
            // On modifie la date de derniere modification
            this.profFound.updateAt = new Date();

            console.log(this.tabProfs);
            // On met à jour le tableau qui est stocké dans le localStorage 
            localStorage.setItem("professeurs", JSON.stringify(this.tabProfs))
            this.verifierChamps("Matiere effecté avec succes!", "", "success");     
          }
        });
      }
    }
    else{
      // Si on ne choisi pas de matiere 
      this.verifierChamps("Aucune matiere sélectionnée!", "", "error"); 
    }

    // // On récupère la matiere 
    // this.matiereFound = this.tabMatieres.find((matiere:any) => matiere.idMatiere == this.matiereProf);
    // console.log(this.matiereFound);
  }
  
}
