import { ToiletSubwayPort } from "../ports/ToiletPort";

export class GetToilet {
	constructor(private toiletPort: ToiletSubwayPort) {}
	async byLine(line: string) {
		return await this.toiletPort.getByLine(line);
	}
}