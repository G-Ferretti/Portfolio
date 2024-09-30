import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectComponent } from './project/project.component';


export const routes: Routes = [
  {path: '', component: HomePage, pathMatch: 'full'},
  {path: 'home', component: HomePage},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'project', component: ProjectComponent}
];

export class AppRoutingModule{}