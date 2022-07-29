import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import Navigation from "@navigation/Navigation";
import Button from "@components/UI/Button";
import Map from "./Map";
import Building from "./Building";
import Rooms from "./Rooms";
import { Props as HomeScreenNavigationProps } from "../../../screens/HomeScreen";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../screens/types";

type NavProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home",
  undefined
>;

const FloorPlan: React.FC<{}> = (props) => {
  const { navigate } = useNavigation<NavProps>();

  // <ReactNativeZoomableView
  //   zoomEnabled={true}
  //   maxZoom={5}
  //   minZoom={0.1}
  //   zoomStep={0.25}
  //   initialZoom={1}
  //   bindToBorders={true}
  //   style={styles.component}
  // >
  return (
    <View style={styles.component}>
      <Pressable
        onPress={() => navigate("AcRemote")}
        style={styles.imageContainer}
      >
        <Image
          source={require("../../../assets/icons/air-conditioner-colored.png")}
          style={styles.image}
        />
      </Pressable>
      <View>
        <Rooms />
        <Building />
      </View>
    </View>
  );
  // </ReactNativeZoomableView>
};
const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    end: "10%",
    top: "10%",
    height: 150,
    width: 150,
  },
  image: {
    height: 150,
    width: 150,
  },
});

export default FloorPlan;
