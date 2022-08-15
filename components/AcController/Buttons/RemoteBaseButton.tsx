import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store";
import { Colors } from "@constants/styles";
import { AsyncThunk } from "@reduxjs/toolkit";

const RemoteBaseButton: React.FC<{
  children?: any;
  onPress?: () => void;
  onLongPress?: () => void;
  dispatchAction?: AsyncThunk<void, void, {}>;
  empty?: boolean;
}> = (props) => {
  const { children, onPress, onLongPress, dispatchAction, empty } = props;
  const dispatch = useDispatch<AppDispatch>();

  const handlePress = () => {
    if (!empty) {
      onPress && onPress();
      dispatchAction && dispatch(dispatchAction());
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      onLongPress={onLongPress}
      style={componentStyle(empty)}
    >
      {!empty && children}
    </Pressable>
  );
};

const componentStyle = (isEmpty: boolean | undefined) => {
  const stl = StyleSheet.create({
    component: {
      width: 112,
      height: 64,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isEmpty ? Colors.transparent : Colors.secondary,
      outlineStyle: "none",
      shadowRadius: 8,
      shadowOpacity: isEmpty ? 0 : 0.4,
      shadowOffset: { height: 4, width: 0 },
      elevation: isEmpty ? 0 : 1,
    },
  });

  return stl.component;
};

export default RemoteBaseButton;
