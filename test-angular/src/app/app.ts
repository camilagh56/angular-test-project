import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Badge } from './components/badge/badge';
import { STATES_TAGS, StateTag } from './constants/tags';

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
  protected readonly sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
  protected readonly statesTagsVariants: StateTag[] = this.generateTagVariants();

    private generateTagVariants(): StateTag[] {
    const variants: StateTag[] = [];

    for (const tag of this.statesTags) {
      for (const size of this.sizes) {
        variants.push({ ...tag, size });
      }
    }
    return variants;
  }
}
