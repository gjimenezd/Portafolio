import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tecnologia',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './tecnologia.component.html',
  styleUrl: './tecnologia.component.css'
})
export class TecnologiaComponent {

}
