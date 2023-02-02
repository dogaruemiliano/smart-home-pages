import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { Colors } from "@constants/styles";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const Fan: React.FC<{}> = (props) => {
  const speed = useSelector((state: RootState) => state.ac.settings.fanSpeed);

  // const animationValue = useRef(new Animated.Value(0)).current;
  // const spin = animationValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0deg", "360deg"],
  // });

  // useEffect(() => {
  //   animationValue.stopAnimation();
  //   animationValue.setValue(0);

  //   if (speed !== "auto") {
  //     const loop = Animated.loop(
  //       Animated.timing(animationValue, {
  //         toValue: 1,
  //         duration: 2000,
  //         easing: Easing.linear,
  //         useNativeDriver: true,
  //       })
  //     );
  //     loop.start();
  //     return () => loop.stop();
  //   }
  // }, [speed]);

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
      <View
      // style={{
      //   transform: [{ rotate: spin }],
      // }}
      >
        <FontAwesome5
          name="fan"
          size={16}
          color={Colors.neutral}
          style={styles.icon}
        />
      </View>

      <View
      // style={{
      //   transform: [{ rotate: spin }],
      // }}
      >
        <FontAwesome5
          name="fan"
          size={24}
          color={
            speed === "medium" || speed === "high"
              ? Colors.neutral
              : Colors.disabled
          }
          style={styles.icon}
        />
      </View>

      <View
      // style={{
      //   transform: [{ rotate: spin }],
      // }}
      >
        <FontAwesome5
          name="fan"
          size={32}
          color={speed === "high" ? Colors.neutral : Colors.disabled}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    // height: "100%",
    alignItems: "flex-end",
    // justifyContent: 'flex-start'
  },
  text: {
    color: Colors.neutral,
  },
  icon: {
    margin: 6,
  },
});

export default Fan;
