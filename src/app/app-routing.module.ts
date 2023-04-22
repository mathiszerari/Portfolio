import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WritingComponent } from './writing/writing.component';

const routes: Routes = [
  { path: '/writing', component: WritingComponent },
  { path: '/home', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Redirige tout vers la page d'accueil sauf si le chemin est "writing"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }