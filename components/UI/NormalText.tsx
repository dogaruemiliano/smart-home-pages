import { Colors } from "@constants/styles";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NormalText: React.FC<{children: any}> = (props) => {
  return <Text style={styles.component}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  component: {
    color: Colors.light,
  },
});

export default NormalText;
