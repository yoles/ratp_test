import axios from "axios";
import { Geolocation } from "../../domain/models/Geolocation";
import { Toilet } from "../../domain/models/Toilet";
import { ToiletSubwayPort } from "../../domain/ports/ToiletPort";
import { RecordResponse } from "./ToiletAPIResponse";
// import { ToiletAPIService } from "./ToiletAPIService";

export default class APIToiletsAdapter implements ToiletSubwayPort {
	
	// constructor(private toiletService: ToiletAPIService) {}

	async getByLine(line: string) {
		const URL = "https://data.ratp.fr/api/records/1.0/search/?dataset=sanitaires-reseau-ratp&q=&facet=ligne&facet=station&facet=tarif_gratuit_payant&facet=acces_bouton_poussoir&facet=en_zone_controlee&facet=hors_zone_controlee_station&facet=hors_zone_controlee_voie_publique";
		const { data } = await axios.get(URL);
		const recordsForGivenLine = data.records.filter((data: RecordResponse) => data.fields.ligne === line);
		const toilets = recordsForGivenLine.map(this.mapDataToToilet);
		return toilets;
	}
  
	private mapDataToToilet(data: RecordResponse) {
		const { accessible_au_public, tarif_gratuit_payant, station, coord_geo} = data.fields;
		const geolocation = new Geolocation(coord_geo[0], coord_geo[1]);
		return new Toilet(station, accessible_au_public, tarif_gratuit_payant, geolocation);
	}
}