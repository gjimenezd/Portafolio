import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { technologies } from '../../interfaces/technology';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-tecnologia',
  standalone: true,
  imports: [NavComponent, FooterComponent, NgFor],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

  technologies = technologies;

  constructor() { }

}
