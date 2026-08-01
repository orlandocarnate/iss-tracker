import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

import {
  IssPosition,
  OpenNotifyIssResponse,
  WhereTheIssPosition
} from '../models/iss-position.model';

const ISS_LOCATION_URL = 'http://api.open-notify.org/iss-now.json';
const ISS_TRAJECTORY_URL = 'https://api.wheretheiss.at/v1/satellites/25544/positions';
const ISS_ALTITUDE_KM = 408;
const TRAJECTORY_SAMPLE_COUNT = 10;
const TRAJECTORY_SAMPLE_INTERVAL_SECONDS = 300;

@Injectable({ providedIn: 'root' })
export class IssApiService {
  private readonly http = inject(HttpClient);

  getCurrentPosition() {
    return this.http.get<OpenNotifyIssResponse>(ISS_LOCATION_URL).pipe(
      map((response) => this.toIssPosition(response))
    );
  }

  getHistoricalTrajectory() {
    const timestamps = this.createTrajectoryTimestamps();
    return this.http
      .get<WhereTheIssPosition[]>(ISS_TRAJECTORY_URL, {
        params: { timestamps: timestamps.join(',') }
      })
      .pipe(map((positions) => positions.map((position) => this.toHistoricalPosition(position))));
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

  private createTrajectoryTimestamps(): number[] {
    const now = Math.floor(Date.now() / 1_000);
    return Array.from(
      { length: TRAJECTORY_SAMPLE_COUNT },
      (_, index) => now - (TRAJECTORY_SAMPLE_COUNT - index - 1) * TRAJECTORY_SAMPLE_INTERVAL_SECONDS
    );
  }
}
