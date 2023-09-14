export class Light {
    public on(): void { console.log('OutdoorLight is on'); }
    public off(): void { console.log('OutdoorLight is off'); }
}

export class GardenLight {
    public on(): void { console.log('GardenLight is on'); }
    public off(): void { console.log('GardenLight is off'); }
    public dim(): void { console.log('GardenLight is dim');}
}

export class GarageDoor {
    public up(): void { console.log('GarageDoor is up'); }
    public down(): void { console.log('GarageDoor is down'); }
    public stop(): void { console.log('GarageDoor is stop'); }
    public lightOn(): void { console.log('GarageDoor light is on'); }
    public lightOff(): void { console.log('GarageDoor light is off'); }
}

export class Hottub {
    circulate(): void { console.log('Hottub is circulate'); }
    jetsOn(): void { console.log('Hottub jets is on'); }
    jetOff(): void { console.log('Hottub jets is off'); }
    setTemperature(temperature: number): void { console.log(`Hottub temperature is set to ${temperature}`); }
}

export class SmartVacuum {
    public on(): void { console.log('SmartVacuum is on'); }
    public off(): void { console.log('SmartVacuum is off'); }
    public setSpeed(speed: number): void { console.log(`SmartVacuum speed is set to ${speed}`); }
    public setTimer(timer: number): void { console.log(`SmartVacuum timer is set to ${timer}`); }
    public setMode(mode: string): void { console.log(`SmartVacuum mode is set to ${mode}`); }
    public setSchedule(schedule: string): void { console.log(`SmartVacuum schedule is set to ${schedule}`); }
}