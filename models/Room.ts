export default interface Room {
  properties: {
    id: string,
    name: string;
    isLightOn: boolean;
    empty: boolean;
  };
  geometry: {
    type: string;
    coordinates: [number, number][][]
  };
}
