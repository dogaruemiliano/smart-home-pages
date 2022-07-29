import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { raiseTemperature } from "@store/slices/ac";
import RemoteBaseButton from "./RemoteBaseButton";
import Arrow from "./Arrow";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { SlideInRight, SlideOutRight } from "react-native-reanimated";

const TemperatureUpButton: React.FC<{}> = (props) => {
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  const handlePress = () => console.log("TempUpButton");

  return (
    <RemoteBaseButton
      onPress={handlePress}
      dispatchAction={raiseTemperature}
      empty={!isOn}
      // entering={SlideInRight}
      // exiting={SlideOutRight}
    >
      <View style={styles.imageContainer}>
        <Arrow direction="up" />
        <Image
          source={require("../../../assets/icons/hot.png")}
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

export default TemperatureUpButton;
