import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { buildingData } from "../../../constants/floorPlanData";
import { RootState } from "../../../store";
import { setState } from "../../../store/slices/home";
import Line from "./Line";
import RoomContainer from "./RoomContainer";
import { builduingCoordinates, roomsCoordinates } from "./MapHelpers";

const scale = 2.1

const Map: React.FC<{}> = (props) => {
  const dispatch = useDispatch();
  const roomsData = useSelector((state: RootState) => state.home.rooms);

  useEffect(() => {
    dispatch(setState({ rooms: roomsData, ac: { power: false } }));
  }, []);

  return (
    <View>
      {roomsCoordinates(roomsData, scale).map((roomData) =>
        roomData.geometry.coordinates.map((polygon, index) => (
          <RoomContainer
            coordinates={polygon}
            properties={roomData.properties}
            key={roomData.properties.name + index}
          />
        ))
      )}
      {builduingCoordinates(buildingData, roomsData, scale).map((wall) => (
        <Line
          points={wall.points}
          key={`${wall.points[0][0]}${wall.points[0][1]}${wall.points[1][0]}${wall.points[1][1]}`}
        />
      ))}
    </View>
  );
};


export default Map;
