import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  authorName: string = 'Alizhan';
  courseName: string = 'Web Development KBTU';
  projectDate: string = 'This one is one of the hardest laboratory works in my whole life @Alizhan';
}