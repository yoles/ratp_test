import { Geolocation } from "../../domain/models/Geolocation";
import { Toilet } from "../../domain/models/Toilet";
import { ToiletSubwayPort } from "../../domain/ports/ToiletPort";
import fakeDB from "../api/fakeDB";
import { RecordResponse } from "./ToiletAPIResponse";
import { ToiletAPIService } from "./ToiletAPIService";

export class InMemoryToiletsAdapter implements ToiletSubwayPort {
	constructor(private toiletService: ToiletAPIService) {}

	async getByLine(line: string) {
		return new Promise<Toilet[]>((resolve) => {
			const records = fakeDB.records as RecordResponse[];
			const recordsForGivenLine = records.filter(record => record.fields.ligne === line);
			const toilets = recordsForGivenLine.map(this.toiletService.mapDataToToilet);
			resolve(toilets);
		});
	}
}