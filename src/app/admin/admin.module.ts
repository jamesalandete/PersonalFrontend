import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonsComponent } from './pages/person/person.component';
import { PersonsFormComponent } from './pages/person/person-form/person-form.component';
import { PersonsTableComponent } from './pages/person/person-table/person-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule

  ],
  declarations: [
    AdminComponent,
    SidebarComponent,
    FooterComponent,
    PersonsComponent,
    PersonsFormComponent,
    PersonsTableComponent
  ],
  exports:[

  ],
  providers : [
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
