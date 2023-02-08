import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LayoutWellcome from "../layouts/wellcome/LayoutWellcome";



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LayoutLogin}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="Wellcome" component={LayoutWellcome} />
        {/* <Stack.Screen name="Menu" component={Menu} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;