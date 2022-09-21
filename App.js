import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { AppProvider } from "./context/AppContext";

import HomeScreen from "./src/HomeScreen";

const Stack = createStackNavigator();

function App () {
  return(
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}

export default App;