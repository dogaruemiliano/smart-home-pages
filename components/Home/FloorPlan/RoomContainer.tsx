import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "@constants/styles";
import Room from "@models/Room";
import { RootState } from "@store";
import { toggleLight } from "@store/slices/home";

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
}> = (props) => {
  const dispatch = useDispatch();
  const { coordinates, properties } = props;

  const isLightOn = useSelector(
    (state: RootState) =>
      !!state.home.rooms.find(
        (room: Room) => room.properties.id === properties.id
      )?.properties.isLightOn
  );

  let backgroundColor = isLightOn ? Colors.light : undefined;
  backgroundColor = properties.empty ? Colors.neutral : backgroundColor;

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
        <Text
          style={{
            ...styles.label,
            color: isLightOn ? Colors.primary : Colors.neutral,
          }}
        >
          {properties.name}
        </Text>
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
