import { WeatherObserver } from "./observers/weatherObserver";
import { WeatherData } from "./weatherData";

export class WeatherStation {
    weatherObservers: WeatherObserver[] = [];
    add(observer: WeatherObserver) {
        this.weatherObservers.push(observer);
    }

    private _weatherData: WeatherData = {} as WeatherData;
    public get weatherData(): WeatherData {
        return this._weatherData;
    }
    public set weatherData(value: WeatherData) {
        this._weatherData = value;
        this.update();
    }

    update() {
        this.weatherObservers.forEach(observer => {
            observer.update(this._weatherData);
        });
    }
}