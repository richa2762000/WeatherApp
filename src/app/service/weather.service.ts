import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { weatherData } from '../models/weather.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private Api_Url = 'https://api.openweathermap.org/data/2.5/';
  constructor(private http: HttpClient) { }
 
  getWeather(city:string): Observable<any> {
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=35538cdc5f514191633b0fd87d06a727&units=metric");
  }

}
