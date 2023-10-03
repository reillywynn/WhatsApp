import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  label: {
    color: "black",
    fontSize: 18,
    fontFamily: "black",
  },
});
