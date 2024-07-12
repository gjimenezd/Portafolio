import { Routes } from '@angular/router';
import { MisionVisionComponent } from './pages/mision-vision/mision-vision.component';
import { BiografiaComponent } from './pages/biografia/biografia.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    {
        path: 'mision',
        component: MisionVisionComponent
    },
    {
        path: 'biografia',
        component: BiografiaComponent
    },
    {
        path: 'proyectos',
        component: ProyectosComponent
    },
    {
        path: 'tecnologias',
        component: TecnologiaComponent
    },
    {
        path: '',
        component: LandingComponent
    }
];
