import React from "react";
import { View, Text, StyleSheet, LayoutAnimation } from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <Text>profile Screen</Text>
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
