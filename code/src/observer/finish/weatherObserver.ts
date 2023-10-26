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
        return `Forecast: ${this.data.temperature}℃ degrees and ${this.data.humidity}% humidity`;
    }
}

export class WeatherStatistics implements WeatherObserver {
    private data = new WeatherData(0, 0, 0);

    update(weatherData: WeatherData): void {
        this.data = weatherData;
        this.display();
    }

    display(): string {
        return `Avg/Max/Min temperature = ${this.data.temperature}/${this.data.humidity}/${this.data.pressure}`;
    }
}