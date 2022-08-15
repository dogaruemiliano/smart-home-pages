import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Navigation from "@navigation/Navigation";
import CorrectionModeButton from "@components/AcController/Buttons/CorrectionModeButton";
import Remote from "@components/AcController/Remote";
import { RootState } from "@store";
import { RootStackParamList } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

const AcRemoteScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => isOn && <CorrectionModeButton />,
    });
  }, [isOn, navigation]);
  return <Remote />;
};

const styles = StyleSheet.create({
  component: {},
});

export default AcRemoteScreen;
