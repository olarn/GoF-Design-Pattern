import { WeatherData } from "../weatherData";

export interface WeatherObserver {
    update(weatherData: WeatherData): void;
}