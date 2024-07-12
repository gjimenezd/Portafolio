import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-biografia',
  standalone: true,
  imports: [FooterComponent, NavComponent],
  templateUrl: './biografia.component.html',
  styleUrl: './biografia.component.css'
})
export class BiografiaComponent {

}
