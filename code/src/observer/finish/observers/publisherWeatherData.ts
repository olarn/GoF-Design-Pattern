import { WeatherData } from "../weatherData";
import { WeatherObserver } from "./weatherObserver";

export class PublisherWeatherData implements WeatherObserver {
    private weatherData: WeatherData = {} as WeatherData;

    update(weatherData: WeatherData): void {
        this.weatherData = weatherData;    
        this.publish();
    }

    publish() {
        return this.weatherData;
    }
}