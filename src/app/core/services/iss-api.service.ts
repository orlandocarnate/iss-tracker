import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { forkJoin, map } from 'rxjs';

import {
  IssPosition,
  OpenNotifyIssResponse,
  WhereTheIssPosition
} from '../models/iss-position.model';

const ISS_LOCATION_URL = 'http://api.open-notify.org/iss-now.json';
const ISS_TRAJECTORY_URL = 'https://api.wheretheiss.at/v1/satellites/25544/positions';
const ISS_ALTITUDE_KM = 408;
const TRAJECTORY_DURATION_SECONDS = 6 * 60 * 60;
const TRAJECTORY_SAMPLE_INTERVAL_SECONDS = 300;
const TRAJECTORY_BATCH_SIZE = 10;

@Injectable({ providedIn: 'root' })
export class IssApiService {
  private readonly http = inject(HttpClient);

  getCurrentPosition() {
    return this.http.get<OpenNotifyIssResponse>(ISS_LOCATION_URL).pipe(
      map((response) => this.toIssPosition(response))
    );
  }

  getHistoricalTrajectory(endTimestamp: number) {
    const timestamps = this.createTrajectoryTimestamps(endTimestamp);
    const requests = this.chunkTimestamps(timestamps).map((timestampBatch) =>
      this.http.get<WhereTheIssPosition[]>(ISS_TRAJECTORY_URL, {
        params: { timestamps: timestampBatch.join(',') }
      })
    );

    return forkJoin(requests).pipe(
      map((batches) =>
        batches
          .flat()
          .map((position) => this.toHistoricalPosition(position))
          .sort((left, right) => left.timestamp - right.timestamp)
      )
    );
  }

  private toIssPosition(response: OpenNotifyIssResponse): IssPosition {
    const latitude = Number(response.iss_position.latitude);
    const longitude = Number(response.iss_position.longitude);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      throw new Error('Open Notify returned invalid ISS coordinates.');
    }

    return {
      latitude,
      longitude,
      altitudeKm: ISS_ALTITUDE_KM,
      timestamp: response.timestamp
    };
  }

  private toHistoricalPosition(position: WhereTheIssPosition): IssPosition {
    if (
      !Number.isFinite(position.latitude) ||
      !Number.isFinite(position.longitude) ||
      !Number.isFinite(position.altitude)
    ) {
      throw new Error('Where the ISS At returned invalid trajectory coordinates.');
    }

    return {
      latitude: position.latitude,
      longitude: position.longitude,
      altitudeKm: position.altitude,
      timestamp: position.timestamp
    };
  }

  private createTrajectoryTimestamps(endTimestamp: number): number[] {
    const startTimestamp = endTimestamp - TRAJECTORY_DURATION_SECONDS;
    const sampleCount = TRAJECTORY_DURATION_SECONDS / TRAJECTORY_SAMPLE_INTERVAL_SECONDS;

    return Array.from(
      { length: sampleCount + 1 },
      (_, index) => startTimestamp + index * TRAJECTORY_SAMPLE_INTERVAL_SECONDS
    );
  }

  private chunkTimestamps(timestamps: readonly number[]): number[][] {
    const batches: number[][] = [];
    for (let start = 0; start < timestamps.length; start += TRAJECTORY_BATCH_SIZE) {
      batches.push(timestamps.slice(start, start + TRAJECTORY_BATCH_SIZE));
    }
    return batches;
  }
}
