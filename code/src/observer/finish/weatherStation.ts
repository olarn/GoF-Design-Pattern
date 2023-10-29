import { WeatherData } from './weatherData';
import { WeatherForecast, WeatherObserver } from './weatherObserver';

export class WeatherStation {
  private data = new WeatherData(0, 0, 0);

  public update(data: WeatherData): void {
    this.data = data;
    for (let observer of this.observers) {
      observer.update(data);
    }
  }

  private observers: WeatherObserver[] = [];

  public registerObserver(weatherForecast: WeatherObserver) {
    this.observers.push(weatherForecast);
  }

  updateCurrentConditionsDisplay(): string {
    return `Current conditions: ${this.data.temperature}C degrees and ${this.data.humidity}% humidity`;
  }

  updateStatisticsDisplay(): string {
    return `Avg/Max/Min temperature = ${this.data.temperature}/${this.data.humidity}/${this.data.pressure}`;
  }

  updateForecastDisplay(): string {
    return `Forecast: ${this.data.temperature}℃ degrees and ${this.data.humidity}% humidity`;
  }
}
