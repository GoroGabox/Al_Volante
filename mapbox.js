mapboxgl.accessToken = 'pk.eyJ1IjoiZGFydXRoYW4iLCJhIjoiY2wwNzUxYnBtMDNoMjNlczg0ZXFrYTF3diJ9.YVGWPeQJLzV8JOpeJq2T4A';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/daruthan/cl076od47001i14nz6rtf7v17',
center: [-71.253398, -32.885100],
zoom: 13,
});

var marker1 = new mapboxgl.Marker()
    .setLngLat([-71.24968491969445, -32.880506984068])
    .addTo(map);

var marker2 = new mapboxgl.Marker()
    .setLngLat([-71.2580018688544, -32.887993928661935])
    .addTo(map);