import { Toilet } from "../../domain/models/Toilet";
import { Geolocation } from "../../domain/models/Geolocation";
import { RecordResponse } from "./ToiletAPIResponse";

export class ToiletAPIService {
	mapDataToToilet(data: RecordResponse) {
		const { accessible_au_public, tarif_gratuit_payant, station, coord_geo} = data.fields;
		const geolocation = new Geolocation(coord_geo[0], coord_geo[1]);
		return new Toilet(station, accessible_au_public, tarif_gratuit_payant, geolocation);
	}
}