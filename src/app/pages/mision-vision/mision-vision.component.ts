import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.css'
})
export class MisionVisionComponent {

}
