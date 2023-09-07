export class WeatherStation {
    private _temperature: number = 0.0;
    public get temperature(): number {
        return this._temperature;
    }
    public set temperature(value: number) {
        this._temperature = value;
        this.updateCurrentConditionsDisplay(this._temperature, this._humidity, this._pressure);
        this.updateForecastDisplay(this._temperature, this._humidity, this._pressure);
        this.updateStatisticsDisplay(this._temperature, this._humidity, this._pressure);
    }

    private _humidity: number = 0.0;
    public get humidity(): number {
        return this._humidity;
    }
    public set humidity(value: number) {
        this._humidity = value;
        this.updateCurrentConditionsDisplay(this._temperature, this._humidity, this._pressure);
        this.updateForecastDisplay(this._temperature, this._humidity, this._pressure);
        this.updateStatisticsDisplay(this._temperature, this._humidity, this._pressure);
    }

    private _pressure: number = 0.0;
    public get pressure(): number {
        return this._pressure;
    }
    public set pressure(value: number) {
        this._pressure = value;
        this.updateCurrentConditionsDisplay(this._temperature, this._humidity, this._pressure);
        this.updateForecastDisplay(this._temperature, this._humidity, this._pressure);
        this.updateStatisticsDisplay(this._temperature, this._humidity, this._pressure);
    }
    
    updateCurrentConditionsDisplay(temperature: number, humidity: number, pressure: number) {
        return `Current conditions: ${temperature}F degrees and ${humidity}% humidity`;
    }

    updateStatisticsDisplay(temperature: number, humidity: number, pressure: number) {
        return `Avg/Max/Min temperature = ${temperature}/${humidity}/${pressure}`;
    }

    updateForecastDisplay(temperature: number, humidity: number, pressure: number) {
        return `Forecast: More of the same`;
    }
}