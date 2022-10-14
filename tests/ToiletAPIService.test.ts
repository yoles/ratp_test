import { ToiletAPIService } from "../infrastructure/primary/ToiletAPIService";
import { RecordResponse } from "../infrastructure/primary/ToiletAPIResponse";
import fakeDB from "../infrastructure/api/fakeDB";
import { Toilet } from "../domain/models/Toilet";

const service = new ToiletAPIService();
const records = fakeDB.records as RecordResponse[];

describe("mapDataToToilet Toilet API Service", () => {
	it("Map should have same lenth than records", async() => {
		const result = records.map(service.mapDataToToilet);
		expect(result.length).toEqual(records.length);
	});
  
  
	it("Should be toilet instance", async() => {
		const result = records.map(service.mapDataToToilet);
		expect(result[0]).toBeInstanceOf(Toilet);
	});

});