import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import Home from "./screens/Home";
import Details from "./screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default App;
