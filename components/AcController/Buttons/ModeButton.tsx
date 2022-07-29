import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RootState } from "@store";
import { changeMode } from "@store/slices/ac";
import RemoteBaseButton from "./RemoteBaseButton";
import { Colors } from "@constants/styles";
import { SlideInDown, SlideOutDown } from "react-native-reanimated";

const ModeButton: React.FC<{}> = (props) => {
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  const handlePress = () => console.log("ModeButton");
  return (
    <RemoteBaseButton
      onPress={handlePress}
      dispatchAction={changeMode}
      empty={!isOn}
      // entering={SlideInDown}
      // exiting={SlideOutDown}
    >
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <FontAwesome5
            name="snowflake"
            size={18}
            color={Colors.neutral}
            style={styles.icon}
          />
          <Ionicons
            name="water"
            size={18}
            color={Colors.neutral}
            style={styles.icon}
          />
          <FontAwesome5
            name="fan"
            size={18}
            color={Colors.neutral}
            style={styles.icon}
          />
        </View>
        <View style={styles.bottomContainer}>
          <FontAwesome5
            name="sun"
            size={18}
            color={Colors.neutral}
            style={styles.icon}
          />
          <MaterialIcons
            name="brightness-auto"
            size={18}
            color={Colors.neutral}
            style={styles.icon}
          />
        </View>
      </View>
    </RemoteBaseButton>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.neutral,
    fontWeight: "bold",
  },
  mainContainer: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 2,
  },
});

export default ModeButton;
