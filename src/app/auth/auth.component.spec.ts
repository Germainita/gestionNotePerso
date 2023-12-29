import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let app: AuthComponent;
  let route: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports : [FormsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    app = fixture.componentInstance;
    route = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test unitaire pour verifEmailConFonction()
  it('should valid email', () =>{
    const validEmail = "germaine@gmail.com"
    const invalidEmail = "ggbelle"

    // Email vide 
    app.emailCon = "";
    app.verifEmailConFonction();

    expect(app.verifEmailCon).toBe("Veuillez renseigner votre email");
    expect(app.exactEmailCon).toBe(false);

    // Email invalide 
    app.emailCon = invalidEmail;
    app.verifEmailConFonction();

    expect(app.verifEmailCon).toBe("Veuillez donner un email valide");
    expect(app.exactEmailCon).toBe(false);

    // Email valide
    app.emailCon = validEmail;
    app.verifEmailConFonction();

    expect(app.verifEmailCon).toBe("");
    expect(app.exactEmailCon).toBe(true);

    
  })

  // Test unitaire pour verifPasswordConFonction
  it ('should valid password', () =>{
    // Mot de passe vide 
    app.passwordCon = ""
    app.verifPasswordConFonction();

    expect(app.verifPasswordCon).toBe("Veuillez renseigner votre mot de passe");
    expect(app.exactPasswordCon).toBe(false);

    // Mot de passe invalide 
    app.passwordCon = "daba"
    app.verifPasswordConFonction();

    expect(app.verifPasswordCon).toBe("Mot de passe doit être supérieur ou égal à 5");
    expect(app.exactPasswordCon).toBe(false);

    // Mot de passe valide 
    app.passwordCon = "daba123&"
    app.verifPasswordConFonction();

    expect(app.verifPasswordCon).toBe("");
    expect(app.exactPasswordCon).toBe(true);
  }) 

  // Test unitaire pour la methode connexion 
  // Pour l'administrateur 
  it ('should admin connect', ()=>{
    const navigateSpy = spyOn(route, 'navigate'); // Spy on the router's navigate method
    // Email and password valid 
    app.exactEmailCon = true;
    app.exactPasswordCon = true;

    let admnin = {
      idUser: 1,
      etat: 1,
      nom: "Seck",
      prenom :  "Djiby",
      email :  "djibyseck@gmail.com",
      password: "passer123&",
      telephone :  "777777777",
      adresse :  "Ouakam",
      role :  "admin"
    }; 

    app.emailCon = admnin.email;
    app.passwordCon = admnin.password;

    app.connexion();
    
    expect(navigateSpy).toHaveBeenCalledWith(['admin']); 
  })

  // Pour le professeur
  it ('should professeur connect', ()=>{
    const navigateSpy = spyOn(route, 'navigate'); // Spy on the router's navigate method
    // Email and password valid 
    app.exactEmailCon = true;
    app.exactPasswordCon = true;

    let prof = {
      idProf: 1,
      etatProf: 1,
      nom: "Diouf",
      prenom: "Germaine",
      email: "ggbelle@gmail.com",
      password: "passer123&",
      telephone: "77788877",
      adresse: "Kahone",
      role: "prof",
    };

    app.emailCon = prof.email;
    app.passwordCon = prof.password;

    app.connexion();
    
    expect(navigateSpy).toHaveBeenCalledWith(['prof', prof.idProf]); 
  })

  // Pour le professeur
  it ('should apprenant connect', ()=>{
    const navigateSpy = spyOn(route, 'navigate'); // Spy on the router's navigate method
    // Email and password valid 
    app.exactEmailCon = true;
    app.exactPasswordCon = true;

    let apprenant =  {
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
    };

    app.emailCon = apprenant.email;
    app.passwordCon = apprenant.password;

    app.connexion();
    
    expect(navigateSpy).toHaveBeenCalledWith(['apprenant', apprenant.idApprenant]); 
  }) 
});
