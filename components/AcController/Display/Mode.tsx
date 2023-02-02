import { RootState } from "@store";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@constants/styles";

const Mode: React.FC<{}> = (props) => {
  const mode = useSelector((state: RootState) => state.ac.settings.mode);

  return (
    <View style={styles.component}>
      {/* <Text style={styles.text}>Mode</Text> */}

      <FontAwesome5
        name="snowflake"
        size={32}
        color={mode === "cool" ? Colors.neutral : Colors.disabled}
        style={styles.icon}
      />
      <Ionicons
        name="water"
        size={32}
        color={mode === "dry" ? Colors.neutral : Colors.disabled}
        style={styles.icon}
      />
      <FontAwesome5
        name="fan"
        size={32}
        color={mode === "fan" ? Colors.neutral : Colors.disabled}
        style={styles.icon}
      />
      <MaterialIcons
        name="brightness-auto"
        size={32}
        color={mode === "auto" ? Colors.neutral : Colors.disabled}
        style={styles.icon}
      />
      <FontAwesome5
        name="sun"
        size={32}
        color={mode === "heat" ? Colors.neutral : Colors.disabled}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    margin: 6,
  },
});

export default Mode;
