import Room from "@models/Room";
import Wall from "@models/Wall";

const maxXY = (coordinates: Room[]) => {
  let maxX = 0;
  let maxY = 0;
  coordinates.forEach((polygon) =>
    polygon.geometry.coordinates.forEach((point) =>
      point.forEach((value) => {
        if (maxX < value[0]) {
          maxX = value[0];
        }
        if (maxY < value[1]) {
          maxY = value[1];
        }
      })
    )
  );
  return { maxX: maxX, maxY: maxY };
};

export const traslateRoomCoordinatesToScale = (scale: number, coordinates: Room[]) => {
  const { maxX, maxY } = maxXY(coordinates);

  return coordinates.map((room) => {
    const room_coordinates = room.geometry.coordinates.map((polygon) => {
      const polygon_coordinates = polygon.map(
        (value, index) =>
          [
            (value[0] - maxX / 2) / scale + index * 1,
            (value[1] - maxY / 2) / scale + index * 1,
          ] as [number, number]
      );
      return polygon_coordinates;
    });
    return {
      ...room,
      geometry: { type: room.geometry.type, coordinates: room_coordinates },
    };
  }) as Room[];
};

export const traslateBuildingCoordinatesScale = (
  scale: number,
  walls: Wall[],
  rooms: Room[]
) => {
  const { maxX, maxY } = maxXY(rooms);


  return walls.map((wall, index) => {
    const wall_points = wall.points.map((point) => [
      (point[0] - maxX / 2) / scale + index * 0,
      (point[1] - maxY / 2) / scale + index * 0,
    ]) as Wall["points"];
    return { points: wall_points } as Wall;
  });
};

export const roomsCoordinates = (roomsData: Room[], scale: number) =>
  traslateRoomCoordinatesToScale(2.1, roomsData);

export const builduingCoordinates = (walls: Wall[], roomsData: Room[], scale: number) =>
  traslateBuildingCoordinatesScale(scale, walls, roomsData);
