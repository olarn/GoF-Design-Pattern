import { WeatherData } from './weatherData';
import {
  WeatherCurrentConditions,
  WeatherForecast,
  WeatherStatistics,
} from './weatherObserver';
import { WeatherStation } from './weatherStation';

describe('[Observer - finish] Weather station measurement changed', () => {
  it('display should be called when measurement changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    // when
    weatherStation.update(data);

    // then
    expect(weatherStation.updateCurrentConditionsDisplay()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(weatherStation.updateStatisticsDisplay()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
    expect(weatherStation.updateForecastDisplay()).toBe(
      'Forecast: 32℃ degrees and 0.8% humidity'
    );
  });

  it('should notify observers to display current weather condition', () => {
    // given
    const weatherStation = new WeatherStation();

    const weatherCurrentConditions = new WeatherCurrentConditions();
    const weatherForecast = new WeatherForecast();
    const weatherStatistics = new WeatherStatistics();

    weatherStation.registerObserver(weatherCurrentConditions);
    weatherStation.registerObserver(weatherForecast);
    weatherStation.registerObserver(weatherStatistics);

    // when
    const weatherData = new WeatherData(32.0, 0.8, 1.0);
    weatherStation.update(weatherData);

    expect(weatherCurrentConditions.display()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(weatherForecast.display()).toBe(
      'Forecast: 32℃ degrees and 0.8% humidity'
    );
    expect(weatherStatistics.display()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
  });
});
