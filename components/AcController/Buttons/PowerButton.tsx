import React from "react";
import { Image, StyleSheet } from "react-native";
import { turnOn, turnOff } from "@store/slices/ac";
import RemoteBaseButton from "./RemoteBaseButton";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { SlideInRight, SlideOutRight } from "react-native-reanimated";

const PowerButton: React.FC<{}> = (props) => {
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  const handlePress = () => console.log("PowerButton");

  return (
    <RemoteBaseButton
      onPress={handlePress}
      dispatchAction={isOn ? turnOff : turnOn}
      // entering={SlideInRight}
      // exiting={SlideOutRight}
    >
      {isOn ? (
        <Image
          source={require("../../../assets/icons/off.png")}
          style={styles.image}
        />
      ) : (
        <Image
          source={require("../../../assets/icons/on.png")}
          style={styles.image}
        />
      )}
    </RemoteBaseButton>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
  },
});
export default PowerButton;
