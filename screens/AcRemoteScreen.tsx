import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CorrectionModeButton from "@components/AcController/Buttons/CorrectionModeButton";
import Remote from "@components/AcController/Remote";
import { AppDispatch, RootState } from "@store";
import { RootStackParamList } from "./types";
import { fetchAcState } from "@store/slices/ac";

type Props = NativeStackScreenProps<RootStackParamList, "AcRemote">;

const AcRemoteScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch<AppDispatch>()
  const isOn = useSelector((state: RootState) => state.ac.settings.power);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>  <CorrectionModeButton />,
    });
  }, []);

  useEffect(() => {
    if (isOn) {
      dispatch(fetchAcState())
    }
  }, [isOn])

  return <Remote />;
};

const styles = StyleSheet.create({
  component: {},
});

export default AcRemoteScreen;
