import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createButtonTabNavigator,
  createBottomTabNavigator,
} from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MessageScreen from "./screens/MessageScreen";
import NotificationScreen from "./screens/NotificationScreen";
import PostScreen from "./screens/PostScreen";

import * as firebase from "firebase";
import ProfileScreen from "./screens/ProfileScreen";

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

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
            ),
          },
        },
        Message: {
          screen: MessageScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="ios-chatboxes"
                size={24}
                color={tintColor}
              ></Ionicons>
            ),
          },
        },
        Post: {
          screen: PostScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="ios-add-circle"
                size={48}
                color="#E9446A"
                style={{
                  shadowColor: "#E9446A",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowRadius: 10,
                  shadowOpacity: 0.3,
                }}
              ></Ionicons>
            ),
          },
        },
        Notification: {
          screen: NotificationScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="ios-notifications"
                size={24}
                color={tintColor}
              ></Ionicons>
            ),
          },
        },
        Profile: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="ios-person"
                size={24}
                color={tintColor}
              ></Ionicons>
            ),
          },
        },
      },
      {
        defaultNavigationOptions: {
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (navigation.state.key === "Post") {
              navigation.navigate("postModal");
            } else {
              defaultHandler();
            }
          },
        },
        tabBarOptions: {
          activeTintColor: "#161F3D",
          inactiveTintColor: "#BABBC4",
          showLabel: false,
        },
      }
    ),
    postModal: {
      screen: PostScreen,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
