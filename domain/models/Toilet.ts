import { Geolocation } from "./Geolocation";

export class Toilet {
	constructor(
    public readonly stationName: string,
    public readonly tarif_gratuit_payant: string,
    public readonly accessible_au_public: string,
    public readonly geolocation: Geolocation,
	) {}
}