import { Colors } from "@constants/styles";
import React from "react";
import { View, StyleSheet } from "react-native";

const Arrow: React.FC<{ direction: keyof typeof styles }> = (props) => {
  const { direction } = props;

  return <View style={{ ...styles.arrow, ...styles[direction] }}></View>;
};

const styles = StyleSheet.create({
  arrow: {
    width: 0,
    height: 0,

    borderStartWidth: 16,
    borderStartColor: "rgba(0, 0, 0, 0)",

    borderEndWidth: 16,
    borderEndColor: "rgba(0, 0, 0, 0)",

    borderBottomWidth: 16,
    borderBottomColor: Colors.neutral,
  },
  up: {
    transform: [{ rotate: "0deg" }],
  },
  right: {
    transform: [{ rotate: "90deg" }],
  },

  down: {
    transform: [{ rotate: "180deg" }],
  },
  left: {
    transform: [{ rotate: "270deg" }],
  },
});

export default Arrow;
