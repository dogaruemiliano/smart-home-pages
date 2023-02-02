import React from "react";
import { View, StyleSheet } from "react-native";
import AcButtons from "./Buttons";
import AcDisplay from "./Display";

const Remote: React.FC<{}> = (props) => {
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
    // maxWidth: 390,
    // maxHeight: 753,
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
