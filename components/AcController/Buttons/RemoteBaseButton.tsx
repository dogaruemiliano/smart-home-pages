import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store";
import { Colors } from "@constants/styles";
import { AsyncThunk } from "@reduxjs/toolkit";

const RemoteBaseButton: React.FC<{
  children?: any;
  dispatchAction: AsyncThunk<void, boolean | undefined, {}>;
  empty?: boolean;
}> = (props) => {
  const { children, dispatchAction, empty } = props;
  const dispatch = useDispatch<AppDispatch>();
  const isCorrectionMode = useSelector(
    (state: RootState) => state.ac.correctionMode
  );

  const isLoading = useSelector(
    (state: RootState) => state.ac.isLoading
  );

  const handlePress = () => {
    if (!isLoading){
      dispatch(dispatchAction(isCorrectionMode));
    }
  };

  const handleLongPress = () => {
    dispatch(dispatchAction(true));
  };

  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={componentStyle(empty)}
    >
      {children}
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
