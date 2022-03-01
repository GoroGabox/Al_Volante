mapboxgl.accessToken = 'pk.eyJ1IjoiZGFydXRoYW4iLCJhIjoiY2wwNzUxYnBtMDNoMjNlczg0ZXFrYTF3diJ9.YVGWPeQJLzV8JOpeJq2T4A';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/daruthan/cl076od47001i14nz6rtf7v17',
center: [-71.253398, -32.885100],
zoom: 13,
});


/* 
Add an event listener that runs
  when a user clicks on the map element.
*/
map.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(event.point, {
      layers: ['al-volante'] // replace with your layer name
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];
  
    /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
    */
    const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    .addTo(map);
  });