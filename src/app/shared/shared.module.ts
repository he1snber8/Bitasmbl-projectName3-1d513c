import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
@NgModule({declarations:[NavbarComponent,ProjectCardComponent],imports:[CommonModule],exports:[NavbarComponent,ProjectCardComponent]})
export class SharedModule{}