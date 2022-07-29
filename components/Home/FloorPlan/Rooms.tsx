import { roomsData } from "@constants/floorPlanData";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { roomsCoordinates } from "./MapHelpers";
import RoomContainer from "./RoomContainer";

const scale = 2.1

const Rooms: React.FC<{}> = (props) => {
  return (
    <>
      {roomsCoordinates(roomsData, scale).map((roomData) =>
        roomData.geometry.coordinates.map((polygon, index) => (
          <RoomContainer
            coordinates={polygon}
            properties={roomData.properties}
            key={roomData.properties.name + index}
          />
        ))
      )}
    </>
  );
};

const styles = StyleSheet.create({
  component: {},
});

export default Rooms;
