import { Component } from '@angular/core';
import { FooterComponent } from '../pages/footer/footer.component';
import { NavComponent } from '../pages/nav/nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
