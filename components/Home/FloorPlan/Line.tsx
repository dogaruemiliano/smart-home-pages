import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/styles";
import Wall from "../../../models/Wall";

const lineWidth = 4;

const Line: React.FC<{ points: Wall["points"] }> = (props) => {
  const { points } = props;
  const isHorizontal =
    points[0][0] === points[1][0] && points[0][1] !== points[1][1];
  const width = isHorizontal
    ? points[1][1] - points[0][1] + lineWidth / 2
    : lineWidth;
  const height = isHorizontal
    ? lineWidth
    : points[1][0] - points[0][0] + lineWidth / 2;

  const styles = stylesGenerator(points, width, height);

  return <View style={styles.component} />;
};

const stylesGenerator = (
  points: Wall["points"],
  width: number,
  height: number
) =>
  StyleSheet.create({
    component: {
      position: "absolute",
      top: points[0][0] - lineWidth / 2,
      start: points[0][1] - lineWidth / 2,
      width: width,
      height: height,
      backgroundColor: Colors.secondary,
    },
  });

export default Line;
