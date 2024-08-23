import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { ProjectListComponent } from "../../project-list/project-list.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavComponent, FooterComponent, ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
