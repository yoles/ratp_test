import { InMemoryToiletsAdapter } from "../infrastructure/primary/InMemoryAdapter";
import { ToiletAPIService } from "../infrastructure/primary/ToiletAPIService";


describe("APIToiletsAdapter", () => {
	it ("should not be empty", async () => {
		const serviceToilet = new ToiletAPIService();
		const toilets = await new InMemoryToiletsAdapter(serviceToilet).getByLine("14");
		expect(toilets.length).not.toEqual(0);
	});
});