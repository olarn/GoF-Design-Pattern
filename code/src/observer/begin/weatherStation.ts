export class WeatherStation {
    private _tempurature: number = 0.0;
    public get tempurature(): number {
        return this._tempurature;
    }
    public set tempurature(value: number) {
        this._tempurature = value;
        this.updateCurrentConditionsDisplay(this._tempurature, this._humidity, this._pressure);
        this.updateForecastDisplay(this._tempurature, this._humidity, this._pressure);
        this.updateStatisticsDisplay(this._tempurature, this._humidity, this._pressure);
    }

    private _humidity: number = 0.0;
    public get humidity(): number {
        return this._humidity;
    }
    public set humidity(value: number) {
        this._humidity = value;
        this.updateCurrentConditionsDisplay(this._tempurature, this._humidity, this._pressure);
        this.updateForecastDisplay(this._tempurature, this._humidity, this._pressure);
        this.updateStatisticsDisplay(this._tempurature, this._humidity, this._pressure);
    }

    private _pressure: number = 0.0;
    public get pressure(): number {
        return this._pressure;
    }
    public set pressure(value: number) {
        this._pressure = value;
        this.updateCurrentConditionsDisplay(this._tempurature, this._humidity, this._pressure);
        this.updateForecastDisplay(this._tempurature, this._humidity, this._pressure);
        this.updateStatisticsDisplay(this._tempurature, this._humidity, this._pressure);
    }
    
    updateCurrentConditionsDisplay(tempurature: number, humidity: number, pressure: number) {
        return `Current conditions: ${tempurature}F degrees and ${humidity}% humidity`;
    }

    updateStatisticsDisplay(tempurature: number, humidity: number, pressure: number) {
        return `Avg/Max/Min temperature = ${tempurature}/${humidity}/${pressure}`;
    }

    updateForecastDisplay(tempurature: number, humidity: number, pressure: number) {
        return `Forecast: More of the same`;
    }
}