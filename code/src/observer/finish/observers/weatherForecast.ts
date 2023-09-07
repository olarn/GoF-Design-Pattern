import { WeatherData } from "../weatherData";
import { WeatherObserver } from "./weatherObserver";

export class WeatherForecast implements WeatherObserver {
    private weatherData: WeatherData = {} as WeatherData;

    update(weatherData: WeatherData): void {
        this.weatherData = weatherData;
    }
    
    display(): string {
        return `Forecast: More of the same`;
    }
}