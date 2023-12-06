import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professeur } from 'src/app/models/models';

@Component({
  selector: 'app-liste-notes',
  templateUrl: './liste-notes.component.html',
  styleUrls: ['./liste-notes.component.css']
})
export class ListeNotesComponent implements OnInit{

  userConnect:any;
  tabClasses:any;
  tabProfs:any;
  notesUser:any

  filteredSemestre: string = "Semestre 1"

  tabNotes: any[] = []  // Tableau d'objet pour récupérer l'ensemble des informations 
                        // relative au differentes note de l'apprenant 

  // tableau des notes filtré suivants le semestre
  tabNotesFiltre: any[] = []

  // L'annee scolaire courent: 
  anneeScolaireActu: any;

  anneeScolaire: any;

  constructor(private route: ActivatedRoute){}

  // L'identifiant de l'utilisateur connecté
  idapprenantConnect = this.route.snapshot.params['id'];

  ngOnInit(): void {
    // Récupération de l'annescolaire courent 
    this.anneeScolaireActu = JSON.parse(localStorage.getItem("anneeScolaireCourent") || "");

    this.anneeScolaire = this.anneeScolaireActu;

    // On récupère le tableau de classe du localstorage
    this.tabClasses = JSON.parse(localStorage.getItem("classes")||"[]");
    // console.log(this.tabClasses);

    // On récupère le tableau des Professeur
    this.tabProfs = JSON.parse(localStorage.getItem("professeurs")||"[]");

    // On recherche l'apprenant dans la liste des classes 
    for (let i=0; i< this.tabClasses.length; i++){
      this.userConnect = this.tabClasses[i].apprenants.find((element:any) => element.idApprenant == this.idapprenantConnect);
      if (this.userConnect){
        this.notesUser = this.userConnect.notes;
        
        // On trouve le prof 
        
        break;
      }
    }
    // console.log(this.notesUser[0]);
    for (let i=0; i<this.notesUser.length; i++){
      console.log(this.notesUser[i]); 

      // On trouve le prof qui a donné la note 
      let prof = this.tabProfs.find((elt:any)=> elt.idProf == this.notesUser[i].idProf);
      console.log(prof)

      // On trouve la matiere de l'apprenant évalué par ce prof 
      let matiere = prof.matieres.find((elt:any)=> elt.idMatiere == this.notesUser[i].idMatiere)
      console.log(matiere);

      // On trouve l'evaluation 
      let evalution  = matiere.evaluation.find((elt:any)=> elt.idEvaluation == this.notesUser[i].idEvaluation)
      // console.log(evalution.date)

      // on cree un objet qui va prendre toutes les infos à afficher 
      let note = {
        note: this.notesUser[i].note,
        matiere: matiere.nomMatiere,
        desc: matiere.description,
        typeEvaluation: evalution.type,
        anneeScolaire: evalution.anneeScolaire,
        semestre: evalution.semestre,
        date: evalution.date
      }

      // On ajoute l'objet dans le tableau des notes de l'utilisateur
      this.tabNotes.push(note);
    }

    this.tabNotesFiltre = this.tabNotes;
    // On filtre le tableau suivant le semestre

    console.log(this.tabNotes);
    console.log(this.userConnect);   
    
    console.log(this.filteredSemestre)

  }

  // Methode de recherche automatique pour professeur
  onSearchNotes(){
    // Recherche se fait selon le nom ou le prenom 
    if (!this.filteredSemestre){
      alert("pas de valeur")
      this.filteredSemestre = "Semestre 1";
    }
    this.tabNotesFiltre = this.tabNotes.filter(
      (elt:any) => ((elt?.semestre == this.filteredSemestre) && (elt?.anneeScolaire == this.anneeScolaire))

    );

    console.log(this.tabNotesFiltre);
  }

}
