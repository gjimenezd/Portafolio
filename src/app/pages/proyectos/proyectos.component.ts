import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { ProjectListComponent } from "../../project-list/project-list.component";

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NavComponent, FooterComponent, ProjectListComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
