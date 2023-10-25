import { WeatherData } from "./weatherData";
import { WeatherForecast } from "./weatherObserver";
import { WeatherStation } from "./weatherStation";

describe('Weather station measurement changed', () => {
    it('display should be called when measurement changed', () => {
        // given
        const weatherStation = new WeatherStation();
        const data = new WeatherData(32.0, 0.8, 1.0);

        // when
        weatherStation.update(data);

        // then
        expect(weatherStation.updateCurrentConditionsDisplay())
            .toBe('Current conditions: 32C degrees and 0.8% humidity');
        expect(weatherStation.updateStatisticsDisplay())
            .toBe('Avg/Max/Min temperature = 32/0.8/1');
        expect(weatherStation.updateForecastDisplay())
            .toBe('Forecast: More of the same');
    });

    it('should notify observers to display current weather condition', () => {
        // given 
        const weatherStation = new WeatherStation();        
        const weatherForecast = new WeatherForecast();
        const weatherForecastDisplay = jest.spyOn(weatherForecast, 'display');

        weatherStation.registerObserver(weatherForecast);

        // when
        const weatherData = new WeatherData(32.0, 0.8, 1.0);
        weatherStation.update(weatherData);

        expect(weatherForecast.display()).toBe('Forecast: 32C degrees and 0.8% humidity');
        expect(weatherForecastDisplay).toHaveBeenCalled();
    });
});