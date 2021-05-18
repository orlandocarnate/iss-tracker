import * as THREE from "three";

export const issLocation = (id) => {
  return { x: 1, y: 2 };
};

export const convertToRadians = (radius, latitude, longitude) => {
  //   console.log("Lat:", latitude, "Long: ", longitude);
  const earthRadius = radius; // in km
  let radLat = (latitude * Math.PI) / 180;
  let radLong = (longitude * Math.PI) / 180;
//   console.log(radLat, radLong);

  let x = -earthRadius * Math.cos(radLat) * Math.cos(radLong);
  let y = earthRadius * Math.sin(radLat);
  let z = earthRadius * Math.cos(radLat) * Math.sin(radLong);

  return [x, y, z];
};

// export const issPastPositions = (times) => {
//   // get last 10 positions in 600 second increments
//   const timestamp = Date.now() / 1000;
//   const timeList = [];
//   for (let i = 0; i < 3000; i = i + 600) {
//     timeList.push(timestamp - i);
//   }

//   // call API
//   let api =
//     "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=";
//   api += timeList.join(",");

//   let plotData = []
//   fetch(api)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("data: ", data);
//       const plotData = [];

//       for (const element of data) {
//         console.log("element.latitude: ", element.latitude);
//         let point = new THREE.Vector3();
//         const converted = convertToRadians(element.latitude, element.longitude);
//         console.log(converted);
//         point.set(converted[0], converted[1], converted[2]);
//         console.log("point: ", point);
//         plotData.push(point);
//       }
//       console.log("plotData: ", plotData);
//     });

//   console.log("returned plotData: ", plotData);
//   const pastlineGeometry = new THREE.BufferGeometry().setFromPoints(plotData);
//   const pastlineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
//   const pastline = new THREE.Line(pastlineGeometry, pastlineMaterial);
//   scene.add(pastline);
// };
