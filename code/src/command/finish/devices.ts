// This file is just an interface to 3rd party library
// You cannot change anything.

export class Light {
  public on(): void {
    /* OutdoorLight is on */
  }
  public off(): void {
    /* 'OutdoorLight is off */
  }
}

export class GardenLight {
  public on(): void {
    /*'GardenLight is on*/
  }
  public off(): void {
    /*GardenLight is off*/
  }
  public dim(): void {
    /*GardenLight is dim */
  }
}

export class GarageDoor {
  public up(): void {
    /*GarageDoor is up*/
  }
  public down(): void {
    /*GarageDoor is down*/
  }
  public stop(): void {
    /*GarageDoor is stop*/
  }
  public lightOn(): void {
    /*GarageDoor light is on*/
  }
  public lightOff(): void {
    /*GarageDoor light is off*/
  }
}

export class Hottub {
  circulate(): void {
    /*Hottub is circulate*/
  }
  jetsOn(): void {
    /*Hottub jets is on*/
  }
  jetOff(): void {
    /*Hottub jets is off*/
  }
  setTemperature(temperature: number): void {
    /* Hottub temperature is set to ${temperature} */
  }
}

export class SmartVacuum {
  public on(): void {
    /*SmartVacuum is on*/
  }
  public off(): void {
    /*SmartVacuum is off*/
  }
  public setSpeed(speed: number): void {
    /* SmartVacuum speed is set to ${speed */
  }
  public setTimer(timer: number): void {
    /*SmartVacuum timer is set to ${timer */
  }
  public setMode(mode: string): void {
    /* SmartVacuum mode is set to ${mode} */
  }
  public setSchedule(schedule: string): void {
    /* SmartVacuum schedule is set to ${schedule} */
  }
}
