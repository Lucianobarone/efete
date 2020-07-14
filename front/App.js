import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Home from "../front/src/screens/home/home";
import userHomeContainer from "./src/screens/home/userHome/userHomeContainer";
import SelectAmountContainer from "./src/screens/selectAmount/SelectAmountContainer";
import store from "./src/redux/store/index";
import SelectOtherAmountContainer from "./src/screens/selectOtherAmount/SelectOtherAmountContainer";

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="selectAmount">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={userHomeContainer} />
          <Stack.Screen name="selectAmount" component={SelectAmountContainer} />
          <Stack.Screen
            name="selectOtherAmount"
            component={SelectOtherAmountContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
