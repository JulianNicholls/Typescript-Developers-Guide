import { User } from './User';
import { Company } from './Company';

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      title: user.name,
      position: {
        lat: user.location.lat,
        lng: user.location.long
      }
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      title: company.companyName,
      position: {
        lat: company.location.lat,
        lng: company.location.long
      }
    });

  }

  private googleMap: google.maps.Map;
}
