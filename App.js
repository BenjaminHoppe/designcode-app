import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./navigator/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./navigator/TabNavigator";

const initialState = {
  action: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {action: "openMenu"};
    case "CLOSE_MENU":
      return {action: "closeMenu"};
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  </NavigationContainer>
);

export default App;
