export interface Mappable {
  location: {
    lat: number;
    long: number;
  };
  markerContent(): string;
  colour: string;
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.long
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  private googleMap: google.maps.Map;
}
