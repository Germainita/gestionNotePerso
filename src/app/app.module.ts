import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { GestionProfComponent } from './admin/gestion-prof/gestion-prof.component';
import { GestionApprenantComponent } from './admin/gestion-apprenant/gestion-apprenant.component';
import { ListeNotesComponent } from './apprenant/liste-notes/liste-notes.component';
import { FormsModule } from '@angular/forms';
import { DashbordAdminComponent } from './admin/dashbord-admin/dashbord-admin.component';
import { AccueilProfComponent } from './prof/accueil-prof/accueil-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    GestionProfComponent,
    GestionApprenantComponent,
    ListeNotesComponent,
    DashbordAdminComponent,
    AccueilProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
