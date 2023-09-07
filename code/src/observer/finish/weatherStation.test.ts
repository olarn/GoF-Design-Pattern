import { WeatherData } from "./weatherData";
import { WeatherStation } from "./weatherStation";

describe('Weather station measurement changed', () => {
    it('display should be called when measurement changed', () => {
        // given
        const weatherStation = new WeatherStation()
        weatherStation.weatherData = new WeatherData(34.0, 0.8, 1.0);

        expect(weatherStation.updateCurrentConditionsDisplay())
            .toBe('Current conditions: 34F degrees and 0.8% humidity');
        expect(weatherStation.updateStatisticsDisplay())
            .toBe('Avg/Max/Min temperature = 34/0.8/1');
        expect(weatherStation.updateForecastDisplay())
            .toBe('Forecast: More of the same');
    });
});