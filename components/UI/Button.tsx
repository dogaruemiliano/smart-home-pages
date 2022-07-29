import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../../constants/styles";

type Props = {
  onPress: () => void;
  isLoading?: boolean;
  margin?: number;
  disabled?: boolean;
  children?: any;
};

const Button: React.FC<Props> = ({
  onPress,
  isLoading,
  disabled,
  children,
  margin,
}) => {
  const buttonStyles = { ...styles.button, margin: margin };
  return (
    <Pressable
      style={({ pressed }) => [buttonStyles, pressed && styles.pressed]}
      onPress={onPress}
      disabled={!!isLoading}
    >
      <View>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={Colors.neutral} />
        ) : (
          <Text style={styles.buttonText}>{children}</Text>
        )}
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary,
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
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: "500",
  },
});
