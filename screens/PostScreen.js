import React from "react";
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class PostScreen extends React.Component {
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <Text>Post Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
