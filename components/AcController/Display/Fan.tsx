import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { Colors } from "@constants/styles";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const Fan: React.FC<{}> = (props) => {
  const speed = useSelector((state: RootState) => state.ac.settings.fanSpeed);

  const animationValue = useRef(new Animated.Value(0)).current;
  const spin = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    animationValue.stopAnimation();
    animationValue.setValue(0);

    if (speed !== "auto") {
      const loop = Animated.loop(
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      loop.start();
      return () => loop.stop();
    }
  }, [speed]);

  if (speed === "auto") {
    return (
      <View style={styles.component}>
        <MaterialCommunityIcons
          name="fan-auto"
          size={32}
          color={Colors.neutral}
          style={styles.icon}
        />
      </View>
    );
  }

  return (
    <View style={styles.component}>
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
        }}
      >
        <FontAwesome5
          name="fan"
          size={16}
          color={Colors.neutral}
          style={styles.icon}
        />
      </Animated.View>
      {(speed === "medium" || speed === "high") && (
        <Animated.View
          style={{
            transform: [{ rotate: spin }],
          }}
        >
          <FontAwesome5
            name="fan"
            size={24}
            color={Colors.neutral}
            style={styles.icon}
          />
        </Animated.View>
      )}
      {speed === "high" && (
        <Animated.View
          style={{
            transform: [{ rotate: spin }],
          }}
        >
          <FontAwesome5
            name="fan"
            size={32}
            color={Colors.neutral}
            style={styles.icon}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    height: "100%",
    alignItems: "flex-end",
    // justifyContent: 'flex-start'
  },
  text: {
    color: Colors.neutral,
  },
  icon: {
    margin: 5,
  },
});

export default Fan;
