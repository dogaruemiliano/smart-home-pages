import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { Colors } from "@constants/styles";

const Temperature: React.FC<{}> = (props) => {
  const temperature = useSelector(
    (state: RootState) => state.ac.settings.temperature
  );
  const mode = useSelector((state: RootState) => state.ac.settings.mode);
  const [dynamicStyle, setDynamicStyle] = useState({});

  useEffect(() => {
    setDynamicStyle([
      mode === "fan" ? { color: Colors.disabled } : { color: Colors.neutral },
    ]);
  }, [mode]);

  return (
    <View style={styles.component}>
      <Text style={[styles.generalText, styles.temperatureText, dynamicStyle]}>
        {mode === "fan" ? "N/A" : temperature}
      </Text>
      <Text style={[styles.generalText, styles.units, dynamicStyle]}>
        {mode !== "fan" && "°C"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  generalText: {
    fontWeight: "bold",
  },
  temperatureText: {
    fontSize: 128,
  },
  units: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default Temperature;
