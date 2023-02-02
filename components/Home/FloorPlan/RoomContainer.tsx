import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@constants/styles";
import Room from "@models/Room";
import { RootState } from "@store";
import { toggleLight } from "@store/slices/lights";

const createPolygonPosition = (points: [number, number][]) => {
  const style = StyleSheet.create({
    polygon: {
      position: "absolute",
      top: points[0][0],
      start: points[0][1],
    },
  });

  return style.polygon;
};

const createPolygonSize = (points: [number, number][]) => {
  let height = Math.abs(points[0][0] - points[2][0]);
  let width = Math.abs(points[0][1] - points[1][1]);

  const style = StyleSheet.create({
    polygon: {
      width: width,
      height: height,
    },
  });

  return style.polygon;
};

const RoomContainer: React.FC<{
  coordinates: [number, number][];
  properties: { id: string; name: string; empty: boolean };
  currentIndex: number
}> = (props) => {
  const dispatch = useDispatch();
  const { coordinates, properties, currentIndex } = props;

  const isLightOn = useSelector(
    (state: RootState) =>
      !!state.lights.rooms.find(
        (room: Room) => room.properties.id === properties.id
      )?.properties.isLightOn
  );

  // let backgroundColor = isLightOn ? Colors.light : undefined;
  const backgroundColor = properties.empty ? Colors.disabled : undefined;
  console.log(properties.name)
  console.log(currentIndex)
  return (
    <Pressable
      onPress={() => {
        if (!properties.empty) {
          dispatch(toggleLight({ roomId: properties.id }));
        }
      }}
      style={createPolygonPosition(coordinates)}
    >
      <View
        style={{
          ...createPolygonSize(coordinates),
          ...styles.component,
          backgroundColor: backgroundColor,
        }}
      >
        {!properties.empty && (
          <>
            {properties.name && (
              <MaterialIcons
                name={isLightOn ? "lightbulb" : "lightbulb-outline"}
                color={isLightOn ? Colors.light : Colors.secondary}
                size={24}
              />
            )}
            {/* <Text
              style={{
                ...styles.label,
                color: Colors.secondary,
              }}
            >
              {properties.name}
            </Text> */}
          </>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  component: {
    // borderColor: Colors.neutral,
    // borderWidth: 2,

    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: Colors.neutral,
    fontSize: 8,
  },
});

export default RoomContainer;
