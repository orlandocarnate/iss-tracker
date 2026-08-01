import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      Orlando Carnate &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="https://github.com/orlandocarnate/iss-tracker" aria-label="ISS Tracker on GitHub">
        <span class="gitLogo"></span>
      </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a href="mailto:orlando3d@outlook.com">orlando3d@outlook.com</a>
    </footer>
  `
})
export class FooterComponent {}
