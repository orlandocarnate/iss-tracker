import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, catchError, switchMap, timer } from 'rxjs';

import { IssPosition } from '../../core/models/iss-position.model';
import { IssApiService } from '../../core/services/iss-api.service';

const POLL_INTERVAL_MS = 5_000;
const MAX_TRAJECTORY_SAMPLES = 360;

@Injectable({ providedIn: 'root' })
export class TrackerFacade {
  private readonly api = inject(IssApiService);
  private readonly destroyRef = inject(DestroyRef);

  readonly currentPosition = signal<IssPosition | null>(null);
  readonly trajectory = signal<readonly IssPosition[]>([]);
  readonly error = signal<string | null>(null);
  readonly loading = signal(true);

  constructor() {
    this.loadHistoricalTrajectory();
    timer(0, POLL_INTERVAL_MS)
      .pipe(
        switchMap(() =>
          this.api.getCurrentPosition().pipe(
            catchError((error: unknown) => {
              this.error.set(
                error instanceof Error ? error.message : 'Unable to retrieve the ISS position.'
              );
              this.loading.set(false);
              return EMPTY;
            })
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((position) => this.updatePosition(position));
  }

  private loadHistoricalTrajectory(): void {
    this.api
      .getHistoricalTrajectory()
      .pipe(
        catchError((error: unknown) => {
          this.error.set(
            error instanceof Error ? error.message : 'Unable to retrieve the ISS trajectory.'
          );
          return EMPTY;
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((positions) => {
        this.trajectory.update((samples) => this.mergeTrajectory(positions, samples));
      });
  }

  private updatePosition(position: IssPosition): void {
    this.currentPosition.set(position);
    this.error.set(null);
    this.loading.set(false);
    this.trajectory.update((samples) => {
      if (samples.at(-1)?.timestamp === position.timestamp) {
        return samples;
      }

      return this.mergeTrajectory(samples, [position]);
    });
  }

  private mergeTrajectory(
    first: readonly IssPosition[],
    second: readonly IssPosition[]
  ): readonly IssPosition[] {
    const samplesByTimestamp = new Map<number, IssPosition>();
    [...first, ...second].forEach((sample) => samplesByTimestamp.set(sample.timestamp, sample));

    return [...samplesByTimestamp.values()]
      .sort((left, right) => left.timestamp - right.timestamp)
      .slice(-MAX_TRAJECTORY_SAMPLES);
  }
}
