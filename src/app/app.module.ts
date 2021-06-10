import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbreListComponent } from './components/arbre-list/arbre-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CreateNewArbreComponent } from './components/create-new-arbre/create-new-arbre.component';
import { BrancheListComponent } from './components/branche-list/branche-list.component';
import { LeafListComponent } from './components/leaf-list/leaf-list.component';
import { ArbreEditComponent } from './components/arbre-edit/arbre-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ArbreListComponent,
    NavbarComponent,
    CreateNewArbreComponent,
    BrancheListComponent,
    LeafListComponent,
    ArbreEditComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
