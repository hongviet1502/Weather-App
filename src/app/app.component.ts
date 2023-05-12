import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherData } from './models/weather.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Weather-app';
  weatherData?: WeatherData;
  cityName: string = 'Hanoi';

  constructor(private WeatherService: WeatherServiceService) { }
  ngOnInit(): void {

  }

  /**
 * Executes the on submit action for a form which gets weather data for the given city name
 * @function onSubmit
 */
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  /**
 * Retrieves weather data for a given city name.
 * 
 * @param {string} cityName - The name of the city for which to retrieve weather data.
 */
  private getWeatherData(cityName: string) {
    this.WeatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response
          console.log(this.weatherData);
        },
      });
  }
}
