import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IssPosition } from '../../../core/models/iss-position.model';

@Component({
  selector: 'app-iss-stats',
  template: `
    @if (position) {
      <section id="stats" aria-live="polite">
        <table>
          <thead><tr><th colspan="2">Current Stats</th></tr></thead>
          <tbody>
            <tr><td>Latitude:</td><td>{{ position.latitude | number: '1.4-4' }}</td></tr>
            <tr><td>Longitude:</td><td>{{ position.longitude | number: '1.4-4' }}</td></tr>
            <tr><td>Altitude:</td><td>{{ position.altitudeKm }} km</td></tr>
            <tr><td>Google Maps:</td><td><a [href]="mapsUrl" target="_blank" rel="noopener">Link</a></td></tr>
          </tbody>
        </table>
      </section>
    }
  `,
  imports: [DecimalPipe]
})
export class IssStatsComponent {
  @Input() position: IssPosition | null = null;

  get mapsUrl(): string {
    if (!this.position) {
      return '';
    }
    const { latitude, longitude } = this.position;
    return `https://www.google.com/maps/place/${latitude},${longitude}/@${latitude},${longitude},8z`;
  }
}
