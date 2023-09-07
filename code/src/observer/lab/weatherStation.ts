export class WeatherStation {
    private _temperature: number = 0.0;
    public get temperature(): number {
        return this._temperature;
    }
    public set temperature(value: number) {
        this._temperature = value;
        this.updateCurrentConditionsDisplay();
        this.updateForecastDisplay();
        this.updateStatisticsDisplay();
    }

    private _humidity: number = 0.0;
    public get humidity(): number {
        return this._humidity;
    }
    public set humidity(value: number) {
        this._humidity = value;
        this.updateCurrentConditionsDisplay();
        this.updateForecastDisplay();
        this.updateStatisticsDisplay();
    }

    private _pressure: number = 0.0;
    public get pressure(): number {
        return this._pressure;
    }
    public set pressure(value: number) {
        this._pressure = value;
        this.updateCurrentConditionsDisplay();
        this.updateForecastDisplay();
        this.updateStatisticsDisplay();
    }
    
    updateCurrentConditionsDisplay() {
        return `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`;
    }

    updateStatisticsDisplay() {
        return `Avg/Max/Min temperature = ${this.temperature}/${this.humidity}/${this.pressure}`;
    }

    updateForecastDisplay() {
        return `Forecast: More of the same`;
    }
}