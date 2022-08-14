import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store";
import { Colors } from "@constants/styles";
import { AsyncThunk } from "@reduxjs/toolkit";
// import Animated, {
//   BaseAnimationBuilder,
//   EntryExitAnimationFunction,
//   FadeIn,
//   FadeOut,
//   FlipInEasyX,
//   FlipOutEasyX,
//   SlideInLeft,
//   SlideOutLeft,
//   RollInLeft,
//   RollOutLeft,
// } from "react-native-reanimated";

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
    <View
      // entering={entering ? entering : SlideInLeft}
      // exiting={exiting ? exiting : SlideOutLeft}
      style={componentStyle(empty)}
    >
      <Pressable
        onPress={handlePress}
        onLongPress={onLongPress}
        style={{ borderWidth: 0 }}
      >
        {!empty && children}
      </Pressable>
    </View>
  );
};

const componentStyle = (isEmpty: boolean | undefined) => {
  const stl = StyleSheet.create({
    component: {
      flex: 1,
      width: 112,
      maxWidth: 112,
      height: 64,
      maxHeight: 64,
      borderWidth: 1,
      borderRadius: 8,
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
      shadowRadius: isEmpty ? 0 : 8,
      shadowOpacity: isEmpty ? 0 : 0.4,
      shadowOffset: { height: 4, width: 0 },
      elevation: isEmpty ? 0 : 1,
      outlineWidth: 0,
      borderColor: isEmpty ? Colors.transparent : Colors.neutral,
      backgroundColor: isEmpty ? Colors.transparent : Colors.secondary,
    },
  });

  return stl.component;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.neutral,
  },
});

export default RemoteBaseButton;
