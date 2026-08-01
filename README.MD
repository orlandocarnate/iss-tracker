# ISS Tracker

An Angular 22 and Three.js visualization of the International Space Station in real time. The ISS model was created in 3DS Max and exported as GLTF.

![ISS Tracker](./public/images/isstracker.jpg)

## Features

- Angular 22 standalone components and services
- Live ISS position polling every five seconds via [Where the ISS At](https://wheretheiss.at/w/developer)
- A 95-minute historical trajectory, sampled every five minutes
- Altitude-aware orbital positioning
- Rainbow trajectory colors from oldest red samples to newest violet samples
- Clickable ISS model that enables Earth-centered camera follow
- Automatic follow resume after 30 seconds without manual camera orbit
- Responsive Three.js canvas and custom Earth atmosphere shaders

## Architecture

| Area | Location |
| --- | --- |
| API access | `src/app/core/services/iss-api.service.ts` |
| Polling and trajectory state | `src/app/features/tracker/tracker.facade.ts` |
| Three.js rendering and camera behavior | `src/app/features/tracker/iss-scene/three-scene.service.ts` |
| Scene canvas component | `src/app/features/tracker/iss-scene/iss-scene.component.ts` |

See [Developer Notes](./DEVELOPERS_NOTES.md) for an ELI5 summary, migration details, coordinate alignment, camera behavior, and development decisions.

## Development

Angular 22 requires Node.js 22.22.3 or later.

```bash
npm install
npm start
```

Create a production build:

```bash
npm run build
```

## Custom shaders

The Earth atmosphere glow uses custom GLSL shaders. The original implementation was inspired by the [Chris Courses tutorial](https://youtu.be/vM8M4QloVL0).
