import React from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store";
import { Colors } from "@constants/styles";
import { AsyncThunk } from "@reduxjs/toolkit";
import Animated, {
  BaseAnimationBuilder,
  EntryExitAnimationFunction,
  FadeIn,
  FadeOut,
  FlipInEasyX,
  FlipOutEasyX,
  SlideInLeft,
  SlideOutLeft,
  RollInLeft,
  RollOutLeft,
} from "react-native-reanimated";

const RemoteBaseButton: React.FC<{
  children?: any;
  onPress?: () => void;
  onLongPress?: () => void;
  dispatchAction?: AsyncThunk<void, void, {}>;
  empty?: boolean;
  // TODO type entering correct
  entering?: any;
  exiting?: any;
}> = (props) => {
  const {
    children,
    onPress,
    onLongPress,
    dispatchAction,
    empty,
    entering,
    exiting,
  } = props;
  const dispatch = useDispatch<AppDispatch>();

  const handlePress = () => {
    if (!empty) {
      onPress && onPress();
      dispatchAction && dispatch(dispatchAction());
    }
  };

  return (
    <Animated.View
      entering={entering ? entering : SlideInLeft}
      exiting={exiting ? exiting : SlideOutLeft}
      style={[
        styles.component,
        {
          borderColor: empty ? Colors.transparent : Colors.neutral,
          backgroundColor: empty ? Colors.transparent : Colors.secondary,
        },
      ]}
    >
      <Pressable onPress={handlePress} onLongPress={onLongPress} style={[]}>
        {!empty && children}
      </Pressable>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  component: {
    flex: 1,
    width: 112,
    maxWidth: 112,
    height: 64,
    maxHeight: 64,
    backgroundColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 8,
    // marginVertical: 24,
    // margin: '15%'
    // marginVertical: Dimensions.get("window").height * 0.03,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 8,
    shadowOpacity: 0.4,
    shadowOffset: { height: 4, width: 0 },
    elevation: 1,
  },
  text: {
    color: Colors.neutral,
  },
});

export default RemoteBaseButton;
