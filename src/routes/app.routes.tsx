import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NewScreen from "../screens/New";
import HomeScreen from "../screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="new" component={NewScreen} />
    </Navigator>
  );
}
