import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.css'
})
export class MissionVisionComponent {

}
