import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import Temperature from "./Temperature";
import Fan from "./Fan";
import Mode from "./Mode";
import { Colors } from "@constants/styles";

const AcDisplay: React.FC<{}> = (props) => {
  const state = useSelector((state: RootState) => state.ac);

  return (
    <View style={styles.component}>
      {state.settings.power ? (
        <>
          <Temperature />
          <View style={styles.bottomBar}>
            <Fan />
            {state.correctionMode && (
              <Text style={styles.infoText}>CORRECTION MODE!</Text>
            )}
            <Mode />
          </View>
        </>
      ) : (
        <Text style={styles.offText}>Turn me on, baby!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    width: "100%",
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.4,
    shadowOffset: { height: 4, width: 0 },
    elevation: 1,
  },
  bottomBar: {
    width: "100%",
    height: 42,
    marginTop: 32,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  offText: {
    fontSize: 32,
    color: Colors.neutral,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlignVertical: "center",
    color: Colors.warning,
  },
});

export default AcDisplay;
