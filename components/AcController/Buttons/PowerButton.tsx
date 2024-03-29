import React, { useRef } from "react";
import { Image, StyleSheet } from "react-native";
import { togglePower } from "@store/slices/ac";
import RemoteBaseButton from "./RemoteBaseButton";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { SlideInRight, SlideOutRight } from "react-native-reanimated";

const PowerButton: React.FC<{}> = (props) => {
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  return (
    <RemoteBaseButton dispatchAction={togglePower}>
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
