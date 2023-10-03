import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatSettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Chat Settings Screen</Text>
    </View>
  );
};

export default ChatSettingsScreen;

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
