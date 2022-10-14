import { Toilet } from "../models/Toilet";

export interface ToiletSubwayPort {
    getByLine: (line: string) => Promise<Toilet[]>
}
