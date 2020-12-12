import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import Settings from "../../screens/Settings";
import BottomTabNavigator from "../BottomTabNavigator";

function DrawerNavigator(props: any) {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
