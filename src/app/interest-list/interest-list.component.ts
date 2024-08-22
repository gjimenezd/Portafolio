import { Component } from '@angular/core';
import { Interests } from '../interfaces/interests';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-interest-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interest-list.component.html',
  styleUrl: './interest-list.component.css'
})
export class InterestListComponent {

  interest_list = Interests;
}
