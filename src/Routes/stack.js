import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import Enterprises from "../Screens/Enterprises";
import Detail from "../Screens/Detail";
const Stack = createStackNavigator();
const Routes = () => {
  return (

      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Enterprises" component={Enterprises} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Routes;
