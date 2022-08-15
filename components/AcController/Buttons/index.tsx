import React from "react";
import { View, StyleSheet } from "react-native";
import FanSpeedButton from "./FanSpeedButtton";
import ModeButton from "./ModeButton";
import PowerButton from "./PowerButton";
import TemperatureDownButton from "./TemperatureDownButton";
import TemperatureUpButton from "./TemperatureUpButton";
import RemoteBaseButton from "./RemoteBaseButton";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const AcButtons: React.FC<{}> = (props) => {
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  return (
    <>
      <View style={styles.buttons}>
        <>
          <View style={styles.buttonsColumn}>
            {isOn && (
              <>
                <TemperatureUpButton />
                <TemperatureDownButton />
                <ModeButton />
              </>
            )}
          </View>
          <View style={styles.buttonsColumn}>
            <PowerButton />
            {isOn && (
              <>
                <FanSpeedButton />
                <View style={styles.emptySpace}></View>
              </>
            )}
          </View>
        </>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    width: "100%",
    height: "55%",
    paddingVertical: 32,
  },
  powerButtonContainer: {
    flexDirection: "row-reverse",
    width: "100%",
    height: "55%",
  },
  buttonsColumn: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  emptySpace: {
    width: 128,
    height: 64,
  },
});

export default AcButtons;
