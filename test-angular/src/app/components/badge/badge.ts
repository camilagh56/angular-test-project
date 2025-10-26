import { Component, signal } from '@angular/core';
import { STATES_TAGS } from '../../constants/tags';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [NgClass],
  templateUrl: './badge.html',
  styleUrls: ['./badge.scss']
})

export class Badge {
  protected index = signal(0);
  protected mode = signal<'tag' | 'chip'>('chip');
  protected readonly statesTags = STATES_TAGS;
  

  get initialState() {
    return this.statesTags[this.index()]
  }

 nextState() {
    const nextIndex = (this.index() + 1) % this.statesTags.length;
    this.index.set(nextIndex);
  }

}
