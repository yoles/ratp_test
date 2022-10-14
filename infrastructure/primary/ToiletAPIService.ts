import { Toilet } from "../../domain/models/Toilet";
import { Geolocation } from "../../domain/models/Geolocation";
import { RecordResponse } from "./ToiletAPIResponse";

export class ToiletAPIService {
	mapDataToToilet(data: RecordResponse) {
		const { accessible_au_public, tarif_gratuit_payant, station, coord_geo} = data.fields;
		const geolocation = new Geolocation(coord_geo[0], coord_geo[1]);
		return new Toilet(station, accessible_au_public, tarif_gratuit_payant, geolocation);
	}


	isSubwayLineBetWeen1to14(line: string) {
		const regex = new RegExp(/^([1-9]|1[01234])$/);
		return regex.test(line);
	}

	
	isSubwayLineWellFormatted(line: string) {
		const regex = new RegExp(/^[1-9]_b$/);
		return regex.test(line);
	}
	
	validateSuwayLine(line: string) {
		return (
			!this.isSubwayLineBetWeen1to14(line) ??
			!this.isSubwayLineWellFormatted(line)
		);
	}

}