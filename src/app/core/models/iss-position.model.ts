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
