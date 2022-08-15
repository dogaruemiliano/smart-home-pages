import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { lowerTemperature } from "@store/slices/ac";
import RemoteBaseButton from "./RemoteBaseButton";
import Arrow from "./Arrow";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { SlideInLeft, SlideOutLeft } from "react-native-reanimated";

const TemperatureDownButton: React.FC<{}> = (props) => {
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  const handlePress = () => console.log("TempDownButton");

  return (
    <RemoteBaseButton
      dispatchAction={lowerTemperature}
      empty={!isOn}
      // entering={SlideInLeft}
      // exiting={SlideOutLeft}
    >
      <View style={styles.imageContainer}>
        <Arrow direction="down" />
        <Image
          source={require("../../../assets/icons/cold.png")}
          style={styles.image}
        />
      </View>
    </RemoteBaseButton>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 12,
  },
  image: {
    height: 48,
    width: 48,
    marginLeft: 8,
  },
});

export default TemperatureDownButton;
