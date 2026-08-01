import { Component, inject } from '@angular/core';

import { IssSceneComponent } from './features/tracker/iss-scene/iss-scene.component';
import { IssSidebarComponent } from './features/tracker/iss-sidebar/iss-sidebar.component';
import { IssStatsComponent } from './features/tracker/iss-stats/iss-stats.component';
import { TrackerFacade } from './features/tracker/tracker.facade';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [IssSceneComponent, IssSidebarComponent, IssStatsComponent, FooterComponent],
  template: `
    <app-iss-scene
      [position]="tracker.currentPosition()"
      [trajectory]="tracker.trajectory()">
    </app-iss-scene>
    <app-iss-stats [position]="tracker.currentPosition()"></app-iss-stats>
    <app-iss-sidebar></app-iss-sidebar>
    @if (tracker.error(); as error) {
      <p class="tracker-error" role="alert">{{ error }}</p>
    }
    @if (tracker.loading()) {
      <p class="tracker-loading">Loading ISS position…</p>
    }
    <app-footer></app-footer>
  `
})
export class AppComponent {
  readonly tracker = inject(TrackerFacade);
}
