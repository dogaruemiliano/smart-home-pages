import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign"

import { Colors } from "../../constants/styles";

type Props = {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  children?: any;
};

const ProfileButton: React.FC<Props> = ({ onPress, isLoading, disabled, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      <AntDesign name="user" size={24} color={Colors.neutral} />
    </Pressable>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    borderColor: Colors.neutral,
    borderWidth: 1,
    // paddingVertical: 6,
    // paddingHorizontal: 12,
    // backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.neutral,
    fontSize: 16,
    fontWeight: "bold",
  },
});
