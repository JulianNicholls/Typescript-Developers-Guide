interface Mappable {
  location: {
    lat: number;
    long: number;
  }
}

export class CustomMap {
  constructor(mapDivId: string) {
    const mapDiv = document.getElementById(mapDivId);

    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 6,
      center: {
        lat: 54,
        lng: -3
      }
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long
      }
    });
  }

  private googleMap: google.maps.Map;
}
