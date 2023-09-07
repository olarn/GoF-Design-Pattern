import { WeatherData } from "../weatherData";
import { WeatherObserver } from "./weatherObserver";

export class WeatherStatistic implements WeatherObserver {
    private weatherData: WeatherData = {} as WeatherData;

    update(weatherData: WeatherData): void {
        this.weatherData = weatherData;
    }
    
    display(): string {
        return `Avg/Max/Min temperature = ${this.weatherData.temperature}/${this.weatherData.humidity}/${this.weatherData.pressure}`;
    }
}