import { CurrentWeatherConditions } from "./observers/currentWeatherConditions";
import { PublisherWeatherData } from "./observers/publisherWeatherData";
import { WeatherForecast } from "./observers/weatherForecast";
import { WeatherStatistic } from "./observers/weatherStatistics";
import { WeatherData } from "./weatherData";
import { WeatherStation } from "./weatherStation";

describe('Weather station measurement changed', () => {
    it('display should be called when measurement changed', () => {
        // given
        const weatherStation = new WeatherStation()

        const currentWeatherConditions = new CurrentWeatherConditions();
        const weatherForecast = new WeatherForecast();
        const weatherStatistic = new WeatherStatistic();

        weatherStation.add(currentWeatherConditions);
        weatherStation.add(weatherForecast);
        weatherStation.add(weatherStatistic);

        // when
        weatherStation.weatherData = new WeatherData(34.0, 0.8, 1.0);

        // then
        expect(currentWeatherConditions.display())
            .toBe('Current conditions: 34F degrees and 0.8% humidity');
        expect(weatherForecast.display())
            .toBe('Forecast: More of the same');
        expect(weatherStatistic.display())
            .toBe('Avg/Max/Min temperature = 34/0.8/1');
    });

    it('should publish weather data', () => {
        // given
        const weatherStation = new WeatherStation()
        const weatherData = new WeatherData(34.0, 0.8, 1.0);
        const publisherWeatherData = new PublisherWeatherData();
        weatherStation.add(publisherWeatherData);

        // when 
        weatherStation.weatherData = weatherData;

        // then
        expect(publisherWeatherData.publish()).toBe(weatherData);
    });
});