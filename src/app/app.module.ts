import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {HttpModule} from "@angular/http";
import { CommonModule } from '@angular/common';

import { ListProduitComponent } from './catalogue/list-produit/list-produit.component';
import { NewProduitComponent } from './catalogue/new-produit/new-produit.component';
import {EditProduitComponent} from "./catalogue/edit-produit/edit-produit.component";
import {ProduitService} from "./services/Produit.service";

const appRoutes: Routes = [
  { path: 'newproduit', component: NewProduitComponent },
  { path: 'produitslist', component: ListProduitComponent },
  { path: 'editproduit/:id', component: EditProduitComponent },
    {path: '', redirectTo: 'contact', pathMatch: 'full'},
  {path: '**', redirectTo: 'contact'}
];



@NgModule({
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    AppComponent,
    HeaderComponent,
    EditProduitComponent,
    ListProduitComponent,
    NewProduitComponent

  ],
  imports: [
    CommonModule ,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [ ProduitService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
