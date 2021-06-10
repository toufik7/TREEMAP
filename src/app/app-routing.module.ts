import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbreEditComponent } from './components/arbre-edit/arbre-edit.component';
import { ArbreListComponent } from './components/arbre-list/arbre-list.component';
import { BrancheListComponent } from './components/branche-list/branche-list.component';
import { CreateNewArbreComponent } from './components/create-new-arbre/create-new-arbre.component';
import { LeafListComponent } from './components/leaf-list/leaf-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ArbreListComponent },
  { path: 'cretaArbre', component: CreateNewArbreComponent},
  { path: 'arbre/:id/branches', component: BrancheListComponent },
  { path: 'arbre/:id1/branch/:id2/branches', component: LeafListComponent },
  { path: 'editArbre/:id', component: ArbreEditComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
