import { Component, signal } from '@angular/core';
import { Badge } from './components/badge/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Badge],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('test-angular');
}
