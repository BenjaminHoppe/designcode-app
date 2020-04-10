import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';

const Stack = createStackNavigator ();

function AppNavigator () {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Section"
        component={SectionScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
