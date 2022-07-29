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
        {isOn ? (
          <>
            <View style={styles.buttonsColumn}>
              <TemperatureUpButton />
              <TemperatureDownButton />
              <ModeButton />
            </View>
            <View style={styles.buttonsColumn}>
              <PowerButton />
              <FanSpeedButton />
              <RemoteBaseButton empty={true} />
            </View>
          </>
        ) : (
          <>
            <View style={styles.buttonsColumn}></View>
            <View style={styles.buttonsColumn}>
              <PowerButton />
            </View>
          </>
        )}
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
});

export default AcButtons;
