import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyRoutingService } from '../middleware/validate.routing';
import { HomeComponent } from './components/home/home.component';
import { PersonsComponent } from './pages/person/person.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [VerifyRoutingService],
  },
  {
    path: 'person',
    component: PersonsComponent,
    canActivate: [VerifyRoutingService],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
