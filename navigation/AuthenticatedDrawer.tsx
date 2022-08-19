import { View } from "react-native";
import { useDispatch } from "react-redux";
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { AppDispatch } from "@store";
import { logout } from "@store/slices/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AcRemoteScreen from "../screens/AcRemoteScreen";
import LightsScreen from "../screens/LightsScreen";
import { Colors } from "@constants/styles";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation, state } = props;
  const dispatch = useDispatch<AppDispatch>();

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        justifyContent: "space-between",
        flex: 1,
        paddingBottom: 64,
        backgroundColor: Colors.primary,
        paddingTop: 100,
      }}
    >
      <View>
        <DrawerItem
          label="Air Conditioner"
          focused={state.routeNames[state.index] === "Air Conditioner"}
          icon={(props) => (
            <MaterialCommunityIcons
              name="air-conditioner"
              size={24}
              color={props.focused ? Colors.primary : Colors.secondary}
            />
          )}
          activeTintColor={Colors.primary}
          inactiveTintColor={Colors.secondary}
          activeBackgroundColor={Colors.secondary}
          inactiveBackgroundColor={Colors.primary100}
          onPress={() => navigation.navigate("Air Conditioner")}
        />
        <DrawerItem
          label="Lights"
          focused={state.routeNames[state.index] === "Lights"}
          icon={(props) => (
            <MaterialCommunityIcons
              name="lightbulb"
              size={24}
              color={props.focused ? Colors.primary : Colors.secondary}
            />
          )}
          activeTintColor={Colors.primary}
          inactiveTintColor={Colors.secondary}
          activeBackgroundColor={Colors.secondary}
          inactiveBackgroundColor={Colors.primary100}
          onPress={() => props.navigation.navigate("Lights")}
        />
      </View>
      <View>
        <DrawerItem
          label="Logout"
          inactiveTintColor={Colors.danger}
          inactiveBackgroundColor={Colors.dangerLight}
          onPress={() => dispatch(logout())}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const AuthenticatedDrawer = () => {
  console.log("RENDER AuthenticatedDrawer");
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerShadowVisible: false,
        headerTintColor: Colors.neutral,
        drawerContentStyle: { backgroundColor: Colors.secondary },
        sceneContainerStyle: { backgroundColor: Colors.primary },
        headerLeft: () => <DrawerToggleButton tintColor={Colors.secondary} />,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Air Conditioner" component={AcRemoteScreen} />
      <Drawer.Screen name="Lights" component={LightsScreen} />
    </Drawer.Navigator>
  );
};

export default AuthenticatedDrawer;
