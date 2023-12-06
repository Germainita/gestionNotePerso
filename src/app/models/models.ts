// Model pour apprenant 
export class Apprenant {
    idApprenant: number = 0;
    etatApprenant: number = 0;
    nom: string = "";
    prenom : string = "";
    email : string = "";
    password: string = "";
    telephone : string = "";
    adresse : string = "";
    role : String= "";
    niveau: string = "";
    image: string = "";
    notes: any[] = [];
    note: string = "";
    createAt: string = "";
    createBy: string = "";
    updateAt: string = "";
    updateBy: string = "";
}

// Model pour classe 
export class Classe {
    idClasse: number = 0;
    etatClasse: number = 0;
    nomClasse: string = "";
    prof: string = "";
    apprenants: Apprenant[] = [];
    effectif: number = 0;
    createAt: string = "";
    createBy: string = "";
    updateAt: string = "";
    updateBy: string = "";
}

// Model pour évaluation
export class Evaluation {
    idEvaluation: number = 0;
    semestre: string = "";
    date: Date = new Date();
    type: string = "";
    anneeScolaire: string = "";
    etat: string ="";
    isNoted: string = "";
    // classe: Classe  = {idClasse: 0, nomClasse: "", effectif: 0, apprenants:[], createAt:"", createBy:"", updateAt:"", updateBy:"", prof:""};
}

export class Matiere{
    idMatiere: number = 0;
    nomMatiere: string = "";
    description: string = "";
    evaluation: Evaluation[] = [];
    createAt: string = "";
    createBy: string = "";
    updateAt: string = "";
    updateBy: string = "";
}

export class Professeur {
    idProf: number = 0;
    etatProf: number = 0;
    nom: string = "";
    prenom : string = "";
    email : string = "";
    password: string = "";
    telephone : string = "";
    adresse : string = "";
    role : string= "";
    image: string = "";
    matieres: Matiere[]=[];
    idClasse: number = 0;
    createAt: string = "";
    createBy: string = "";
    updateAt: string = "";
    updateBy: string = "";
}