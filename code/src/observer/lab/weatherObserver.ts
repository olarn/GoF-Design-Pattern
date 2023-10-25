import { WeatherData } from "./weatherData";

export interface WeatherObserver {
    update(weatherData: WeatherData): void;
}

export class WeatherForecast implements WeatherObserver {
    update(weatherData: WeatherData): void {

    }
    
    display(): string {
        return '';
    }
}

export class WeatherStatistic implements WeatherObserver {
    update(weatherData: WeatherData): void {

    }
    
    display(): string {
        return '';
    }
}

export class currentWeatherConditions implements WeatherObserver {
    update(weatherData: WeatherData): void {

    }
    
    display(): string {
        return '';
    }
}