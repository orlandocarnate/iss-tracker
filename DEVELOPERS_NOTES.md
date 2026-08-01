# Developer Notes - 2026-08-01

## ELI5 summary

The app is a globe with a tiny ISS model moving around it. Angular runs the page, a service asks an ISS API where the station is, and Three.js draws the Earth, the station, and its orbit. We made the Earth picture line up with real coordinates, gave the orbit a rainbow trail, and taught the camera to follow the station without flying through the globe.

## What changed

### Angular 22 application

- Replaced the legacy Webpack and imperative JavaScript application with an Angular 22 standalone application.
- Added standalone application, scene, statistics, sidebar, and footer components.
- Moved static models, textures, images, and GLSL shaders to `public/`.
- Replaced direct DOM mutation and inline handlers with Angular bindings and signals.

### ISS data and trajectory

- `IssApiService` owns all API access.
- The app polls [Where the ISS At](https://wheretheiss.at/w/developer) every five seconds for the live ISS position.
- The first live response supplies the timestamp for a one-time, 95-minute historical trajectory request.
- The historical endpoint allows only small timestamp batches, so the service requests five-minute samples in batches of ten and merges them in chronological order.
- Live and historical positions now use the same API. Mixing Open Notify with Where the ISS At produced different locations for the same timestamp, which made the path appear to cross the Earth.
- Orbital radius is calculated from the Earth scene radius and the API-provided altitude:

  ```text
  earthRadiusScene * (1 + altitudeKm / 6371)
  ```

### Earth coordinate alignment

- Latitude and longitude use the Three.js sphere coordinate conversion directly; ISS positions are not offset for texture placement.
- The Earth mesh is no longer rotated to compensate for the texture.
- Instead, `public/shaders/fragment.glsl` offsets the texture U coordinate by `0.5`, aligning the equirectangular map's prime meridian with the geographic coordinate conversion.

### Three.js scene and camera

- `IssSceneComponent` owns the canvas and delegates renderer, model, path, and cleanup work to `ThreeSceneService`.
- The GLTF model loads once and moves smoothly toward each live position.
- The initial camera is placed on the current ISS-facing side of the Earth.
- An invisible hit sphere surrounds the ISS. Clicking it enables ISS follow.
- OrbitControls always target Earth, so manual drag-orbit remains Earth-centered.
- Manual orbit pauses following; after 30 seconds without drag movement, follow resumes.
- Follow moves the camera around an Earth-centered sphere at the current zoom distance. This preserves zoom and prevents a straight interpolation through the planet.
- The renderer sizes both its drawing buffer and CSS display size from the canvas host's bounds, keeping the Earth centered after resize.

### Trajectory appearance

- The 95-minute path is sampled at five-minute intervals.
- The oldest point is red and vertex colors progress through the rainbow to violet at the newest point.
- A violet connector joins the interpolated ISS model to the most recent trajectory point.

## Important files

| File | Responsibility |
| --- | --- |
| `src/app/core/services/iss-api.service.ts` | Live and historical ISS API requests |
| `src/app/features/tracker/tracker.facade.ts` | Polling, loading state, and trajectory merging |
| `src/app/features/tracker/iss-scene/three-scene.service.ts` | Three.js scene, model, path, camera, and cleanup |
| `src/app/features/tracker/iss-scene/iss-scene.component.ts` | Angular canvas host and Three.js lifecycle |
| `public/shaders/fragment.glsl` | Earth texture longitude alignment |

## Development

Angular 22 requires Node.js 22.22.3 or later.

```bash
npm install
npm start
```

Build a production bundle with:

```bash
npm run build
```
