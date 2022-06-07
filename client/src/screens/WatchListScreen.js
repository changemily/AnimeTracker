import React from "react";
import { View, Text, StyleSheet } from "react-native";

function WatchListScreen() {
  return (
    <View style={styles.screen}>
      <Text>This is the Watch List Screen!</Text>
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

export default WatchListScreen;