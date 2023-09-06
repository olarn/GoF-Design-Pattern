import { WeatherStation } from "./weatherStation";

describe('Weather station measurement changed', () => {
    it('should be called when measurement changed', () => {
        const weatherStation = new WeatherStation();
        weatherStation.tempurature = 34.0;
        weatherStation.humidity = 0.8;
        weatherStation.pressure = 1.0;

        expect(weatherStation.updateCurrentConditionsDisplay(34.0, 0.8, 1.0))
            .toBe('Current conditions: 34F degrees and 0.8% humidity');
        expect(weatherStation.updateStatisticsDisplay(34.0, 0.8, 1.0))
            .toBe('Avg/Max/Min temperature = 34/0.8/1');
        expect(weatherStation.updateForecastDisplay(34.0, 0.8, 1.0))
            .toBe('Forecast: More of the same');
    });
});