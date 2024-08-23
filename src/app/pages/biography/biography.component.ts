import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';
import { InterestListComponent } from "../../interest-list/interest-list.component";

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [FooterComponent, NavComponent, InterestListComponent],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.css'
})
export class BiographyComponent {

}