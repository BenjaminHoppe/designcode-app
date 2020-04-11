import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-home";
            // for differnt icon on focus
            // iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Courses") {
            iconName = "ios-albums";
          } else if (route.name === "Projects") {
            iconName = "ios-folder";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#4775f5",
        inactiveTintColor: "#b8bece",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={SectionScreen} />
      <Tab.Screen name="Projects" component={SectionScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
