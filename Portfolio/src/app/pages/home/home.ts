import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline'; // 1. IMPORTA O ARQUIVO

@Component({
  selector: 'app-home',
  imports: [TimelineComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
