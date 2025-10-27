import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Badge } from './components/badge/badge';
import { STATES_TAGS } from './constants/tags';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Badge],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('test-angular');
  protected readonly statesTags = STATES_TAGS;
}
