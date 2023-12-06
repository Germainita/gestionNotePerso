import { Component, OnInit } from '@angular/core';
import { Apprenant, Classe, Matiere, Professeur } from 'src/app/models/models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent implements OnInit {

  // Déclaration des variables
  nom: string = "";
  prenom: string  = "";
  email: string = "";
  password: string = "passer123&";
  telephone: string = "";
  adresse: string = "";
  imageUrl: string= "";
  etat: number = 0;
  tabMatieresProf: any;
  createAt: any;
  createBy: any;
  updateAt: any;
  updateBy: any;
  niveau: string = "";
  classe: any ;
  matiereProf: string = "";



  // role pour professeurs
  roleProf: string = "prof";

  // role pour apprenant
  roleApprenant: string = "apprenant";


  // Tables stockés dans le localStorage
  // professeurs: Professeur[] = [
  // ];
  // apprenants: Apprenant[] = [];
  matieres: Matiere[] = [];


  // users: any[]= [];

  // Pour les apprenants
  tabApprenants: any;
  idLastApprenant: number = 0;
  classeApprenant: any;

  // Pour les professeurs
  tabProfesseurs: any;
  lastIdProf: number = 0;
  matiereProfFound: any;

  // Pour les matières:
  tabMatieres: any;
  idLastMatiere: number = 0;
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
  tabApprenantsClasse: any;
  idLastClasse: number = 0;
  nomClasse: string = "";
  effectif: string = "";

  // L'admin connecté:
  tabUsers: any

  // L'administrateur qui s'est connecté
  adminConnect: any;

  // Le professeur qui sélectionné
  profFound: any;

  // L'apprenant sélectionné
  apprenantFound: any;

  // La classe choisi lors de l'ajout
  classeFound: any;

  // La matière trouvée
  matiereFound: any;

  // L'annee scolaire courent: 
  anneeScolaireActu: any;

  // Affichage entre le statistic des utilisateur et la gestion des matieres 
  showStatistic: boolean = true;
  
  // Recherche 
  // Pour récuperer le champs input 
  filterValue: string= "";

  filterValueProf: string = "";
  // professeur
  tabProfsFilter: any;
  // Apprenant: 
  tabApprenantsFilter: any;
  // Matiere 
  tabMatieresFilter: any;

  // Déclaration des méthodes
  // Méthode d'initialisation ngOnInit()
  ngOnInit(): void {
    // Récupération de l'annescolaire courent 
    this.anneeScolaireActu = JSON.parse(localStorage.getItem("anneeScolaireCourent") || "");
    
    // On récupère l'admin qui s'est connecté
    this.adminConnect = JSON.parse(localStorage.getItem("adminConnect") || "[]");

    console.log(this.adminConnect.email);
    // On stocke le tableaux des professeurs dans le localStorage
    // if(!localStorage.getItem("professeurs")){
    //   localStorage.setItem("professeurs", JSON.stringify(this.professeurs))
    // }
    // On récupère et stocke le tableau des professeurs
    this.tabProfesseurs = JSON.parse(localStorage.getItem("professeurs") || "[]");
    this.tabProfsFilter = this.tabProfesseurs;
    
    // On récupère et stocke le tableau des apprenants 
    this.tabApprenants = JSON.parse(localStorage.getItem("apprenants") || "[]");
    
    this.tabApprenantsFilter = this.tabApprenants;

    // On stocke le tableaux des matieres dans le localStorage
    // if(!localStorage.getItem("matieres")){
    //   localStorage.setItem("matieres", JSON.stringify(this.matieres))
    // }
    // On récupère et stocke le tableau des matieres 
    this.tabMatieres = JSON.parse(localStorage.getItem("matieres") || "[]");
    
    this.tabMatieresFilter = this.tabMatieres;
    // On stocke le tableaux des classes dans le localStorage
    // if(!localStorage.getItem("classes")){
    //   localStorage.setItem("classes", JSON.stringify(this.classes));
    // }
    // On récupère et stocke le tableau des classes
    this.tabClasses = JSON.parse(localStorage.getItem("classes") || "[]");

    // -----------------Fin stockage et récupérations des tableaux-----------------//

  }

  // Methode de recherche automatique pour professeur
  onSearchProf(){
    // Recherche se fait selon le nom ou le prenom 
    this.tabProfsFilter = this.tabProfesseurs.filter(
      (elt:any) => (elt?.nom.toLowerCase().includes(this.filterValueProf.toLowerCase())) || elt?.prenom.toLowerCase().includes(this.filterValueProf.toLowerCase())
    );
  }

  // Methode de recherche automatique pour un apprenant
  onSearchApprenant(){
    // Recherche se fait selon le nom ou le prenom 
    this.tabApprenantsFilter = this.tabApprenants.filter(
      (elt:any) => (elt?.nom.toLowerCase().includes(this.filterValue.toLowerCase())) || elt?.prenom.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  // Methode de recherche automatique pour une matiere
  onSearchMatiere(){
    // Recherche se fait selon le nom de la matière 
    this.tabMatieresFilter = this.tabMatieres.filter(
      (elt:any) => (elt?.nomMatiere.toLowerCase().includes(this.filterValue.toLowerCase()))
    );
  }

  // Methode pour afficher soit les statistics ou la gestion des matieres
  showStatisticFunction(){
    this.showStatistic = !this.showStatistic;
  }

  // Méthode pour afficher un sweetalert2 apres vérification
  result: any;
  verifierChamps(title:any, text:any, icon:any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    })
  }

  viderChampsCompte(){
    this.nom = "";
    this.prenom = "";
    this.email = "";
    this.adresse = "";
    this.telephone = "";
    this.imageUrl = "";
    this.niveau = "";
    this.classe = "";
    this.matiereProf = "";
  }

  viderChampsMatiere(){
    this.nomMatiere = "";
    this.description = "";
  }

   // methode pour vider le champs
  viderChampsClasse(){
    this.nomClasse="";
    this.effectif="";
  }

  // Ajouter un professeur
  ajouterProfesseur(){
    // On récupère l'identifiant du dernier prof
    if(this.tabProfesseurs.length){
      this.lastIdProf = this.tabProfesseurs[this.tabProfesseurs.length-1].idProf;
    }

    // On vérifie si les champs classe et matiere sont pris
    console.log(this.matiereProf);
    console.log(this.classe);

    // console.log(professeur)

    // Variable pour vérifier si le compte existe
    let existProf;

    // Variable pour récupérer la matiere dans le tableau des matières
    // let matiereFound;

    if(this.nom  && this.prenom  && this.email  && this.password  && this.telephone  && this.adresse  && this.classe){
      existProf = this.tabProfesseurs.find((element:any) => element.email == this.email);
      if(existProf){
        this.verifierChamps("Impossible", "Ce compte existe déjà", "error");
      }
      else{
        // console.log(this.classe)
        // Si le compte n'existe pas, on récupère la classe concerné
        this.classeFound = this.tabClasses.find((classe:any) => classe.idClasse == this.classe);
        console.log(this.classeFound);

        // On récupère la matiere
        this.matiereFound = this.tabMatieres.find((matiere:any) => matiere.idMatiere == this.matiereProf);
        console.log(this.matiereFound);

        // On crée l'objet professeur
        let professeur =  {
          idProf: this.lastIdProf + 1,
          etatProf: 1,
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          password: this.password,
          telephone: this.telephone,
          adresse: this.adresse,
          role: this.roleProf,
          image: this.imageUrl,
          matieres: [this.matiereFound],
          idClasse: this.classe,
          createAt: new Date(),
          createBy: this.adminConnect.email,
          updateAt: "",
          updateBy: "",
        }

        console.log(professeur);

        // On vérifie si la classe n'a pas de professeur d'abord
        // if (!this.classeFound.prof){
        //   //Si la classe n'a pas de prof On ajoute le prof dans la classe concerné en lui passant l'email du prof
        //   this.classeFound.prof = professeur.idProf;

        // }
        // On ajoute le prof dans le tableau des professeurs
        this.tabProfesseurs.push(professeur);

        // On met à jour le localstorage pour classe et prof
        localStorage.setItem("professeurs", JSON.stringify(this.tabProfesseurs));
        localStorage.setItem("classes", JSON.stringify(this.tabClasses));
        // this.verifierChamps("Felicitation!", "Compte créé avec succes", "success");
        
        Swal.fire({
          title: "Felicitation",
          text: "Professeur crée avec success",
          icon: "success"
        }).then((result) => {
          if(result.isConfirmed){
            window.location.reload()
          }
        });

        this.viderChampsCompte();

      }
    }

    else{
      this.verifierChamps("Erreur!", "Tous les champs sont obligatoires", "error");
    }
  }

  // Ajouter un apprenant
  ajouterApprenant(){
    if(this.tabApprenants.length){
      this.idLastApprenant = this.tabApprenants[this.tabApprenants.length-1].idApprenant;
    }
    let apprenant =  {
      idApprenant: this.idLastApprenant + 1,
      etatApprenant: 1,
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
      telephone: this.telephone,
      adresse: this.adresse,
      role: this.roleApprenant,
      note:"",
      notes: [],
      niveau:  this.niveau,
      image: this.imageUrl,
      createAt: new Date(),
      createBy: this.adminConnect.email,
      updateAt: "",
      updateBy: "",
    }

    let existApprenant;

    let nbreApprenants =  0;

    if(this.nom  && this.prenom  && this.email  && this.password != "" && this.telephone != "" && this.adresse  && this.imageUrl  && this.niveau ){
      existApprenant = this.tabApprenants.find((element:any) => element.email == this.email);

      this.classeFound = this.tabClasses.find((classe:any) => classe.idClasse == this.niveau);

      if(existApprenant){
        this.verifierChamps("Impossible", "Ce compte existe déjà", "error");
      }

      else if(this.classeFound){
        console.log("Classe trouvée:");
        console.log(this.classeFound);
        this.tabApprenantsClasse = this.classeFound.apprenants;
        console.log("tableau des apprenants de la classe")
        console.log(this.tabApprenantsClasse);
        //On vérifie si l'effectif est atteind
        if(this.classeFound.apprenants.length){
          nbreApprenants = this.classeFound.apprenants.length;
        }
        // On verifie si l'effectif n'est pas atteint
        if(nbreApprenants < this.classeFound.effectif){
          // On ajoute l'apprenant dans la classe
          this.tabApprenantsClasse.push(apprenant);

          // On ajoute l'apprenant dans la table des apprenants
          this.tabApprenants.push(apprenant);
          this.viderChampsCompte();

          // On met à jour le tableau des classes dans le localstorage
          console.log(this.classeFound);
          console.log(this.tabApprenantsClasse);
          console.log(this.tabClasses);
          localStorage.setItem("classes", JSON.stringify(this.tabClasses));
          localStorage.setItem("apprenants", JSON.stringify(this.tabApprenants));
          // this.verifierChamps("Felicitation!", "Compte créé avec succes", "success");

          Swal.fire({
            title: "Felicitation",
            text: "Apprenant crée avec success",
            icon: "success"
          }).then((result) => {
            if(result.isConfirmed){
              window.location.reload()
            }
          });

        }

        else{
          this.verifierChamps("Pas possible!", "L'effectif de la classe est atteinte", "error");
        }
      }
    }

    else{
      this.verifierChamps("Erreur!", "Tous les champs sont obligatoires", "error");
    }
  }

  // Ajouter une matiere
  ajouterMatiere(){
    // On récupère l'identifiant du dernier objet matiere
    if(this.tabMatieres.length){
      this.idLastMatiere = this.tabMatieres[this.tabMatieres.length - 1].idMatiere;
    }

    // On vérifie si les champs ne sont pas vide 
    if(this.nomMatiere=="" || this.description==""){
      this.verifierChamps("Impossible!", "le nom et la description sont obligatoires", "error");
    }
    
    else{
      // on vérifie si le nom de la matiere n'existe pas 
      let existMatiere = this.tabMatieres.find((matiere:any) => matiere.nomMatiere.toLowerCase() == this.nomMatiere.toLowerCase());
      console.log(existMatiere)
      if (existMatiere){
        // Si on trouve une matiere, l'operation s'arrete 
        this.verifierChamps("Impossible!", "Matiere déja ajoutée", "error");
      }

      else{
        // Si on ne trouve pas de matiere, on crée l'objet
        let matiere = {
          idMatiere: this.idLastMatiere + 1,
          nomMatiere: this.nomMatiere,
          description: this.description,
          evaluation: [],
          createAt: new Date(),
          createBy: this.adminConnect.email,
          updateAt: "",
          updateBy: "", 
        };
  
        this.tabMatieres.push(matiere);
        this.viderChampsMatiere();
  
        localStorage.setItem("matieres", JSON.stringify(this.tabMatieres));

        Swal.fire({
          title: "Felicitation",
          text: "Matière crée avec success",
          icon: "success"
        }).then((result) => {
          if(result.isConfirmed){
            window.location.reload()
          }
        });
        // this.verifierChamps("Felicitation!", "Matière crée avec success", "success");
      }

    }
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
        Swal.fire({
          title: "Felicitation",
          text: "Classe ajoutée",
          icon: "success"
        }).then((result) => {
          if(result.isConfirmed){
            window.location.reload()
          }
        });

        this.viderChampsClasse();
        
        localStorage.setItem("classes", JSON.stringify(this.tabClasses));
      }
    }
    console.log(this.nomClasse);
    console.log(this.effectif);

  }

  // Détails professeur
  detailProf(profFound:any){
    console.log(profFound.idClasse);
    // this.profFound = ;
    let classeFound = this.tabClasses.find((elemnt:any)=> elemnt.idClasse == profFound.idClasse)
    console.log(classeFound);
    this.imageUrl = profFound.image;
    this.nom = profFound.nom;
    this.prenom = profFound.prenom;
    this.email = profFound.email;
    this.adresse = profFound.adresse;
    this.telephone = profFound.telephone;
    this.createAt = profFound.createAt;
    this.createBy = profFound.createBy;
    this.updateAt = profFound.updateAt;
    this.updateBy = profFound.updateBy;
    this.etat = profFound.etatProf;
    this.tabMatieresProf = profFound.matieres;
    this.classe = classeFound.nomClasse;

    console.log(classeFound);
    // console.log(profFound.matieres[0].description)
    // if(this.tabMatieresProf.evaluation.length){
    //   this.nbreEvaluation = this.tabMatieresProf.evaluation.length

    // }
    // console.log(nbreEvaluation);
  }

  // Détails matiere du prof
  detailsMatiere(matiere:any){
    this.nbreEvaluation = 0;
    // this.matiereProfFound = matiere;
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

    // this.listeApprenantsEvalues.forEach((element:any) => {
    //   console.log(element.nom);
    //   console.log(element.prenom);
    //   console.log(element.email);
    //   console.log(element.notes);
    // });
    // console.log(this.listeApprenantsEvalues.notes)
  }

  showNote: boolean = true;
  noteApprenant: any;
  idAppFound: any

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

  showNoteApprenant(){
    this.showNote = !this.showNote;
  }

  // Détails apprenant 
  detailApprenant(user:any){
    this.apprenantFound = user;
    let classeFound = this.tabClasses.find((elemnt:any)=> elemnt.idClasse == this.apprenantFound.niveau)
    this.imageUrl = this.apprenantFound.image;
    this.nom = this.apprenantFound.nom;
    this.prenom = this.apprenantFound.prenom;
    this.email = this.apprenantFound.email;
    this.adresse = this.apprenantFound.adresse;
    this.telephone = this.apprenantFound.telephone;
    this.createAt = this.apprenantFound.createAt;
    this.createBy = this.apprenantFound.createBy;
    this.updateAt = this.apprenantFound.updateAt;
    this.updateBy = this.apprenantFound.updateBy;
    this.etat = this.apprenantFound.etatApprenant;
    this.classeApprenant = classeFound.nomClasse;
  }

  // Détail matiere 
  detailMatiere(matiere:any){
    this.nomMatiere = matiere.nomMatiere;
    this.description = matiere.description;
    this.updateAt = matiere.updateAt;
    this.updateBy = matiere.updateBy;
    this.createAt = matiere.createAt;
    this.createBy = matiere.createBy;
  }

  // Modification de la description d'une matiere 
  // Methode pour charger les informations
  chargerInfosMatiere(matiere:any){
    this.matiereFound = matiere;
    this.nomMatiere = matiere.nomMatiere;
    this.description = matiere.description;
    console.log(matiere);
  }

  // Methode pour modifier la matière 
  modifierMatiere(){
    Swal.fire({
      title: "Etes-vous sur???",
      text: "Vous allez modifier cette matiere",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BE3144",
      cancelButtonColor: "#F05941",
      confirmButtonText: "Oui, je modifie!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.matiereFound.description = this.description;
        this.matiereFound.updateAt = new Date();
        this.matiereFound.updateBy = this.adminConnect.email;
        console.log(this.matiereFound);
        console.log(this.tabMatieres);

        // Mis à jour du localStorage
        localStorage.setItem("matieres", JSON.stringify(this.tabMatieres));
      }
    });
  }

}
