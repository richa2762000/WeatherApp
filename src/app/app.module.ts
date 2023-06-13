import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http'
import { WeatherService } from './service/weather.service';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  schemas:[

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
