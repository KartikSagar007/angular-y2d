import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Location{
  latitude: string,
  longitude: string
}

@Injectable( )
export class MapsService {

  constructor(private http: HttpClient) { }
  getLocation(){
      return this.http.get<Location>('http://api.iapi.com/api/check?access_key=SAGARAIzaSyDm8YRR4f7320SagarBiB_WdicR8pOxzHMiwquosagar');
    }
}