import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ChatListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Chat List Screen</Text>

      <Button
        title="Go to Settings"
        onPress={() => {
          props.navigation.navigate("ChatSettings");
        }}
      />
    </View>
  );
};

export default ChatListScreen;

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
