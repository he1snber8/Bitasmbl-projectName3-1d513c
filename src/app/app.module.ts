import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from './shared/shared.module';
@NgModule({declarations:[AppComponent,ProfileComponent,ProjectsComponent,ContactComponent],imports:[BrowserModule,FormsModule,RouterModule.forRoot(routes),SharedModule],bootstrap:[AppComponent]})
export class AppModule{}