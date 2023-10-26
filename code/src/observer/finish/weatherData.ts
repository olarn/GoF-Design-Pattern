export class WeatherData {
  temperature: number;
  humidity: number;
  pressure: number;

  constructor(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
  }
}
