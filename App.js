/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allreducers from "./src/reducers/index";
import Home from "./src/Screens/Home";
const App = () => {
  const store = createStore(allreducers)
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};


export default App;
