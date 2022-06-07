import React from "react";
import { View, Text, StyleSheet } from "react-native";

function LoginScreen() {
  return (
    <View style={styles.screen}>
      <Text>This is the Login Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default LoginScreen;
