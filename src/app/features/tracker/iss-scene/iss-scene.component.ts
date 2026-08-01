import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';

import { IssPosition } from '../../../core/models/iss-position.model';
import { ThreeSceneService } from './three-scene.service';

@Component({
  selector: 'app-iss-scene',
  template: `<div #canvas class="scene-canvas" aria-label="Three-dimensional ISS tracker"></div>`,
  styles: [`
    .scene-canvas {
      inset: 0;
      overflow: hidden;
      position: fixed;
    }
  `],
  providers: [ThreeSceneService]
})
export class IssSceneComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() position: IssPosition | null = null;
  @Input() trajectory: readonly IssPosition[] = [];

  @ViewChild('canvas', { static: true }) private readonly canvas!: ElementRef<HTMLElement>;

  private ready = false;

  constructor(private readonly scene: ThreeSceneService) {}

  ngAfterViewInit(): void {
    void this.scene.initialize(this.canvas.nativeElement)
      .then(() => {
        this.ready = true;
        this.syncScene();
      })
      .catch((error: unknown) => {
        console.error('Unable to initialize the ISS scene.', error);
      });
  }

  ngOnChanges(): void {
    this.syncScene();
  }

  ngOnDestroy(): void {
    this.scene.destroy();
  }

  private syncScene(): void {
    if (this.ready) {
      this.scene.update(this.position, this.trajectory);
    }
  }
}
