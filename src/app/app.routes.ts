import { Routes } from '@angular/router';
import { MissionVisionComponent } from './pages/mission-vision/mission-vision.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ChemCrossComponent } from './pages/chem-cross/chem-cross.component';
import { GetWordsComponent } from './pages/get-words/get-words.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'mission',
                component: MissionVisionComponent,
                title: "Acerca"
            },
            {
                path: 'biography',
                component: BiographyComponent,
                title: "Biografía"
            },
            {
                path: 'projects',
                component: ProjectsComponent,
                title: "Proyectos"
            },
            {
                path: 'technology',
                component: TechnologyComponent,
                title: "Tecnologías"
            },
            {
                path: '',
                component: LandingComponent,
                title: "Inicio"
            },
            {
                path: 'chemcross',
                component: ChemCrossComponent,
                title: "ChemCross"
            },
            {
                path: 'getwords',
                component: GetWordsComponent,
                title: "ChemCross"
            },
            {
                path: 'contact',
                component: ContactComponent,
                title: "Contacto"
            }
        ]
    }
];
