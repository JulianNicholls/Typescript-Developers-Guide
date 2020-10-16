/// <reference types="@types/googlemaps" />

const mapDiv = document.getElementById('map');
new google.maps.Map(mapDiv, {
  zoom: 10,
  center: {
    lat: 50.9,
    lng: -1.82
  }
});
