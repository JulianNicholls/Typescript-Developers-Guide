export class CustomMap {
  constructor(mapDivId: string) {
    const mapDiv = document.getElementById(mapDivId);

    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 10,
      center: {
        lat: 50.9,
        lng: -1.82
      }
    });
  }

  private googleMap: google.maps.Map;
}
