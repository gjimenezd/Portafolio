import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
