import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { DescriptionComponent } from './components/description/description.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { EducationComponent } from './components/education/education.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


@NgModule({
    declarations: [
        HomePageComponent,
        DescriptionComponent,
        ExperienceComponent,
        ProjectsComponent,
        KnowledgeComponent,
        EducationComponent,
        AboutMeComponent
    ],
    imports: [
        CommonModule,
        PortafolioRoutingModule,
        SharedModule,
    ]
})
export class PortafolioModule { }
