import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-iss-sidebar',
  template: `
    <div class="menu">
      <button class="openbtn" type="button" (click)="open()" aria-label="Open ISS information">☰</button>
    </div>

    <aside class="sidebar" [class.sidebar--open]="isOpen()" aria-label="ISS information">
      <button class="closebtn" type="button" (click)="close()" aria-label="Close ISS information">×</button>
      <div class="card content">
        <div class="card-img"></div>
        <div class="container">
          <h2>International Space Station (ISS)</h2>
          <p>
            The ISS is a modular space station in low Earth orbit operated by an international partnership.
            <sup><a href="https://en.wikipedia.org/wiki/International_Space_Station" target="_blank" rel="noopener">Wikipedia</a></sup>
          </p>
          <div>
            Live Feed
            <iframe
              width="240"
              height="135"
              src="https://ustream.tv/embed/17074538"
              scrolling="no"
              allowfullscreen
              title="ISS live feed">
            </iframe>
          </div>
          <p class="twitter"><a href="https://twitter.com/Space_Station" target="_blank" rel="noopener">Tweets by Space_Station</a></p>
        </div>
      </div>
    </aside>
  `
})
export class IssSidebarComponent {
  readonly isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }
}
