import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type Props = { onClick: () => void };

const SimpleButtonOnOff: React.FC<Props> = ({ onClick }) => {
  const handlePress = () => {
    onClick();
  };

  return (
    <View style={styles.component}>
      <Button onPress={handlePress} title={"On/Off"}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {},
});

export default SimpleButtonOnOff;
