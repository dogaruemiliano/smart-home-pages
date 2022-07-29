import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store";
import AcButtons from "./Buttons";
import AcDisplay from "./Display";
import { Colors } from "@constants/styles";

const Remote: React.FC<{}> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.component}>
      <AcDisplay />
      <AcButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    marginHorizontal: "6%",
    marginVertical: "12%",
    justifyContent: "center",
    alignItems: "center",
  },
  display: {
    flexDirection: "row",
    width: "100%",
    height: "35%",
    borderWidth: 1,
    borderColor: "white",
  },
});

export default Remote;
