import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { project_list } from '../interfaces';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects = project_list;

}
