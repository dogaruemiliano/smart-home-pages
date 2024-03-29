import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types";
import { logout } from "../store/slices/auth";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import ProfileButton from "../components/user/ProfileButton";
import FloorPlan from "../components/Home/FloorPlan/FloorPlan";
import { Colors } from "../constants/styles";
import { fetchLightsData, setLightsState } from "@store/slices/Lights";
import { roomsData } from "@constants/floorPlanData";

export type Props = NativeStackScreenProps<RootStackParamList, "Lights">;

const LightsScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.rootContainer}>
      <FloorPlan />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  imageContainer: {
    height: 50,
    width: 50,
    backgroundColor: "pink",
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default LightsScreen;
