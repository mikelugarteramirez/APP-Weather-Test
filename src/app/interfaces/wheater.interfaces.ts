export interface WheaterCurrent {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    pressure: number;
    humidity: number;
    uvi: number;
    visibility: number;
    weather: WheaterInformation[];
}

export interface WheaterInformation {
    description: string;
    icon: string;
    main: string;
}