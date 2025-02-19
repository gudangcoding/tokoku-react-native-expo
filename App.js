import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./route/MainNavigation";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
        {/* <StatusBar style="auto" /> */}
      </NavigationContainer>
    </Provider>
  );
}
