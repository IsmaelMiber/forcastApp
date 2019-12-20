import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import Home from "./src/Screens/Home";
import Splash from "./src/Screens/Splash";
import City from "./src/Screens/City";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from "react-redux";
import store from "./src/redux/store";

const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
    },
    City: {
      screen: City
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <AppContainer />
        </SafeAreaView>
      </Provider>
  );
};

export default App;
