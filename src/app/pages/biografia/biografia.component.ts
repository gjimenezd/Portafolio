import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';
import { InterestListComponent } from "../../interest-list/interest-list.component";

@Component({
  selector: 'app-biografia',
  standalone: true,
  imports: [FooterComponent, NavComponent, InterestListComponent],
  templateUrl: './biografia.component.html',
  styleUrl: './biografia.component.css'
})
export class BiografiaComponent {

}
