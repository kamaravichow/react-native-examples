import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createButtonTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDckCSN0VE1gs3qJyYsjf3n4GRdRcWQFno",
  authDomain: "momo-india.firebaseapp.com",
  databaseURL: "https://momo-india.firebaseio.com",
  projectId: "momo-india",
  storageBucket: "momo-india.appspot.com",
  messagingSenderId: "164779946628",
  appId: "1:164779946628:web:61faff1d769d6c7ed588d1",
  measurementId: "G-17GDQ60V6G",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
