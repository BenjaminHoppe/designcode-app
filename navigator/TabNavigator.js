import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Section" component={SectionScreen} />
      <Tab.Screen name="Courses" component={SectionScreen} />
      <Tab.Screen name="Projects" component={SectionScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
