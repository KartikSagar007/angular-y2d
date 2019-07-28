import { Component } from '@angular/core';
import { MapsService } from './maps.service';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Map Lovers';
  lat: string ='';
  lng: string ='';

  location: Object;
  constructor(private map: MapsService){}
  ngOnInit(){
    this.map.getLocation().subscribe(data =>{
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }
}
