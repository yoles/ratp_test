export interface RecordResponse {
  datasetid: string;
  recordid: string;
  fields: FieldResponse;
  geometry: GeometryResponse;
  record_timestamp: string
}

interface FieldResponse {
  accessible_au_public: string,
  acces_bouton_poussoir: string,
  tarif_gratuit_payant: string,
  gestionnaire: string,
  accessibilite_pmr: string,
  ligne: string,
  localisation: string,
  station: string,
  hors_zone_controlee_station: string,
  coord_geo: number[]
}


interface GeometryResponse {
  type: string,
  coordinates: number[]
}
