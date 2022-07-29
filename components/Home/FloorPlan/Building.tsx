import { buildingData, roomsData } from "@constants/floorPlanData";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Line from "./Line";
import { builduingCoordinates } from "./MapHelpers";

const scale = 2.1

const Building: React.FC<{}> = (props) => {
  return (
    <>
      {builduingCoordinates(buildingData, roomsData, scale).map((wall) => (
        <Line
          points={wall.points}
          key={`${wall.points[0][0]}${wall.points[0][1]}${wall.points[1][0]}${wall.points[1][1]}`}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  component: {},
});

export default Building;
