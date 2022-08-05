import React from "react";
import { changeFanSpeed } from "@store/slices/ac";
import RemoteBaseButton from "./RemoteBaseButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "@constants/styles";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { SlideInRight, SlideOutRight } from "react-native-reanimated";

const FanSpeedButton: React.FC<{}> = (props) => {
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  return (
    <RemoteBaseButton
      dispatchAction={changeFanSpeed}
      empty={!isOn}
      entering={SlideInRight}
      exiting={SlideOutRight}
    >
      <FontAwesome5 name="fan" size={48} color={Colors.neutral} />
    </RemoteBaseButton>
  );
};

export default FanSpeedButton;
