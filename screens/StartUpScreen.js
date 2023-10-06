import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import colors from "../constants/colors";
import commonStyles from "../constants/commonStyles";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { set } from "firebase/database";
import { setDidTryAutoLogin } from "../store/authSlice";

const StartUpScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const storedAuthInfo = await AsyncStorage.getItem("userData");
      if (!storedAuthInfo) {
        console.log("No storage found");
        dispatch(setDidTryAutoLogin());
        return;
      }
    };
    tryLogin();
  }, []);

  return (
    <View style={commonStyles.center}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default StartUpScreen;
