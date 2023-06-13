import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { weatherData } from '../models/weather.model';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = 'jaipur';
  newData: any;
  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {
    this.getWeather(this.city);
    this.city='';    
  }

  onSubmit() {
    this.getWeather(this.city);
    this.city = '';
  }
  private getWeather(city:string){
    this.weatherService.getWeather(this.city).subscribe({
      next: (res) => {
        console.log(res)
        this.newData = res;
        console.log(this.newData)
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')

    })
    
  }
}
