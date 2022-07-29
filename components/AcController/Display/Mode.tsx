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
      {mode === "cool" && (
        <FontAwesome5
          name="snowflake"
          size={32}
          color={Colors.neutral}
          // style={styles.icon}
        />
      )}
      {mode === "dry" && (
        <Ionicons
          name="water"
          size={32}
          color={Colors.neutral}
          // style={styles.icon}
        />
      )}
      {mode === "fan" && (
        <FontAwesome5
          name="fan"
          size={32}
          color={Colors.neutral}
          // style={styles.icon}
        />
      )}
      {mode === "heat" && (
        <FontAwesome5
          name="sun"
          size={32}
          color={Colors.neutral}
          // style={styles.icon}
        />
      )}
      {mode === "auto" && (
        <MaterialIcons
          name="brightness-auto"
          size={32}
          color={Colors.neutral}
          // style={styles.icon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // text: {
  //   marginBottom: 6,
  //   color: Colors.primary100,
  // },
});

export default Mode;
