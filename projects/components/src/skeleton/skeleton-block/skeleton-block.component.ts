import { Component } from '@angular/core';

@Component({
  selector: 'emr-skeleton-block',
  exportAs: 'emrSkeletonBlock',
  template: '',
  styleUrl: './skeleton-block.component.scss',
  host: {
    'class': 'emr-skeleton-item emr-skeleton-block'
  }
})
export class SkeletonBlockComponent {
}
