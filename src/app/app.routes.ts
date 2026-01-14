import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
export const routes:Routes=[{path:'',component:ProfileComponent},{path:'projects',component:ProjectsComponent},{path:'contact',component:ContactComponent},{path:'**',redirectTo:''}];