import { Colors } from "@constants/styles";
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
import { useDispatch } from "react-redux";
import AcRemoteScreen from "../screens/AcRemoteScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <DrawerContentScrollView>
      <DrawerContent {...props} />
      <DrawerItem
        label="Logout"
        inactiveTintColor={Colors.danger}
        onPress={() => dispatch(logout())}
      />
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
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AuthenticatedDrawer;
