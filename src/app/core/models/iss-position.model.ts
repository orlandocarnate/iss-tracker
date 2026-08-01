export interface IssPosition {
  latitude: number;
  longitude: number;
  altitudeKm: number;
  timestamp: number;
}

export interface OpenNotifyIssResponse {
  message: string;
  timestamp: number;
  iss_position: {
    latitude: string;
    longitude: string;
  };
}

export interface WhereTheIssPosition {
  altitude: number;
  latitude: number;
  longitude: number;
  timestamp: number;
}
