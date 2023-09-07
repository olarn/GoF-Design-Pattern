import { WeatherData } from "./weatherData";

export class WeatherStation {
    private _weatherData: WeatherData = {} as WeatherData;
    public get weatherData(): WeatherData {
        return this._weatherData;
    }
    public set weatherData(value: WeatherData) {
        this._weatherData = value;
        this.updateCurrentConditionsDisplay();
        this.updateForecastDisplay();
        this.updateStatisticsDisplay();
    }

    updateCurrentConditionsDisplay() {
        return `Current conditions: ${this._weatherData.temperature}F degrees and ${this._weatherData.humidity}% humidity`;
    }

    updateStatisticsDisplay() {
        return `Avg/Max/Min temperature = ${this._weatherData.temperature}/${this._weatherData.humidity}/${this._weatherData.pressure}`;
    }

    updateForecastDisplay() {
        return `Forecast: More of the same`;
    }
}