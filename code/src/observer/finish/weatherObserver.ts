import { WeatherData } from "./weatherData";

export interface WeatherObserver {
    update(weatherData: WeatherData): void;
}

export class WeatherForecast implements WeatherObserver {
    private data = new WeatherData(0, 0, 0);

    update(weatherData: WeatherData): void {
        this.data = weatherData;
        this.display();
    }
    
    display(): string {
        return 'Forecast: ' + this.data.temperature + 'C degrees and ' + this.data.humidity + '% humidity';
    }
}