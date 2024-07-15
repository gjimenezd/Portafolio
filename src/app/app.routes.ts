import { Routes } from '@angular/router';
import { MisionVisionComponent } from './pages/mision-vision/mision-vision.component';
import { BiografiaComponent } from './pages/biografia/biografia.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    {
        path: 'mision',
        component: MisionVisionComponent,
        title:"Acerca"
    },
    {
        path: 'biografia',
        component: BiografiaComponent,
        title:"Biografía"
    },
    {
        path: 'proyectos',
        component: ProyectosComponent,
        title:"Proyectos"
    },
    {
        path: 'tecnologias',
        component: TecnologiaComponent,
        title:"Tecnologías"
    },
    {
        path: '',
        component: LandingComponent,
        title:"Inicio"
    }
];
