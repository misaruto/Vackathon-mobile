import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import {
  BottomTabParamList,
  HomeParamList,
  HistoryParamList,
  NewNavigatorParamList,
} from "../../types";
import New from "../screens/New";
import Settings from "../screens/Settings";
import Home from "../screens/Home";
import History from "../screens/History";
import ReadNew from "../screens/New/ReadNew";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{}}
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        inactiveTintColor: Colors[colorScheme].tabIconDefault,
        activeBackgroundColor: Colors[colorScheme].tabSelectedBackground,
        tabStyle: {
          flex: 1,
          justifyContent: "center",

          flexDirection: "column",
          alignItems: "center",
        },
        labelStyle: { fontSize: 12 },
        style: {
          backgroundColor: Colors[colorScheme].bottomNavigatorBackground,
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="History"
        component={History}
        options={{
          title: "Histórico",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="NewNavigator"
        component={NewNavigator}
        options={{
          title: "Novo",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="plus-circle-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Configurações",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return (
    <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
const HistoryStack = createStackNavigator<HistoryParamList>();

function HistoryNavigator() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
    </HistoryStack.Navigator>
  );
}

const NewStack = createStackNavigator<NewNavigatorParamList>();
function NewNavigator() {
  return (
    <NewStack.Navigator initialRouteName="New">
      <NewStack.Screen
        name="New"
        component={New}
        options={{ headerShown: false }}
      />
      <NewStack.Screen
        name="ReadNew"
        component={ReadNew}
        options={{ headerShown: false }}
      />
    </NewStack.Navigator>
  );
}
