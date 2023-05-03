import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClient: HttpClient) {


  }

  /**
* Sends an HTTP GET request to the weather API for the given city name and returns the weather data as an Observable.
* @param cityName The name of the city to get weather data for.
* @returns An Observable emitting the weather data for the given city.
*/
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(environment.weatherApiBaseUrl + '/' + cityName, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),

    });
  }
}
