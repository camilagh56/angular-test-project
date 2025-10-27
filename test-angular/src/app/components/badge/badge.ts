import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { STATES_TAGS } from '../../constants/tags';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass, MatIconModule, NgIf],
  templateUrl: './badge.html',
  styleUrls: ['./badge.scss']
})

export class Badge {
  @Input() type: 'tag' | 'chip' = 'tag';
  @Input() color: 'primary' | 'success' | 'warning' | 'danger' | 'info' = 'primary';
  @Input() icon?: string;
  @Input() label: string = 'Etiqueta';
  @Input() size: 'small' | 'medium' | 'large' = 'large';

  protected showButtonClose = signal(true)
  protected readonly statesTags = STATES_TAGS;

  @Output() onClose = new EventEmitter<void>();

  handleClose(event: MouseEvent) {
    event.stopPropagation();
    this.onClose.emit();
    this.showButtonClose.set(false);
  }

}
