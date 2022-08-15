import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store";
import { toggleCorrectionMode } from "@store/slices/ac";
import { Colors } from "@constants/styles";
import { Ionicons } from "@expo/vector-icons";

const CorrectionModeButton: React.FC<{}> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handlePress = () => dispatch(toggleCorrectionMode());
  const isCorrectionMode = useSelector((state: RootState) => state.ac.correctionMode)

  return (
    <Pressable onPress={handlePress} style={styles.component}>
      <Ionicons
        name={isCorrectionMode ? "ios-settings" : "ios-settings-outline"}
        size={32}
        color={Colors.secondary}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  component: {},
});

export default CorrectionModeButton;
