import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InviatiComponent } from './inviati/inviati.component';
import { RicevutiComponent } from './ricevuti/ricevuti.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RispondiComponent } from './rispondi/rispondi.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'inviati', component: InviatiComponent },
  { path: 'ricevuti', component: RicevutiComponent },
  { path: 'rispondi', component: RispondiComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
