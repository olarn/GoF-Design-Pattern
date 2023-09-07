import { WeatherStation } from "./weatherStation";

describe('Weather station measurement changed', () => {
    it('display should be called when measurement changed', () => {
        // given
        const weatherStation = new WeatherStation();

        // when
        weatherStation.temperature = 34.0;
        weatherStation.humidity = 0.8;
        weatherStation.pressure = 1.0;

        // then
        expect(weatherStation.updateCurrentConditionsDisplay())
            .toBe('Current conditions: 34F degrees and 0.8% humidity');
        expect(weatherStation.updateStatisticsDisplay())
            .toBe('Avg/Max/Min temperature = 34/0.8/1');
        expect(weatherStation.updateForecastDisplay())
            .toBe('Forecast: More of the same');
    });
});