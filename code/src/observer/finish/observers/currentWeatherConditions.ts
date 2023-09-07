import { WeatherData } from "../weatherData";
import { WeatherObserver } from "./weatherObserver";

export class CurrentWeatherConditions implements WeatherObserver {
    private weatherData: WeatherData = {} as WeatherData;

    update(weatherData: WeatherData): void {
        this.weatherData = weatherData;
        this.display();
    }

    display(): string {
        return `Current conditions: ${this.weatherData.temperature}F degrees and ${this.weatherData.humidity}% humidity`;
    }
}