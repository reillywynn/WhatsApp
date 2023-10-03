import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import backgroundImage from "../assets/images/droplet.jpeg";
import colors from "../constants/colors";

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");
  const sendMessage = useCallback(() => {
    setMessageText("");
  });

  return (
    <SafeAreaView edges={["right", "top", "left"]} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => console.log("Presssed")}
            style={styles.mediaButton}
          >
            <Feather name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textbox}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />

          {messageText === "" && (
            <TouchableOpacity
              onPress={() => console.log("Presssed")}
              style={styles.mediaButton}
            >
              <Feather name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}

          {messageText !== "" && (
            <TouchableOpacity
              onPress={sendMessage}
              style={{ ...styles.mediaButton, ...styles.sendButton }}
            >
              <Feather name="send" size={20} color={"white"} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  label: {
    color: "black",
    fontSize: 18,
    fontFamily: "black",
  },
  mediaButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
    width: 35,
  },
  screen: {
    flex: 1,
  },
});
