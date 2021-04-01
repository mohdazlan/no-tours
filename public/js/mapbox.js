/*eslint-disable */
// document.addEventListener('DOMContentLoaded', function () {
//   const locations = JSON.stringify(
//     document.getElementById('map').dataset.locations
//   );
// });
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoibWhkYXpsYW5hYmF6aXoiLCJhIjoiY2trb2lhNG11Mmx0ZTJ2bGF3d3gzZ3JpdCJ9.5JqiLPMzNJTgfpaMVt8dsA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mhdazlanabaziz/ckmxv9cq5179718nxyrczu8bc',
  scrollZoom: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
