import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordAdminComponent } from './admin/dashbord-admin/dashbord-admin.component';
import { AccueilProfComponent } from './prof/accueil-prof/accueil-prof.component';
import { ListeNotesComponent } from './apprenant/liste-notes/liste-notes.component';
import { AuthComponent } from './auth/auth.component';
import { GestionProfComponent } from './admin/gestion-prof/gestion-prof.component';
import { GestionApprenantComponent } from './admin/gestion-apprenant/gestion-apprenant.component';

const routes: Routes = [
  // On définit la route par défaut 
  {path: '', redirectTo: 'auth', pathMatch: 'full'},

  // La page qui s'affiche par défaut
  {path: 'auth', component: AuthComponent},

  // On définit les routes pour l'administrateur
  {path: 'admin', component: DashbordAdminComponent},

  // Pour gestion des professeurs
  {path: 'admin-gestionProf', component: GestionProfComponent},

  // Pour gestion des apprenants
  {path: 'admin-gestionApprenant', component: GestionApprenantComponent},

  // Route pour interface professeur
  {path: 'prof/:id', component:AccueilProfComponent},

  // Route pour interface apprenant 
  {path: 'apprenant/:id', component: ListeNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
