import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

import { IssPosition, OpenNotifyIssResponse } from '../models/iss-position.model';

const ISS_LOCATION_URL = 'http://api.open-notify.org/iss-now.json';
const ISS_ALTITUDE_KM = 408;

@Injectable({ providedIn: 'root' })
export class IssApiService {
  private readonly http = inject(HttpClient);

  getCurrentPosition() {
    return this.http.get<OpenNotifyIssResponse>(ISS_LOCATION_URL).pipe(
      map((response) => this.toIssPosition(response))
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
}
